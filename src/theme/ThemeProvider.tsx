import {
  Global,
  ThemeProvider as EmotionThemeProvider,
  useTheme as useEmotionTheme,
} from '@emotion/react';
import { ThemeProvider as StorybookThemeProvider } from '@storybook/theming';
import { breakpoints } from './breakpoints';
import { darkModePalette, lightModePalette } from './palette';
import { radius } from './radius';
import { reset } from './reset';
import { shadows } from './shadows';
import { typography } from './typography';
import { zIndex } from './zIndex';

type Mode = 'light' | 'dark';

const configureTheme = (mode: Mode) => ({
  palette: mode === 'light' ? lightModePalette : darkModePalette,
  breakpoints,
  radius,
  shadows,
  zIndex,
  typography,
});

export type Theme = ReturnType<typeof configureTheme>;

interface ThemeProviderProps {
  children: React.ReactNode;
  mode?: Mode;
  isEnabledResetCss?: boolean;
}

export const ThemeProvider = ({
  children,
  mode = 'light',
  isEnabledResetCss,
}: ThemeProviderProps) => {
  const theme = configureTheme(mode);

  return (
    <EmotionThemeProvider theme={theme}>
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

export const useTheme = (): Theme => useEmotionTheme();
