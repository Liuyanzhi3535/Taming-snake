const snakeLength = 5;

export function generateSnake() {
  let snake: { x: number; y: number }[] = [];

  for (let i = snakeLength - 1; i >= 0; i--) {
    snake.push({ x: i, y: 0 });
  }

  return snake;
}

