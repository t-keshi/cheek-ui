import { Theme } from '../../../theme/ThemeProvider';

export const accessTheme = (
  value:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'textDisabled'
    | 'disabled'
    | 'error',
  theme: Theme,
) => {
  const themeAccessMap = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    textPrimary: theme.palette.text.primary,
    textSecondary: theme.palette.text.secondary,
    textDisabled: theme.palette.text.disabled,
    disabled: theme.palette.action.disabled,
    error: theme.palette.error.main,
  };

  return themeAccessMap[value];
};
