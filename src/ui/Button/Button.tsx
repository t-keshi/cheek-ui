import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import * as React from 'react';
import { forwardRef } from 'react';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
} from '../../style-system/configs';
import { space, SpaceProps } from '../../style-system/configs/space';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { createTransition } from '../../style-system/transitions';
import { EmotionProps, OwnerStateRecord, Theme } from '../../type';

type ButtonOwnerProps = Partial<{
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info';
  endIcon: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
  startIcon: React.ReactNode;
  variant: 'contained' | 'outlined' | 'text';
  disabled: boolean;
  loading: boolean;
}>;

type ButtonOwnerState = {
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info';
  endIcon: React.ReactNode | undefined;
  size: 'sm' | 'md' | 'lg';
  startIcon: React.ReactNode | undefined;
  variant: 'contained' | 'outlined' | 'text';
  disabled: boolean;
  loading: boolean;
};

type ButtonCuiSystemProps = Omit<
  BackgroundProps & BorderProps & LayoutProps & SpaceProps,
  'display'
>;

type ButtonRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  OwnerStateRecord<ButtonOwnerProps> & ButtonCuiSystemProps & EmotionProps,
  Theme
>;

export type ButtonProps = ButtonOwnerProps &
  ButtonCuiSystemProps &
  Omit<EmotionProps, 'theme'> & { className?: string };

const { size: _, ...restLayout } = layout;

const cuiSystemConfig = {
  ...border,
  ...background,
  ...restLayout,
  ...space,
};

const css = convertToCssFactory(cuiSystemConfig);

export const ButtonRoot = styled.div((props) => {
  const { ownerState, theme } = props as { ownerState: ButtonOwnerState; theme: Theme };

  return {
    ...theme.typography.button,
    padding: '6px 16px',
    display: 'inline-flex',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    alignItems: 'center',
    outline: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    borderRadius: theme.radius,
    transition: createTransition(
      ['opacity', 'background-color', 'color', 'box-shadow', 'border-color'],
      {
        duration: 'shortest',
        easing: 'ease',
      },
    ),
    '&:hover': {
      textDecoration: 'none',
      opacity: 1 - theme.palette.action.hoverOpacity,
      ...(ownerState.variant === 'text' &&
        ownerState.color !== 'inherit' && {
          opacity: 1 - theme.palette.action.hoverOpacity,
        }),
      ...(ownerState.variant === 'outlined' &&
        ownerState.color !== 'inherit' && {
          border: `1px solid ${theme.palette[ownerState.color].main}`,
          backgroundColor: theme.palette[ownerState.color].light,
        }),
      ...(ownerState.variant === 'contained' && {
        backgroundColor: theme.palette.info.main,
      }),
      ...(ownerState.variant === 'contained' &&
        ownerState.color !== 'inherit' && {
          backgroundColor: theme.palette[ownerState.color].dark,
        }),
    },
    ...(ownerState.disabled && {
      color: theme.palette.action.disabled,
      ...(ownerState.variant === 'outlined' && {
        border: `1px solid ${theme.palette.action.disabledBackground}`,
      }),
      ...(ownerState.variant === 'outlined' &&
        ownerState.color === 'secondary' && {
          border: `1px solid ${theme.palette.action.disabled}`,
        }),
      ...(ownerState.variant === 'contained' && {
        color: theme.palette.action.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
      }),
    }),
    ...(ownerState.variant === 'text' && {
      padding: '6px 8px',
    }),
    ...(ownerState.variant === 'text' &&
      ownerState.color !== 'inherit' && {
        color: theme.palette[ownerState.color].main,
      }),
    ...(ownerState.variant === 'outlined' && {
      padding: '5px 15px',
      border: '1px solid currentColor',
    }),
    ...(ownerState.variant === 'outlined' &&
      ownerState.color !== 'inherit' && {
        color: theme.palette[ownerState.color].main,
        border: `1px solid ${theme.palette[ownerState.color].main}`,
      }),
    ...(ownerState.variant === 'contained' && {
      color:
        ownerState.color !== 'inherit'
          ? theme.palette.info.main
          : theme.palette[
              ownerState.color as 'primary' | 'secondary' | 'success' | 'error' | 'info'
            ].contrastText,
      backgroundColor: theme.palette.info.main,
    }),
    ...(ownerState.variant === 'contained' &&
      ownerState.color !== 'inherit' && {
        color: theme.palette[ownerState.color].contrastText,
        backgroundColor: theme.palette[ownerState.color].main,
      }),
    ...(ownerState.color === 'inherit' && {
      color: 'inherit',
      borderColor: 'currentColor',
    }),
    ...(ownerState.size === 'sm' &&
      ownerState.variant === 'text' && {
        padding: '4px 5px',
        fontSize: '0.938rem',
      }),
    ...(ownerState.size === 'lg' &&
      ownerState.variant === 'text' && {
        padding: '8px 11px',
        fontSize: '1.125rem',
      }),
    ...(ownerState.size === 'sm' &&
      ownerState.variant === 'outlined' && {
        padding: '3px 9px',
        fontSize: '0.938rem',
      }),
    ...(ownerState.size === 'lg' &&
      ownerState.variant === 'outlined' && {
        padding: '7px 21px',
        fontSize: '1.125rem',
      }),
    ...(ownerState.size === 'sm' &&
      ownerState.variant === 'contained' && {
        padding: '4px 10px',
        fontSize: '0.938rem',
      }),
    ...(ownerState.size === 'lg' &&
      ownerState.variant === 'contained' && {
        padding: '8px 22px',
        fontSize: '1.125rem',
      }),
    ...css(props),
  };
}) as ButtonRootType;

