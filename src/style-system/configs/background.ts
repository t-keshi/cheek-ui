import { TProperty } from 'csstype';
import { CuiSystemValueStrict } from '../../type';
import { transformDefault } from './transform/transformDefault';

export const background = {
  bg: {
    properties: ['background'],
    transform: transformDefault,
  },
  bgColor: {
    properties: ['backgroundColor'],
    transform: transformDefault,
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
  bgColor: CuiSystemValueStrict<TProperty.BackgroundColor>;
  bgPosition: CuiSystemValueStrict<TProperty.BackgroundPosition>;
  bgRepeat: CuiSystemValueStrict<TProperty.BackgroundRepeat>;
  bgImage: CuiSystemValueStrict<TProperty.BackgroundImage>;
  bgSize: CuiSystemValueStrict<TProperty.BackgroundSize>;
  bgAttachment: CuiSystemValueStrict<TProperty.BackgroundAttachment>;
  bgClip: CuiSystemValueStrict<TProperty.BackgroundClip>;
}>;
