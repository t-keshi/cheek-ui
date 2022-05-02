import { TProperty } from 'csstype';
import { CuiSystemValueStrict } from '../../type';
import { transformDefault } from './transform/transformDefault';

export const flex = {
  alignItems: {
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
  justifyContent: {
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
  flexGrow: {
    properties: ['flexGrow'],
    transform: transformDefault,
  },
  flexShrink: {
    properties: ['flexShrink'],
    transform: transformDefault,
  },
  flexBasis: {
    properties: ['flexBasis'],
    transform: transformDefault,
  },
  flexWrap: {
    properties: ['flexWrap'],
    transform: transformDefault,
  },
  flexDirection: {
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
  display: CuiSystemValueStrict<'initial' | 'flex' | 'inline-flex'>;
  alignItems: CuiSystemValueStrict<TProperty.AlignItems>;
  alignContent: CuiSystemValueStrict<TProperty.AlignContent>;
  alignSelf: CuiSystemValueStrict<TProperty.AlignSelf>;
  justifyItems: CuiSystemValueStrict<TProperty.JustifyItems>;
  justifyContent: CuiSystemValueStrict<TProperty.JustifyContent>;
  justifySelf: CuiSystemValueStrict<TProperty.JustifySelf>;
  flex: CuiSystemValueStrict<TProperty.Flex>;
  flexGrow: CuiSystemValueStrict<TProperty.FlexGrow>;
  flexShrink: CuiSystemValueStrict<TProperty.FlexShrink>;
  flexBasis: CuiSystemValueStrict<TProperty.FlexBasis>;
  flexWrap: CuiSystemValueStrict<TProperty.FlexWrap>;
  flexDirection: CuiSystemValueStrict<TProperty.FlexDirection>;
  gap: CuiSystemValueStrict<TProperty.RowGap | TProperty.ColumnGap>;
  columnGap: CuiSystemValueStrict<TProperty.ColumnGap>;
  rowGap: CuiSystemValueStrict<TProperty.RowGap>;
}>;
