import styled, { StyledComponent } from '@emotion/styled';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { space, SpaceProps, text, TextProps } from '../../style-system/configs';
import { convertToCssFactory } from '../../style-system/convertToCss';
import {
  EmotionProps,
  OwnerStateRecord,
  OwnerStateResolver,
  Theme,
  TypographyVariantKey,
} from '../../type';

type TypographyOwnerProps = Partial<{
  variant: TypographyVariantKey;
  noWrap: boolean;
  gutterBottom: boolean;
  paragraph: boolean;
}>;

type TypographyOwnerState = {
  variant: TypographyVariantKey;
  noWrap: boolean;
  gutterBottom: boolean;
  paragraph: boolean;
};

type TypographyCuiSystemProps = SpaceProps & TextProps;

type TypographyRootType = StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  OwnerStateRecord<TypographyOwnerProps> & TypographyCuiSystemProps & EmotionProps,
  Theme
>;

export type TypographyProps = TypographyOwnerProps &
  TypographyCuiSystemProps &
  Omit<EmotionProps, 'theme'> & { className?: string };

const ownerStateResolver: OwnerStateResolver<TypographyOwnerState> = ({ ownerState, theme }) => ({
  ...(ownerState.variant && theme.typography[ownerState.variant]),
  ...(ownerState.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  ...(ownerState.gutterBottom && {
    marginBottom: '0.35em',
  }),
  ...(ownerState.paragraph && {
    marginBottom: 16,
  }),
});

const cuiSystemConfig = {
  ...space,
  ...text,
};

const css = convertToCssFactory(cuiSystemConfig);

const TypographyRoot = styled.p(
  {
    margin: 0,
  },
  ownerStateResolver,
  css,
) as TypographyRootType;

const classes = {
  root: 'CuiTypography-root',
};

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'button',
  caption: 'span',
  overline: 'span',
} as const;

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const {
    as,
    className,
    variant = 'body1',
    noWrap = false,
    gutterBottom = false,
    paragraph = false,
    ...cuiStyleProps
  } = props;

  const ownerState: TypographyOwnerState = {
    variant,
    noWrap,
    gutterBottom,
    paragraph,
  };

  const asProps = as || variantMapping[variant];

  return (
    <TypographyRoot
      ref={ref}
      as={asProps}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...cuiStyleProps}
    />
  );
});
