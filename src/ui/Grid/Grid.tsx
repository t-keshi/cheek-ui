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
  GridProps as GridBaseProps,
  layout,
  LayoutProps,
} from '../../style-system/configs';
import { space, SpaceProps } from '../../style-system/configs/space';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { EmotionProps, OwnerStateRecord, OwnerStateResolver, Theme } from '../../type';

type GridOwnerProps = Partial<{
  inline: boolean;
}>;

type GridOwnerState = {
  inline: boolean;
};

type GridCuiSystemProps = Omit<
  BackgroundProps & BorderProps & FlexProps & GridBaseProps & LayoutProps & SpaceProps,
  'display'
>;

type GridRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  OwnerStateRecord<GridOwnerProps> & GridCuiSystemProps & EmotionProps,
  Theme
>;

export type GridProps = GridOwnerProps &
  GridCuiSystemProps &
  Omit<EmotionProps, 'theme'> & { className?: string };

const ownerStateResolver: OwnerStateResolver<GridOwnerProps> = ({ ownerState }) => ({
  ...(ownerState.inline && {
    display: 'inline-grid',
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

export const GridRoot = styled.div({ display: 'grid' }, ownerStateResolver, css) as GridRootType;

const classes = {
  root: 'CuiGrid-root',
};

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { as, className, inline = false, ...cuiStyleProps } = props;

  const ownerState: GridOwnerState = {
    inline,
  };

  return (
    <GridRoot
      ref={ref}
      as={as}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...cuiStyleProps}
    />
  );
});
