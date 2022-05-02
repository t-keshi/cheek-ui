import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import React, { cloneElement, forwardRef } from 'react';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  flex,
  FlexProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from '../../style-system/configs';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { EmotionProps, OwnerStateRecord, OwnerStateResolver, Theme } from '../../type';
import { getValidChildren } from '../../utils/getValidChildren';

type StackOwnerProps = Partial<{
  spacing: number;
  horizontal: boolean;
  divider: React.ReactElement;
}>;

type StackOwnerState = {
  spacing: number;
  hasDivider: boolean;
  horizontal: boolean;
};

type StackCuiSystemProps = Omit<
  BackgroundProps & BorderProps & FlexProps & GridProps & LayoutProps & SpaceProps,
  'display'
>;

type StackRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  OwnerStateRecord<StackOwnerProps> & StackCuiSystemProps & EmotionProps,
  Theme
>;

export type StackProps = StackOwnerProps &
  StackCuiSystemProps &
  Omit<EmotionProps, 'theme'> & { className?: string };

const ownerStateResolver: OwnerStateResolver<StackOwnerState> = ({ ownerState }) => ({
  ...(!ownerState.horizontal && {
    flexDirection: 'column',
  }),
  ...(!ownerState.hasDivider &&
    ownerState.horizontal && {
      '& > *:not(style) ~ *:not(style)': {
        marginLeft: ownerState.spacing * 8,
      },
    }),
  ...(!ownerState.hasDivider &&
    !ownerState.horizontal && {
      '& > *:not(style) ~ *:not(style)': {
        marginTop: ownerState.spacing * 8,
      },
    }),
});

const cuiSystemConfig = {
  ...border,
  ...background,
  ...grid,
  ...flex,
  ...layout,
  ...space,
};

const css = convertToCssFactory(cuiSystemConfig);

export const StackRoot = styled.div({ display: 'flex' }, ownerStateResolver, css) as StackRootType;

const classes = {
  root: 'CuiStack-root',
};

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    as,
    className,
    children,
    spacing = 4,
    divider,
    horizontal = false,
    ...cuiStyleProps
  } = props;

  const ownerState: StackOwnerState = {
    spacing,
    hasDivider: divider !== undefined,
    horizontal,
  };

  const validChildren = getValidChildren(children);

  const clones = !divider
    ? validChildren
    : validChildren.map((child, index) => {
        const key = child.key !== undefined ? child.key : index;
        const isLast = index + 1 === validChildren.length;
        const clonedDivider = cloneElement(divider, { horizontal, spacing });
        const renderDivider = isLast ? null : clonedDivider;

        return (
          <React.Fragment key={key}>
            {child}
            {renderDivider}
          </React.Fragment>
        );
      });

  return (
    <StackRoot
      ref={ref}
      as={as}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...cuiStyleProps}
    >
      {clones}
    </StackRoot>
  );
});
