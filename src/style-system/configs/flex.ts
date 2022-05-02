import { TProperty } from 'csstype';
import { CuiSystemValueStrict } from '../../type';
import { transformDefault } from './transform/transformDefault';

export const flex = {
  align: {
    properties: ['alignItems'],
    transform: transformDefault,
  },
  alignContent: {
    properties: ['alignContent'],
    transform: transformDefault,
  },
  alignSelf: {
    properties: ['alignSelf'],
    transform: transformDefault,
  },
  justifyItems: {
    properties: ['justifyItems'],
    transform: transformDefault,
  },
  justify: {
    properties: ['justifyContent'],
    transform: transformDefault,
  },
  justifySelf: {
    properties: ['justifySelf'],
    transform: transformDefault,
  },
  flex: {
    properties: ['flex'],
    transform: transformDefault,
  },
  grow: {
    properties: ['flexGrow'],
    transform: transformDefault,
  },
  shrink: {
    properties: ['flexShrink'],
    transform: transformDefault,
  },
  basis: {
    properties: ['flexBasis'],
    transform: transformDefault,
  },
  wrap: {
    properties: ['flexWrap'],
    transform: transformDefault,
  },
  direction: {
    properties: ['flexDirection'],
    transform: transformDefault,
  },
  gap: {
    properties: ['rowGap', 'columnGap'],
    transform: transformDefault,
  },
  rowGap: {
    properties: ['rowGap'],
    transform: transformDefault,
  },
  columnGap: {
    properties: ['columnGap'],
    transform: transformDefault,
  },
};

export type FlexProps = Partial<{
  align: CuiSystemValueStrict<TProperty.AlignItems>;
  alignContent: CuiSystemValueStrict<TProperty.AlignContent>;
  alignSelf: CuiSystemValueStrict<TProperty.AlignSelf>;
  justifyItems: CuiSystemValueStrict<TProperty.JustifyItems>;
  justify: CuiSystemValueStrict<TProperty.JustifyContent>;
  justifySelf: CuiSystemValueStrict<TProperty.JustifySelf>;
  flex: CuiSystemValueStrict<TProperty.Flex>;
  grow: CuiSystemValueStrict<TProperty.FlexGrow>;
  shrink: CuiSystemValueStrict<TProperty.FlexShrink>;
  basis: CuiSystemValueStrict<TProperty.FlexBasis>;
  wrap: CuiSystemValueStrict<TProperty.FlexWrap>;
  direction: CuiSystemValueStrict<TProperty.FlexDirection>;
  gap: CuiSystemValueStrict<TProperty.RowGap | TProperty.ColumnGap>;
  columnGap: CuiSystemValueStrict<TProperty.ColumnGap>;
  rowGap: CuiSystemValueStrict<TProperty.RowGap>;
}>;
