import { TProperty } from 'csstype';
import { CuiSystemValueStrict, Transform } from '../../type';
import { accessTheme } from './transform/accessTheme';
import { transformDefault } from './transform/transformDefault';

const transformBgColor: Transform = (value, theme) => {
  if (
    value === 'primary' ||
    value === 'secondary' ||
    value === 'error' ||
    value === 'info' ||
    value === 'success'
  ) {
    return accessTheme(value, theme);
  }

  return value;
};

export const background = {
  bg: {
    properties: ['background'],
    transform: transformBgColor,
  },
  bgColor: {
    properties: ['backgroundColor'],
    transform: transformBgColor,
  },
  bgPosition: {
    properties: ['backgroundPosition'],
    transform: transformDefault,
  },
  bgRepeat: {
    properties: ['borderRepeat'],
    transform: transformDefault,
  },
  bgImage: {
    properties: ['backgroundImage'],
    transform: transformDefault,
  },
  bgSize: {
    properties: ['backgroundSize'],
    transform: transformDefault,
  },
  bgAttachment: {
    properties: ['backgroundAttachment'],
    transform: transformDefault,
  },
  bgClip: {
    properties: ['backgroundClip'],
    transform: transformDefault,
  },
};

export type BackgroundProps = Partial<{
  bg: CuiSystemValueStrict<TProperty.Background>;
  bgColor: CuiSystemValueStrict<
    'initial' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success'
  >;
  bgPosition: CuiSystemValueStrict<TProperty.BackgroundPosition>;
  bgRepeat: CuiSystemValueStrict<TProperty.BackgroundRepeat>;
  bgImage: CuiSystemValueStrict<TProperty.BackgroundImage>;
  bgSize: CuiSystemValueStrict<TProperty.BackgroundSize>;
  bgAttachment: CuiSystemValueStrict<TProperty.BackgroundAttachment>;
  bgClip: CuiSystemValueStrict<TProperty.BackgroundClip>;
}>;
