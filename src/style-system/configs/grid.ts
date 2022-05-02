import { TProperty } from 'csstype';
import { CuiSystemValueStrict } from '../../type';
import { transformDefault } from './transform/transformDefault';

export const grid = {
  gridGap: {
    properties: ['gridGap'],
    transform: transformDefault,
  },
  gridColumnGap: {
    properties: ['gridColumnGap'],
    transform: transformDefault,
  },
  gridRowGap: {
    properties: ['gridRowGap'],
    transform: transformDefault,
  },
  gridColumn: {
    properties: ['gridColumn'],
    transform: transformDefault,
  },
  gridRow: {
    properties: ['gridRow'],
    transform: transformDefault,
  },
  gridAutoFlow: {
    properties: ['gridAutoFlow'],
    transform: transformDefault,
  },
  gridAutoColumns: {
    properties: ['gridAutoColumns'],
    transform: transformDefault,
  },
  gridColumnStart: {
    properties: ['gridColumnStart'],
    transform: transformDefault,
  },
  gridColumnEnd: {
    properties: ['gridColumnEnd'],
    transform: transformDefault,
  },
  gridRowStart: {
    properties: ['gridRowStart'],
    transform: transformDefault,
  },
  gridRowEnd: {
    properties: ['gridRowEnd'],
    transform: transformDefault,
  },
  gridAutoRows: {
    properties: ['gridAutoRows'],
    transform: transformDefault,
  },
  gridTemplate: {
    properties: ['gridTemplate'],
    transform: transformDefault,
  },
  gridTemplateColumns: {
    properties: ['gridTemplateColumns'],
    transform: transformDefault,
  },
  gridTemplateRows: {
    properties: ['gridTemplateRows'],
    transform: transformDefault,
  },
  gridTemplateAreas: {
    properties: ['gridTemplateAreas'],
    transform: transformDefault,
  },
  gridArea: {
    properties: ['gridArea'],
    transform: transformDefault,
  },
};

export type GridProps = Partial<{
  display: CuiSystemValueStrict<'initial' | 'grid' | 'inline-grid'>;
  gridGap: CuiSystemValueStrict<TProperty.GridGap>;
  gridColumnGap: CuiSystemValueStrict<TProperty.GridColumnGap>;
  gridRowGap: CuiSystemValueStrict<TProperty.GridRowGap>;
  gridColumn: CuiSystemValueStrict<TProperty.GridColumn>;
  gridRow: CuiSystemValueStrict<TProperty.GridRow>;
  gridAutoFlow: CuiSystemValueStrict<TProperty.GridAutoFlow>;
  gridAutoColumns: CuiSystemValueStrict<TProperty.GridAutoColumns>;
  gridColumnStart: CuiSystemValueStrict<TProperty.GridColumnStart>;
  gridColumnEnd: CuiSystemValueStrict<TProperty.GridColumnEnd>;
  gridRowStart: CuiSystemValueStrict<TProperty.GridRowStart>;
  gridRowEnd: CuiSystemValueStrict<TProperty.GridRowEnd>;
  gridAutoRows: CuiSystemValueStrict<TProperty.GridAutoRows>;
  gridTemplate: CuiSystemValueStrict<TProperty.GridTemplate>;
  gridTemplateColumns: CuiSystemValueStrict<TProperty.GridTemplateColumns>;
  gridTemplateRows: CuiSystemValueStrict<TProperty.GridTemplateRows>;
  gridTemplateAreas: CuiSystemValueStrict<TProperty.GridTemplateAreas>;
  gridArea: CuiSystemValueStrict<TProperty.GridArea>;
}>;
