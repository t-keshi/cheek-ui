import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import { forwardRef } from 'react';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from '../../style-system/configs';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { EmotionProps, Theme } from '../../type';

type BoxCuiSystemProps = BackgroundProps & BorderProps & GridProps & LayoutProps & SpaceProps;

type BoxRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  BoxCuiSystemProps & EmotionProps,
  Theme
>;

export type BoxProps = BoxCuiSystemProps & Omit<EmotionProps, 'theme'> & { className?: string };

const cuiSystemConfig = {
  ...background,
  ...border,
  ...grid,
  ...layout,
  ...space,
};

const css = convertToCssFactory(cuiSystemConfig);

export const BoxRoot = styled.div(css) as BoxRootType;

const classes = {
  root: 'CuiBox-root',
};

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { as, className, ...cuiStyleProps } = props;

  return <BoxRoot ref={ref} as={as} className={clsx(classes.root, className)} {...cuiStyleProps} />;
});
