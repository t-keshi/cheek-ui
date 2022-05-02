import { TProperty } from 'csstype';
import { CuiSystemValueStrict, Transform } from '../../type';

const transformSpace: Transform = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return `${value * 8}px`;
};

export const space = {
  m: {
    properties: ['margin'],
    transform: transformSpace,
  },
  mt: {
    properties: ['marginTop'],
    transform: transformSpace,
  },
  mr: {
    properties: ['marginRight'],
    transform: transformSpace,
  },
  mb: {
    properties: ['marginBottom'],
    transform: transformSpace,
  },
  ml: {
    properties: ['marginLeft'],
    transform: transformSpace,
  },
  mx: {
    properties: ['marginRight', 'marginLeft'],
    transform: transformSpace,
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    transform: transformSpace,
  },
  p: {
    properties: ['padding'],
    transform: transformSpace,
  },
  pt: {
    properties: ['paddingTop'],
    transform: transformSpace,
  },
  pr: {
    properties: ['paddingRight'],
    transform: transformSpace,
  },
  pb: {
    properties: ['paddingBottom'],
    transform: transformSpace,
  },
  pl: {
    properties: ['paddingLeft'],
    transform: transformSpace,
  },
  px: {
    properties: ['paddingLeft', 'paddingRight'],
    transform: transformSpace,
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    transform: transformSpace,
  },
};

export type SpaceProps = Partial<{
  m: CuiSystemValueStrict<TProperty.Margin | number>;
  mt: CuiSystemValueStrict<TProperty.MarginTop | number>;
  mr: CuiSystemValueStrict<TProperty.MarginRight | number>;
  mb: CuiSystemValueStrict<TProperty.MarginBottom | number>;
  ml: CuiSystemValueStrict<TProperty.MarginLeft | number>;
  mx: CuiSystemValueStrict<TProperty.MarginTop | TProperty.MarginBottom | number>;
  my: CuiSystemValueStrict<TProperty.MarginTop | TProperty.MarginBottom | number>;
  p: CuiSystemValueStrict<TProperty.Padding | number>;
  pt: CuiSystemValueStrict<TProperty.PaddingTop | number>;
  pr: CuiSystemValueStrict<TProperty.PaddingRight | number>;
  pb: CuiSystemValueStrict<TProperty.PaddingBottom | number>;
  pl: CuiSystemValueStrict<TProperty.PaddingLeft | number>;
  px: CuiSystemValueStrict<TProperty.PaddingTop | TProperty.PaddingBottom | number>;
  py: CuiSystemValueStrict<TProperty.PaddingTop | TProperty.PaddingBottom | number>;
}>;
