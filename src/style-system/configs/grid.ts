import { TProperty } from 'csstype';
import { CuiSystemValueStrict, Transform } from '../../type';
import { transformDefault } from './transform/transformDefault';

const transformFrame: Transform = (value) => `repeat(${value}, minmax(0px, 1fr))`;

const transformSpan: Transform = (value) => `span ${value}`;

export const grid = {
  columns: {
    properties: ['gridTemplateColumns'],
    transform: transformFrame,
  },
  rows: {
    properties: ['gridTemplateRows'],
    transform: transformFrame,
  },
  colSpan: {
    properties: ['gridColumnStart', 'gridColumnEnd'],
    transform: transformSpan,
  },
  rowSpan: {
    properties: ['gridRowStart', 'gridRowEnd'],
    transform: transformSpan,
  },
  gap: {
    properties: ['gap'],
    transform: transformDefault,
  },
  columnGap: {
    properties: ['columnGap'],
    transform: transformDefault,
  },
  rowGap: {
    properties: ['rowGap'],
    transform: transformDefault,
  },
  column: {
    properties: ['gridColumn'],
    transform: transformDefault,
  },
  row: {
    properties: ['gridRow'],
    transform: transformDefault,
  },
  autoFlow: {
    properties: ['gridAutoFlow'],
    transform: transformDefault,
  },
  autoColumns: {
    properties: ['gridAutoColumns'],
    transform: transformDefault,
  },
  autoRows: {
    properties: ['gridAutoRows'],
    transform: transformDefault,
  },
  colStart: {
    properties: ['gridColumnStart'],
    transform: transformDefault,
  },
  colEnd: {
    properties: ['gridColumnEnd'],
    transform: transformDefault,
  },
  rowStart: {
    properties: ['gridRowStart'],
    transform: transformDefault,
  },
  rowEnd: {
    properties: ['gridRowEnd'],
    transform: transformDefault,
  },
  template: {
    properties: ['gridTemplate'],
    transform: transformDefault,
  },
  templateAreas: {
    properties: ['gridTemplateAreas'],
    transform: transformDefault,
  },
  templateColumns: {
    properties: ['gridTemplateColumns'],
    transform: transformDefault,
  },
  templateRows: {
    properties: ['gridTemplateRows'],
    transform: transformDefault,
  },
  area: {
    properties: ['gridArea'],
    transform: transformDefault,
  },
};

export type GridProps = Partial<{
  columns: CuiSystemValueStrict<number>;
  rows: CuiSystemValueStrict<number>;
  colSpan: CuiSystemValueStrict<number>;
  rowSpan: CuiSystemValueStrict<number>;
  gap: CuiSystemValueStrict<TProperty.Gap>;
  columnGap: CuiSystemValueStrict<TProperty.ColumnGap>;
  rowGap: CuiSystemValueStrict<TProperty.RowGap>;
  column: CuiSystemValueStrict<TProperty.GridColumn>;
  row: CuiSystemValueStrict<TProperty.GridRow>;
  autoFlow: CuiSystemValueStrict<TProperty.GridAutoFlow>;
  autoColumns: CuiSystemValueStrict<TProperty.GridAutoColumns>;
  autoRows: CuiSystemValueStrict<TProperty.GridAutoRows>;
  colStart: CuiSystemValueStrict<TProperty.GridColumnStart>;
  rowStart: CuiSystemValueStrict<TProperty.GridRowStart>;
  colEnd: CuiSystemValueStrict<TProperty.GridColumnEnd>;
  rowEnd: CuiSystemValueStrict<TProperty.GridRowEnd>;
  template: CuiSystemValueStrict<TProperty.GridTemplate>;
  templateAreas: CuiSystemValueStrict<TProperty.GridTemplateAreas>;
  templateColumns: CuiSystemValueStrict<TProperty.GridTemplateColumns>;
  templateRows: CuiSystemValueStrict<TProperty.GridTemplateRows>;
  area: CuiSystemValueStrict<TProperty.GridArea>;
}>;
