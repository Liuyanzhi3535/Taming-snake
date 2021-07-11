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
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  TimeInterval,
  timeInterval,
  withLatestFrom,
} from "rxjs";

import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  COLS,
  createCanvasEl,
  renderApples,
  renderBackground,
  renderGameOver,
  renderIntro,
  renderScore,
  renderSnake,
  ROWS,
} from "./canvas";
import { Point2D } from "./types";
import { generateSnake as generateInitSnake } from "./utils";

let canvas = createCanvasEl();
let ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

// 繪製開始畫面
renderBackground(ctx);

// 按鈕事件
const keydown$ = fromEvent(document, "keydown");

const reset$ = keydown$.pipe(
  filter((e: KeyboardEvent) => e.key === "r"),
  mapTo("RESET")
);
const start$ = keydown$.pipe(
  filter((e: KeyboardEvent) => e.key === "Enter"),
  mapTo("START")
);
const pause$ = keydown$.pipe(
  filter((e: KeyboardEvent) => e.key === " "),
  mapTo("PAUSE")
);

const directions$: Observable<Point2D> = keydown$.pipe(
  map((e: KeyboardEvent) => {
    const directionMap = new Map<
      KeyboardEvent["key"],
      { x: number; y: number }
    >();
    directionMap.set("ArrowUp", { x: 0, y: -1 });
    directionMap.set("ArrowDown", { x: 0, y: 1 });
    directionMap.set("ArrowLeft", { x: -1, y: 0 });
    directionMap.set("ArrowRight", { x: 1, y: 0 });

    return directionMap.get(e.key);
  }),
  filter((v) => !!v),
  startWith({ x: 1, y: 0 }),
  scan((previous, current) => {
    const isOpposite = () => {
      return current.x === -previous.x || current.y === -previous.y;
    };
    return isOpposite() ? previous : current;
  }),
  distinctUntilChanged()
);
//

const ticker$ = start$.pipe(
  mergeWith(pause$, reset$),
  switchMap((action) => {
    switch (action) {
      case "START":
        return interval(1000 / 60, animationFrameScheduler).pipe(
          timeInterval(),
          map((value) => value.interval)
        );
      case "PAUSE":
        return EMPTY;
      case "RESET":
        return of(0);
    }
  }),
  share()
);

//

function craeteGame(
  ticker$: Observable<number>
): Observable<[number, Point2D[], Point2D[], number]> {
  const appleEaten$ = new Subject<number>();

  const snakeLength$ = appleEaten$.pipe(
    skip(1),
    startWith(5),
    scan((currentLength, one) => currentLength + one, 0)
  );

  const snake$ = ticker$.pipe(
    throttleTime(200),
    withLatestFrom(directions$, snakeLength$),
    scan((snake, [interval, { x, y }, length]) => {
      let nx = snake[0].x;
      let ny = snake[0].y;

      nx += x;
      ny += y;

      let tail;

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

  const score$ = apples$.pipe(
    skip(1),
    scan((previousScore, apple) => {
      return previousScore + 1;
    }, 0),
    startWith(0)
  );

  const gameState$ = ticker$.pipe(withLatestFrom(snake$, apples$, score$));

  return gameState$;
}

const game$ = of("satrt game").pipe(
  map((_) => ticker$),
  switchMap(craeteGame),

  takeWhile(
    ([interval, snake, apples, score]) => !isGameOver(snake) && interval !== 0
  )
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
    console.log("complete");
    renderGameOver(ctx);

    start$.pipe(first()).subscribe(startGame);
  },
};

function startGame() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  game$.subscribe(observer);
  renderIntro(ctx);
}

startGame();

function generateInitApples() {
  let apples = [];

  for (let i = 0; i < 2; i++) {
    apples.push(getRandomPosition());
  }

  return apples;
}

function getRandomPosition(snake: Array<Point2D> = []): Point2D {
  let position = {
    x: getRandomNumber(0, COLS - 1),
    y: getRandomNumber(0, ROWS - 1),
  };

  if (isEmptyCell(position, snake)) {
    return position;
  }

  return getRandomPosition(snake);
}

function checkCollision(a: Point2D, b: Point2D) {
  return a.x === b.x && a.y === b.y;
}

function isEmptyCell(position: Point2D, snake: Array<Point2D>): boolean {
  return !snake.some((segment) => checkCollision(segment, position));
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isGameOver(snake: Point2D[]) {
  let head = snake[0];
  let body = snake.slice(1, snake.length);

  return body.some((segment) => checkCollision(segment, head));
}
