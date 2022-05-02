import { TProperty } from 'csstype';
import { CuiSystemValueStrict } from '../../type';
import { transformDefault } from './transform/transformDefault';

export const position = {
  position: {
    properties: ['position'],
    transform: transformDefault,
  },
  zIndex: {
    properties: ['zIndex'],
    transform: transformDefault,
  },
  top: {
    properties: ['top'],
    transform: transformDefault,
  },
  right: {
    properties: ['right'],
    transform: transformDefault,
  },
  bottom: {
    properties: ['bottom'],
    transform: transformDefault,
  },
  left: {
    properties: ['left'],
    transform: transformDefault,
  },
};

export type PositionProps = Partial<{
  position: CuiSystemValueStrict<TProperty.Position>;
  zIndex: CuiSystemValueStrict<TProperty.ZIndex>;
  top: CuiSystemValueStrict<TProperty.Top>;
  right: CuiSystemValueStrict<TProperty.Right>;
  bottom: CuiSystemValueStrict<TProperty.Bottom>;
  left: CuiSystemValueStrict<TProperty.Left>;
}>;
