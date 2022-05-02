import { TProperty } from 'csstype';
import { CuiSystemValueStrict } from '../../type';
import { transformDefault } from './transform/transformDefault';

export const border = {
  border: {
    properties: ['border'],
    transform: transformDefault,
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
  borderTop: CuiSystemValueStrict<TProperty.BorderTop>;
  borderRight: CuiSystemValueStrict<TProperty.BorderRight>;
  borderBottom: CuiSystemValueStrict<TProperty.BorderBottom>;
  borderLeft: CuiSystemValueStrict<TProperty.BorderLeft>;
  borderX: CuiSystemValueStrict<TProperty.BorderRight | TProperty.BorderLeft>;
  borderY: CuiSystemValueStrict<TProperty.BorderTop | TProperty.BorderBottom>;
}>;
