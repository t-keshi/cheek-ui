import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { mq } from '../../style-system/breakpoints';
import { space, SpaceProps } from '../../style-system/configs';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { BreakpointsKey, EmotionProps, OwnerStateRecord, Theme } from '../../type';

type ContainerOwnerProps = Partial<{
  disableGutters: boolean;
  maxW: BreakpointsKey;
}>;

type ContainerOwnerState = {
  disableGutters: boolean;
  maxW: BreakpointsKey;
};

type ContainerCuiSystemProps = Omit<SpaceProps, 'maxW'>;

type ContainerRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  OwnerStateRecord<ContainerOwnerProps> & ContainerCuiSystemProps & EmotionProps,
  Theme
>;

export type ContainerProps = ContainerOwnerProps &
  ContainerCuiSystemProps &
  Omit<EmotionProps, 'theme'> & { className?: string };

const cuiSystemConfig = {
  ...space,
};

const css = convertToCssFactory(cuiSystemConfig);

export const ContainerRoot = styled.div((props) => {
  const { ownerState, theme } = props as { ownerState: ContainerOwnerState; theme: Theme };

  return {
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    display: 'block',
    ...(!ownerState.disableGutters && {
      paddingLeft: '16px',
      paddingRight: '16px',
      [mq(theme.breakpoints.sm)]: {
        paddingLeft: '24px',
        paddingRight: '24px',
      },
    }),
    ...(ownerState.maxW === 'xs' && {
      [mq(theme.breakpoints.xs)]: {
        maxWidth: Math.max(theme.breakpoints.xs, 444),
      },
    }),
    ...(ownerState.maxW &&
      ownerState.maxW !== 'xs' && {
        [mq(theme.breakpoints[ownerState.maxW])]: {
          maxWidth: `${theme.breakpoints[ownerState.maxW]}px`,
        },
      }),
    ...css(props),
  };
}) as ContainerRootType;

const classes = {
  root: 'CuiContainer-root',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { as, className, disableGutters = false, maxW = 'lg', ...cuiStyleProps } = props;

  const ownerState = {
    disableGutters,
    maxW,
  };

  return (
    <ContainerRoot
      ref={ref}
      as={as}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...cuiStyleProps}
    />
  );
});
