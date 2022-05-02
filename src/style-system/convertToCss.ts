import {
  CuiSystemConfig,
  CuiSystemKey,
  CuiSystemProps,
  CuiSystemValue,
  EmotionProps,
  Theme,
} from '../type';
import { deepMerge } from '../utils/deepMerge';
import { handleBreakpoints } from './breakpoints';

const convertToCss = (
  cuiSystemKey: CuiSystemKey,
  cuiSystemValue: CuiSystemValue,
  cuiSystemConfig: CuiSystemConfig,
  theme: Theme,
) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { properties, transform } = cuiSystemConfig[cuiSystemKey]!;

  return handleBreakpoints(cuiSystemValue, properties, transform, theme);
};

export const convertToCssFactory = (cuiSystemConfig: CuiSystemConfig) => (
  props: CuiSystemProps & EmotionProps,
) => {
  // rest including html attributes, emotion props, cssStyleProps
  const { children: _, theme, ...rest } = props;
  const h = Object.keys(rest).reduce((prevCss, restKey) => {
    if (restKey in cuiSystemConfig === false) {
      return prevCss;
    }
    const cuiSystemValue = rest[restKey as keyof typeof rest] as CuiSystemValue;
    const newCss = convertToCss(restKey as CuiSystemKey, cuiSystemValue, cuiSystemConfig, theme);

    return deepMerge(prevCss, newCss);
  }, {});
  console.log(h);

  return h;
};
