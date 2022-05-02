import { Transform } from '../../../type';

export const transformPx: Transform = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return `${value}px`;
};
