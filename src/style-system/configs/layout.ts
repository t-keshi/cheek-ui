import { TProperty } from 'csstype';
import { CuiSystemValueStrict } from '../../type';
import { transformDefault } from './transform/transformDefault';
import { transformPx } from './transform/transformPx';

export const layout = {
  display: {
    properties: ['display'],
    transform: transformDefault,
  },
  size: {
    properties: ['width', 'height'],
    transform: transformPx,
  },
  w: {
    properties: ['width'],
    transform: transformPx,
  },
  maxW: {
    properties: ['maxWidth'],
    transform: transformPx,
  },
  minW: {
    properties: ['minWidth'],
    transform: transformPx,
  },
  h: {
    properties: ['height'],
    transform: transformPx,
  },
  maxH: {
    properties: ['maxHeight'],
    transform: transformPx,
  },
  minH: {
    properties: ['minWidth'],
    transform: transformPx,
  },
  overflow: {
    properties: ['overflow'],
    transform: transformDefault,
  },
  overflowX: {
    properties: ['overflowX'],
    transform: transformDefault,
  },
  overflowY: {
    properties: ['overflowY'],
    transform: transformDefault,
  },
  verticalAlign: {
    properties: ['verticalAlign'],
    transform: transformDefault,
  },
  boxSizing: {
    properties: ['boxSizing'],
    transform: transformDefault,
  },
  objectFit: {
    properties: ['objectFit'],
    transform: transformDefault,
  },
  objectPosition: {
    properties: ['objectPosition'],
    transform: transformDefault,
  },
  visibility: {
    properties: ['visibility'],
    transform: transformDefault,
  },
};

export type LayoutProps = Partial<{
  display: CuiSystemValueStrict<TProperty.Display>;
  size: CuiSystemValueStrict<TProperty.Height | TProperty.Width | number>;
  h: CuiSystemValueStrict<TProperty.Height | number>;
  maxH: CuiSystemValueStrict<TProperty.MaxHeight | number>;
  minH: CuiSystemValueStrict<TProperty.MinHeight | number>;
  w: CuiSystemValueStrict<TProperty.Width | number>;
  maxW: CuiSystemValueStrict<TProperty.MaxWidth | number>;
  minW: CuiSystemValueStrict<TProperty.MinWidth | number>;
  overflow: CuiSystemValueStrict<TProperty.Overflow>;
  overflowX: CuiSystemValueStrict<TProperty.OverflowX>;
  overflowY: CuiSystemValueStrict<TProperty.OverflowY>;
  verticalAlign: CuiSystemValueStrict<TProperty.VerticalAlign>;
  boxSizing: CuiSystemValueStrict<TProperty.BoxSizing>;
  objectFit: CuiSystemValueStrict<TProperty.ObjectFit>;
  objectPosition: CuiSystemValueStrict<TProperty.ObjectPosition>;
  visibility: CuiSystemValueStrict<TProperty.Visibility>;
}>;
