import { COLS, ROWS } from './constants';
import { Point2D } from './types';

const snakeLength = 5;

export function generateSnake() {
  let snake: { x: number; y: number }[] = [];

  for (let i = snakeLength - 1; i >= 0; i--) {
    snake.push({ x: i, y: 0 });
  }

  return snake;
}

export function generateInitApples() {
  let apples = [];

  for (let i = 0; i < 2; i++) {
    apples.push(getRandomPosition());
  }

  return apples;
}

export function getRandomPosition(snake: Array<Point2D> = []): Point2D {
  let position = {
    x: getRandomNumber(0, COLS - 1),
    y: getRandomNumber(0, ROWS - 1),
  };

  if (isEmptyCell(position, snake)) {
    return position;
  }

  return getRandomPosition(snake);
}

export function checkCollision(a: Point2D, b: Point2D) {
  return a.x === b.x && a.y === b.y;
}

export function isEmptyCell(position: Point2D, snake: Array<Point2D>): boolean {
  return !snake.some((segment) => checkCollision(segment, position));
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isGameOver(snake: Point2D[]) {
  let head = snake[0];
  let body = snake.slice(1, snake.length);

  return body.some((segment) => checkCollision(segment, head));
}
