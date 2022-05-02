import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import { forwardRef } from 'react';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  flex,
  FlexProps as FlexBaseProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
} from '../../style-system/configs';
import { space, SpaceProps } from '../../style-system/configs/space';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { EmotionProps, OwnerStateRecord, OwnerStateResolver, Theme } from '../../type';

type FlexOwnerState = Partial<{
  inline: boolean;
}>;

type FlexCuiSystemProps = Omit<
  BackgroundProps & BorderProps & FlexBaseProps & GridProps & LayoutProps & SpaceProps,
  'display'
>;

type FlexRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  OwnerStateRecord<FlexOwnerState> & FlexCuiSystemProps & EmotionProps,
  Theme
>;

export type FlexProps = FlexOwnerState &
  FlexCuiSystemProps &
  Omit<EmotionProps, 'theme'> & { className?: string };

const ownerStateResolver: OwnerStateResolver<FlexOwnerState> = ({ ownerState }) => ({
  ...(ownerState.inline && {
    display: 'inline-flex',
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

export const FlexRoot = styled.div({ display: 'flex' }, ownerStateResolver, css) as FlexRootType;

const classes = {
  root: 'CuiFlex-root',
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { as, className, inline = false, ...cuiStyleProps } = props;

  const ownerState = {
    inline,
  };

  return (
    <FlexRoot
      ref={ref}
      as={as}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...cuiStyleProps}
    />
  );
});
