export const COLS = 30;
export const ROWS = 30;
export const GAP_SIZE = 1;
export const CELL_SIZE = 20;
export const INIT_DIRECTION = 'ArrowRight';
export const FPS = 1000 / 60;
export const SNAKE_SPEED = 200;
export const PER_APPLE_SCORE = 1;

export const DIRECTION_MAP = new Map<KeyboardEvent['key'], { x: number; y: number }>();
DIRECTION_MAP.set('ArrowUp', { x: 0, y: -1 });
DIRECTION_MAP.set('ArrowDown', { x: 0, y: 1 });
DIRECTION_MAP.set('ArrowLeft', { x: -1, y: 0 });
DIRECTION_MAP.set('ArrowRight', { x: 1, y: 0 });