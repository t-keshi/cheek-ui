/* eslint-disable @typescript-eslint/no-explicit-any */

const isPlainObject = (item: unknown): item is Record<keyof any, unknown> =>
  item !== null && typeof item === 'object' && item.constructor === Object;

export const deepMerge = <T>(target: T, source: unknown, clone = true): T => {
  const output = clone ? { ...target } : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        (output as Record<keyof any, unknown>)[key] = deepMerge(target[key], source[key], clone);
      } else {
        (output as Record<keyof any, unknown>)[key] = source[key];
      }
    });
  }

  return output;
};
