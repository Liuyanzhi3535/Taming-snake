import {
  animationFrameScheduler,
  distinctUntilChanged,
  EMPTY,
  filter,
  first,
  fromEvent,
  interval,
  map,
  mapTo,
  mergeWith,
  Observable,
  of,
  scan,
  share,
  skip,
  startWith,
  Subject,
  switchMap,
  takeWhile,
  tap,
  throttleTime,
  timeInterval,
  withLatestFrom,
} from 'rxjs';

import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  createCanvasEl,
  renderApples,
  renderBackground,
  renderGameOver,
  renderIntro,
  renderScore,
  renderSnake,
} from './canvas';
import { SNAKE_SPEED, DIRECTION_MAP, INIT_DIRECTION, FPS, PER_APPLE_SCORE } from './constants';
import { Point2D } from './types';
import {
  checkCollision,
  generateInitApples,
  generateSnake as generateInitSnake,
  getRandomPosition,
  isGameOver,
} from './utils';

// 建立畫布
let canvas = createCanvasEl();
let ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// 按鈕事件
const keydown$ = fromEvent(document, 'keydown');
const reset$ = keydown$.pipe(
  filter((e: KeyboardEvent) => e.key === 'r'),
  mapTo('RESET')
);
const start$ = keydown$.pipe(
  filter((e: KeyboardEvent) => e.key === 'Enter'),
  mapTo('START')
);
const pause$ = keydown$.pipe(
  filter((e: KeyboardEvent) => e.key === ' '),
  mapTo('PAUSE')
);
const directions$: Observable<Point2D> = keydown$.pipe(
  throttleTime(SNAKE_SPEED * 0.8),
  map((e: KeyboardEvent) => {
    return DIRECTION_MAP.get(e.key);
  }),
  filter((v) => !!v),
  startWith(DIRECTION_MAP.get(INIT_DIRECTION)),
  scan((previous, current) => {
    const isOpposite = () => {
      return current.x === -previous.x || current.y === -previous.y;
    };
    return isOpposite() ? previous : current;
  }, DIRECTION_MAP.get(INIT_DIRECTION)),
  distinctUntilChanged()
);

// 時間軸
const ticker$ = start$.pipe(
  mergeWith(pause$, reset$),
  switchMap((action) => {
    switch (action) {
      case 'START':
        return interval(FPS, animationFrameScheduler).pipe(
          timeInterval(),
          map((value) => value.interval)
        );
      case 'PAUSE':
        return EMPTY;
      case 'RESET':
        return of(0);
    }
  }),
  share()
);

// 建立遊戲
function craeteGameRround(ticker$: Observable<number>): Observable<[number, Point2D[], Point2D[], number]> {
  const appleEaten$ = new Subject<number>();
  const snakeLength$ = appleEaten$.pipe(
    skip(1),
    startWith(5),
    scan((currentLength, eaten) => currentLength + eaten, 0)
  );
  const snake$ = ticker$.pipe(
    throttleTime(SNAKE_SPEED),
    withLatestFrom(directions$, snakeLength$),
    scan((snake, [interval, { x, y }, length]) => {
      let nx = snake[0].x;
      let ny = snake[0].y;

      nx += x;
      ny += y;

      let tail: Point2D;

      if (length > snake.length) {
        tail = { x: nx, y: ny };
      } else {
        tail = snake.pop();
        tail.x = nx;
        tail.y = ny;
      }

      snake.unshift(tail);
      return snake;
    }, generateInitSnake()),
    share()
  );
  const apples$ = snake$.pipe(
    scan((apples, snake) => {
      let head = snake[0];

      for (let i = 0; i < apples.length; i++) {
        if (checkCollision(apples[i], head)) {
          apples.splice(i, 1);
          return [...apples, getRandomPosition(snake)];
        }
      }
      return apples;
    }, generateInitApples()),
    distinctUntilChanged(),
    tap((_) => appleEaten$.next(1)),
    share()
  );
  const score$ = appleEaten$.pipe(
    skip(1),
    scan((previousScore, eaten) => {
      return previousScore + eaten * PER_APPLE_SCORE;
    }, 0),
    startWith(0)
  );
  const gameState$ = ticker$.pipe(withLatestFrom(snake$, apples$, score$));

  return gameState$;
}

const game$ = of('satrt game').pipe(
  map((_) => ticker$),
  switchMap(craeteGameRround),
  takeWhile(([interval, snake, apples, score]) => !isGameOver(snake) && interval !== 0)
);

const observer = {
  next: ([_, snake, apples, score]: any) => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    renderBackground(ctx);
    renderSnake(ctx, snake);
    renderApples(ctx, apples);
    renderScore(ctx, score);
  },
  complete: () => {
    renderGameOver(ctx);
    start$.pipe(first()).subscribe(startGame);
  },
};

function startGame() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  game$.subscribe(observer);
  renderBackground(ctx);
  renderIntro(ctx);
}

startGame();
