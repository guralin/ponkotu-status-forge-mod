export const normalizeStack = (value: number): number =>
  Math.max(0, Math.floor(value));

export const decayByRatio = (value: number, ratio: number): number =>
  normalizeStack(value * ratio);

export const decrementStack = (value: number, amount = 1): number =>
  normalizeStack(value - amount);
