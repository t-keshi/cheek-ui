import { Theme } from '../../../type';

export const accessTheme = (
  value:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'textDisabled'
    | 'disabled'
    | 'error'
    | 'info'
    | 'success'
    | 'divider',
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
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    divider: theme.palette.divider,
  };

  return themeAccessMap[value];
};
