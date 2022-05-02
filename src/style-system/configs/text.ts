import { TProperty } from 'csstype';
import { CuiSystemValueStrict, Transform } from '../../type';
import { accessTheme } from './transform/accessTheme';
import { transformDefault } from './transform/transformDefault';

const transformColor: Transform = (value, theme) => {
  if (
    value === 'textPrimary' ||
    value === 'textSecondary' ||
    value === 'textDisabled' ||
    value === 'primary' ||
    value === 'secondary' ||
    value === 'error'
  ) {
    return accessTheme(value, theme);
  }

  return value;
};

export const text = {
  display: {
    properties: ['display'],
    transform: transformDefault,
  },
  color: {
    properties: ['color'],
    transform: transformColor,
  },
  lh: {
    properties: ['lineHeight'],
    transform: transformDefault,
  },
  ls: {
    properties: ['letterSpacing'],
    transform: transformDefault,
  },
  textDecoration: {
    properties: ['textDecoration'],
    transform: transformDefault,
  },
  textAlign: {
    properties: ['textAlign'],
    transform: transformDefault,
  },
  fontStyle: {
    properties: ['fontStyle'],
    transform: transformDefault,
  },
  wordBreak: {
    properties: ['wordBreak'],
    transform: transformDefault,
  },
  overflowWrap: {
    properties: ['overflowWrap'],
    transform: transformDefault,
  },
  textOverflow: {
    properties: ['textOverflow'],
    transform: transformDefault,
  },
  textTransform: {
    properties: ['textTransform'],
    transform: transformDefault,
  },
  whiteSpace: {
    properties: ['whiteSpace'],
    transform: transformDefault,
  },
};

export type TextProps = Partial<{
  display: CuiSystemValueStrict<'initial' | 'block' | 'inline'>;
  color: CuiSystemValueStrict<
    | 'initial'
    | 'inherit'
    | 'textPrimary'
    | 'textSecondary'
    | 'textDisabled'
    | 'primary'
    | 'secondary'
    | 'error'
  >;
  ls: CuiSystemValueStrict<TProperty.LetterSpacing>;
  lh: CuiSystemValueStrict<TProperty.LineHeight>;
  textDecoration: CuiSystemValueStrict<TProperty.TextDecoration>;
  textAlign: CuiSystemValueStrict<TProperty.TextAlign>;
  fontStyle: CuiSystemValueStrict<TProperty.FontStyle>;
  wordBreak: CuiSystemValueStrict<TProperty.WordBreak>;
  overflowWrap: CuiSystemValueStrict<TProperty.OverflowWrap>;
  textOverflow: CuiSystemValueStrict<TProperty.TextOverflow>;
  textTransform: CuiSystemValueStrict<TProperty.TextTransform>;
  whiteSpace: CuiSystemValueStrict<TProperty.WhiteSpace>;
}>;
