import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import { forwardRef } from 'react';
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
} from '../../style-system/configs';
import { space, SpaceProps } from '../../style-system/configs/space';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { EmotionProps, Theme } from '../../type';

type CenterCuiSystemProps = Omit<
  BackgroundProps & BorderProps & FlexProps & GridProps & LayoutProps & SpaceProps,
  'display'
>;

type CenterRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  CenterCuiSystemProps & EmotionProps,
  Theme
>;

export type CenterProps = CenterCuiSystemProps &
  Omit<EmotionProps, 'theme'> & { className?: string };

const cuiSystemConfig = {
  ...border,
  ...background,
  ...grid,
  ...flex,
  ...layout,
  ...space,
};

const css = convertToCssFactory(cuiSystemConfig);

export const CenterRoot = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...css(props),
})) as CenterRootType;

const classes = {
  root: 'CuiFlex-root',
};

export const Center = forwardRef<HTMLDivElement, CenterProps>((props, ref) => {
  const { as, className, ...cuiStyleProps } = props;

  return (
    <CenterRoot ref={ref} as={as} className={clsx(classes.root, className)} {...cuiStyleProps} />
  );
});
