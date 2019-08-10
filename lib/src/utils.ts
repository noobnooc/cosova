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
