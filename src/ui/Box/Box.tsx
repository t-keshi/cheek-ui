import styled, { StyledComponent } from '@emotion/styled';
import { background, BackgroundProps } from '../../style-system/configs/background';
import { layout, LayoutProps } from '../../style-system/configs/layout';
import { space, SpaceProps } from '../../style-system/configs/space';
import { convertToCssFactory } from '../../style-system/convertToCss';
import { EmotionProps, Theme } from '../../type';

type BoxProps = LayoutProps & BackgroundProps & SpaceProps;

type BoxType = StyledComponent<
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  EmotionProps<BoxProps>,
  Theme
>;

const cuiSystemConfig = {
  ...layout,
  ...background,
  ...space,
};

const css = convertToCssFactory(cuiSystemConfig);

export const Box = styled('div')(css) as BoxType;
