import { TProperty } from 'csstype';
import { CuiSystemValueStrict, Transform } from '../../type';
import { accessTheme } from './transform/accessTheme';
import { transformDefault } from './transform/transformDefault';

const transformBorderColor: Transform = (value, theme) => {
  if (value === 'primary' || value === 'secondary' || value === 'divider') {
    return accessTheme(value, theme);
  }

  return value;
};

export const border = {
  border: {
    properties: ['border'],
    transform: transformBorderColor,
  },
  borderColor: {
    properties: ['borderColor'],
    transform: transformBorderColor,
  },
  borderTop: {
    properties: ['borderTop'],
    transform: transformDefault,
  },
  borderRight: {
    properties: ['borderRight'],
    transform: transformDefault,
  },
  borderBottom: {
    properties: ['borderBottom'],
    transform: transformDefault,
  },
  borderLeft: {
    properties: ['borderLeft'],
    transform: transformDefault,
  },
  borderX: {
    properties: ['borderRight', 'borderLeft'],
    transform: transformDefault,
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    transform: transformDefault,
  },
};

export type BorderProps = Partial<{
  border: CuiSystemValueStrict<TProperty.Border>;
  borderColor: CuiSystemValueStrict<'initial' | 'inherit' | 'primary' | 'secondary' | 'divider'>;
  borderTop: CuiSystemValueStrict<TProperty.BorderTop>;
  borderRight: CuiSystemValueStrict<TProperty.BorderRight>;
  borderBottom: CuiSystemValueStrict<TProperty.BorderBottom>;
  borderLeft: CuiSystemValueStrict<TProperty.BorderLeft>;
  borderX: CuiSystemValueStrict<TProperty.BorderRight | TProperty.BorderLeft>;
  borderY: CuiSystemValueStrict<TProperty.BorderTop | TProperty.BorderBottom>;
}>;
