export type EmotionProps = { theme: Theme } & { children?: React.ReactNode } & {
  as?: React.ElementType;
};

export type BreakPointsValue = (string | number)[];

export type CuiSystemValue = string | number | BreakPointsValue;

export type CuiSystemValueStrict<T extends string | number> = T extends string
  ? T | string[]
  : T | (number | '_')[];

export type CSSGenerator = {
  properties: string[];
  transform: (value: string | number, theme: Theme) => string | number;
};

export type CuiSystemKey =
  | 'bg'
  | 'bgColor'
  | 'bgPosition'
  | 'bgRepeat'
  | 'bgImage'
  | 'bgSize'
  | 'bgAttachment'
  | 'bgClip'
  | 'border'
  | 'borderTop'
  | 'borderRight'
  | 'borderBottom'
  | 'borderLeft'
  | 'borderX'
  | 'borderY  '
  | 'display'
  | 'alignItems'
  | 'alignContent'
  | 'alignSelf'
  | 'justifyItems'
  | 'justifyContent'
  | 'justifySelf'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis'
  | 'flexWrap'
  | 'flexDirection'
  | 'gap'
  | 'columnGap'
  | 'rowGap'
  | 'display'
  | 'size'
  | 'h'
  | 'maxH'
  | 'minH'
  | 'w'
  | 'maxW'
  | 'minW'
  | 'overflow'
  | 'overflowX'
  | 'overflowY'
  | 'verticalAlign'
  | 'boxSizing'
  | 'objectFit'
  | 'objectPosition'
  | 'visibility'
  | 'position'
  | 'zIndex'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'
  | 'display'
  | 'color'
  | 'ls'
  | 'lh'
  | 'textDecoration'
  | 'textAlign'
  | 'fontStyle'
  | 'wordBreak'
  | 'overflowWrap'
  | 'textOverflow'
  | 'textTransform'
  | 'whiteSpace';

export type CuiSystemProps = { [P in CuiSystemKey]+?: CuiSystemValue };

export type CuiSystemConfig = { [P in CuiSystemKey]+?: CSSGenerator };

export type CuiTransform = (value: string | number, theme: Theme) => string | number;

export type Transform = (value: string | number, theme: Theme) => string | number;

export type OwnerStateRecord<TOwnerState> = { ownerState?: TOwnerState };

export type OwnerStateResolver<TOwnerState> = (props: {
  ownerState: TOwnerState;
  theme: Theme;
  // eslint-disable-next-line @typescript-eslint/ban-types
}) => {};

export type BreakpointsKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Breakpoints = {
  [P in BreakpointsKey]: number;
};

export type TypographyVariantValue = {
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
  letterSpacing: string;
};

export type TypographyVariantKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export type TypographyVariant = {
  [P in TypographyVariantKey]: TypographyVariantValue;
};

export type Typography = {
  fontFamily: string;
} & TypographyVariant;

export type PaletteVariant = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

export type Palette = {
  common: {
    black: string;
    white: string;
  };
  primary: PaletteVariant;
  secondary: PaletteVariant;
  error: PaletteVariant;
  info: PaletteVariant;
  success: PaletteVariant;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  divider: string;
  background: string;
  action: {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
    disabled: string;
    disabledBackground: string;
    disabledOpacity: number;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
  };
};

export type ZIndex = {
  mobileStepper: number;
  fab: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
};

export type Theme = {
  breakpoints: Breakpoints;
  typography: Typography;
  zIndex: ZIndex;
  palette: Palette;
  radius: number;
  shadows: string[];
};
