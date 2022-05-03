import {
  Global,
  ThemeProvider as EmotionThemeProvider,
  useTheme as useEmotionTheme,
} from '@emotion/react';
import { ThemeProvider as StorybookThemeProvider } from '@storybook/theming';
import { Theme } from '../type';
import { deepMerge } from '../utils/deepMerge';
import { breakpoints } from './breakpoints';
import { darkModePalette, lightModePalette } from './palette';
import { radius } from './radius';
import { reset } from './reset';
import { shadows } from './shadows';
import { typography } from './typography';
import { zIndex } from './zIndex';

type Mode = 'light' | 'dark';

const configureTheme = (mode: Mode): Theme => ({
  palette: mode === 'light' ? lightModePalette : darkModePalette,
  breakpoints,
  radius,
  shadows,
  zIndex,
  typography,
});

type DeepAny<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]: T[K] extends object ? (T[K] extends Array<any> ? any : DeepAny<T[K]>) : any;
};

type DeepPartial<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]?: T[K] extends object ? (T[K] extends any[] ? T[K] : DeepAny<T[K]>) : T[K];
};
interface ThemeProviderProps {
  children: React.ReactNode;
  mode?: Mode;
  // eslint-disable-next-line react/no-unused-prop-types
  theme?: DeepPartial<Theme>;
  isEnabledResetCss?: boolean;
}

export const ThemeProvider = ({
  children,
  theme: themeProps,
  mode = 'light',
  isEnabledResetCss,
}: ThemeProviderProps) => {
  const theme = configureTheme(mode);
  const customTheme = deepMerge(theme, themeProps);

  return (
    <EmotionThemeProvider theme={customTheme}>
      {isEnabledResetCss && <Global styles={reset} />}
      {children}
    </EmotionThemeProvider>
  );
};

export const StThemeProvider = ({
  children,
  mode = 'light',
  isEnabledResetCss,
}: ThemeProviderProps) => {
  const theme = configureTheme(mode);

  return (
    <StorybookThemeProvider theme={theme}>
      {isEnabledResetCss && <Global styles={reset} />}
      {children}
    </StorybookThemeProvider>
  );
};

export const useTheme = () => {
  const theme = useEmotionTheme() as Theme;

  return theme;
};
