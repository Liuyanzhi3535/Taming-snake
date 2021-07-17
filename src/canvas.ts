import { CELL_SIZE, COLS, GAP_SIZE, ROWS } from './constants';
import { Point2D } from './types';

// 畫布設定
export const CANVAS_WIDTH = COLS * (CELL_SIZE + GAP_SIZE);
export const CANVAS_HEIGHT = ROWS * (CELL_SIZE + GAP_SIZE);

// 顏色配置
const TEXT_BACKGROUND_COLOR = 'rgba(255, 255, 255, 0.7)';
const BACKGROUND_COLOR = '#EAEAEA';
const SNAKE_HEAD_COLOR = '#252A34';
const SNAKE_COLOR = '#08D9D6';
const APPLE_COLOR = '#FF2E63';

export function createCanvasEl() {
  const canvas = document.createElement('canvas');
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  return canvas;
}

export function renderIntro(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = TEXT_BACKGROUND_COLOR;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let textX = CANVAS_WIDTH / 2;
  let textY = CANVAS_HEIGHT / 2;
  drawText(ctx, 'Press [enter]', textX, textY, 'black', 25);
}

export function renderBackground(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

export function renderGameOver(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = TEXT_BACKGROUND_COLOR;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let textX = CANVAS_WIDTH / 2;
  let textY = CANVAS_HEIGHT / 2;

  drawText(ctx, 'GAME OVER!', textX, textY, 'black', 25);
}

export function renderSnake(ctx: CanvasRenderingContext2D, snake: Point2D[]) {
  snake.forEach((segment, index) => drawCell(ctx, wrapBounds(segment), getSegmentColor(index)));
}

export function renderApples(ctx: CanvasRenderingContext2D, apples: Point2D[]) {
  apples.forEach((apple) => drawCell(ctx, apple, APPLE_COLOR));
}

export function renderScore(ctx: CanvasRenderingContext2D, score: number) {
  let textX = CANVAS_WIDTH - 20;
  let textY = 20;

  drawText(ctx, score.toString(), textX, textY, 'rgba(0, 0, 0, 0.4)', 20);
}

function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  fillStyle: string,
  fontSize: number,
  horizontalAlign: CanvasTextAlign = 'center',
  verticalAlign: CanvasTextBaseline = 'middle'
) {
  ctx.fillStyle = fillStyle;
  ctx.font = `bold ${fontSize}px sans-serif`;

  let textX = x;
  let textY = y;

  ctx.textAlign = horizontalAlign;
  ctx.textBaseline = verticalAlign;

  ctx.fillText(text, textX, textY);
}

function drawCell(ctx: CanvasRenderingContext2D, point: Point2D, color: string) {
  const x = point.x * CELL_SIZE + point.x * GAP_SIZE;
  const y = point.y * CELL_SIZE + point.y * GAP_SIZE;

  ctx.fillStyle = color;
  ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
}

function getSegmentColor(index: number) {
  return index === 0 ? SNAKE_HEAD_COLOR : SNAKE_COLOR;
}

function wrapBounds(point: Point2D) {
  point.x = point.x >= COLS ? 0 : point.x < 0 ? COLS - 1 : point.x;
  point.y = point.y >= ROWS ? 0 : point.y < 0 ? ROWS - 1 : point.y;

  return point;
}
