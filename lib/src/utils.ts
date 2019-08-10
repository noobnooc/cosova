export type CosovaPropType<T> = T | (() => T);

const GLOBAL_STATE = {
  id: 0,
};

export function getNextId(): number {
  return ++GLOBAL_STATE.id;
}

export function getRandomItemFormArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function convertDurationToTransitionAvilableDuration(
  duration: number,
): string {
  return `${duration / 1000}s`;
}

export function getProp<T>(prop: CosovaPropType<T>): T {
  if (typeof prop === 'function') {
    return (prop as Function)();
  } else {
    return prop;
  }
}
