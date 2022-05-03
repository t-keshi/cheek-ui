import { Breakpoints, CuiSystemValue, Theme, Transform } from '../type';

export const mq = (breakpointsValue: number) => `@media (min-width: ${breakpointsValue}px)`;

const generate = (
  properties: string[],
  transform: Transform,
  value: string | number,
  theme: Theme,
) =>
  properties.reduce(
    (prev, current) => ({
      ...prev,
      [current]: transform(value, theme),
    }),
    {},
  );

export const handleBreakpoints = (
  cuiSystemValue: CuiSystemValue,
  properties: string[],
  transform: Transform,
  theme: Theme,
) => {
  if (!Array.isArray(cuiSystemValue)) {
    return generate(properties, transform, cuiSystemValue, theme);
  }

  return cuiSystemValue.reduce((prev, current, idx) => {
    if (idx === 0) {
      return generate(properties, transform, cuiSystemValue[0], theme);
    }
    if (current === '_' || current === cuiSystemValue[idx - 1]) {
      return prev;
    }
    const breakpointsArray = Object.keys(theme.breakpoints);
    const breakpointsValue = theme.breakpoints[breakpointsArray[idx] as keyof Breakpoints];
    const mediaQuery = mq(breakpointsValue);
    const nested = generate(properties, transform, cuiSystemValue[idx], theme);

    return {
      ...prev,
      [mediaQuery]: nested,
    };
  }, {});
};
