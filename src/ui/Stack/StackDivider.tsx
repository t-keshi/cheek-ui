/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { border, BorderProps, space, SpaceProps } from '../../style-system/configs';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { EmotionProps, OwnerStateRecord, Theme } from '../../type';

type StackDividerOwnerProps = Partial<{
  horizontal: boolean;
  spacing: number;
}>;

type StackDividerOwnerState = {
  horizontal: boolean;
  spacing: number;
};

type StackDividerCuiSystemProps = BorderProps & SpaceProps;

type StackDividerRootType = StyledComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  OwnerStateRecord<StackDividerOwnerProps> & StackDividerCuiSystemProps & EmotionProps,
  Theme
>;

export type StackDividerProps = StackDividerOwnerProps &
  StackDividerCuiSystemProps &
  Omit<EmotionProps, 'theme'> & { className?: string };

const cuiSystemConfig = {
  ...border,
  ...space,
};

const css = convertToCssFactory(cuiSystemConfig);

export const StackDividerRoot = styled.div((props) => {
  const { ownerState, theme } = props as { ownerState: StackDividerOwnerState; theme: Theme };

  return {
    borderWidth: 0,
    alignSelf: 'stretch',
    borderColor: theme.palette.divider,
    width: 'auto',
    height: 'auto',
    borderStyle: 'solid',
    ...(ownerState.horizontal
      ? {
          marginRight: ownerState.spacing * 4,
          marginLeft: ownerState.spacing * 4,
          borderLeftWidth: '1px',
        }
      : {
          marginTop: ownerState.spacing * 4,
          marginBottom: ownerState.spacing * 4,
          borderLeftWidth: 0,
          borderBottomWidth: '1px',
        }),
    ...css(props),
  };
}) as StackDividerRootType;

const classes = {
  root: 'CuiStackDivider-root',
};

export const StackDivider = forwardRef<HTMLDivElement, StackDividerProps>((props, ref) => {
  const { as, className, horizontal = false, spacing = 4, ...cuiStyleProps } = props;

  const ownerState: StackDividerOwnerState = {
    horizontal,
    spacing,
  };

  return (
    <StackDividerRoot
      ref={ref}
      as={as}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...cuiStyleProps}
    />
  );
});