const commonIconStyles = (size: 'sm' | 'md' | 'lg') => ({
  ...(size === 'sm' && {
    '& > *:nth-of-type(1)': {
      fontSize: 18,
    },
  }),
  ...(size === 'md' && {
    '& > *:nth-of-type(1)': {
      fontSize: 20,
    },
  }),
  ...(size === 'lg' && {
    '& > *:nth-of-type(1)': {
      fontSize: 22,
    },
  }),
});

// ---------- button icon start ----------
const ButtonStartIcon = styled.span((props) => {
  const { ownerState } = props as { ownerState: ButtonOwnerState; theme: Theme };

  return {
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    ...(ownerState.size === 'sm' && {
      marginLeft: -2,
    }),
    ...commonIconStyles(ownerState.size),
  };
}) as ButtonRootType;

const ButtonEndIcon = styled.span((props) => {
  const { ownerState } = props as { ownerState: ButtonOwnerState; theme: Theme };

  return {
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    ...(ownerState.size === 'sm' && {
      marginRight: -2,
    }),
    ...commonIconStyles(ownerState.size),
  };
}) as ButtonRootType;
// ---------- button icon end ----------

const classes = {
  root: 'CuiButton-root',
  startIcon: 'CuiButton-startIcon',
  endIcon: 'CuiButton-endIcon',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    as,
    className,
    color = 'primary',
    endIcon,
    size = 'md',
    startIcon,
    variant = 'contained',
    disabled = false,
    loading = false,
    ...cuiStyleProps
  } = props;

  const ownerState: ButtonOwnerState = {
    color,
    endIcon,
    size,
    startIcon,
    variant,
    disabled,
    loading,
  };

  const renderStartIcon = startIcon && (
    <ButtonStartIcon className={classes.startIcon} ownerState={ownerState}>
      {startIcon}
    </ButtonStartIcon>
  );

  const renderEndIcon = endIcon && (
    <ButtonEndIcon className={classes.endIcon} ownerState={ownerState}>
      {endIcon}
    </ButtonEndIcon>
  );

  return (
    <ButtonRoot
      ref={ref}
      as={as}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...cuiStyleProps}
    >
      {renderStartIcon}
      {props.children}
      {renderEndIcon}
    </ButtonRoot>
  );
});
