import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { background, BackgroundProps } from '../../style-system/configs/background';
import { layout, LayoutProps } from '../../style-system/configs/layout';
import { space, SpaceProps } from '../../style-system/configs/space';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { EmotionProps, Theme } from '../../type';

type BoxCuiSystemProps = LayoutProps & BackgroundProps & SpaceProps;

type BoxRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  BoxCuiSystemProps & EmotionProps,
  Theme
>;

export type BoxProps = BoxCuiSystemProps & Omit<EmotionProps, 'theme'> & { className?: string };

const cuiSystemConfig = {
  ...layout,
  ...background,
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
