export type AsProps = {
  as?: React.ElementType;
};

export type EmotionProps = { theme: Theme } & { children?: React.ReactNode } & AsProps;

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

export type Breakpoints = {
  breakpoints: {
    [P in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number;
  };
};

export type TypographyVariant = {
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
  letterSpacing: string;
};

export type Typography = {
  typography: {
    fontFamily: string;
    h1: TypographyVariant;
    h2: TypographyVariant;
    h3: TypographyVariant;
    h4: TypographyVariant;
    h5: TypographyVariant;
    h6: TypographyVariant;
    subtitle1: TypographyVariant;
    subtitle2: TypographyVariant;
    body1: TypographyVariant;
    body2: TypographyVariant;
    button: TypographyVariant;
    caption: TypographyVariant;
    overline: TypographyVariant;
  };
};

export type Theme = Breakpoints &
  Typography & {
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      error: {
        light: string;
        main: string;
        dark: string;
      };
      info: {
        light: string;
        main: string;
        dark: string;
      };
      success: {
        light: string;
        main: string;
        dark: string;
      };
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
    radius: number;
    shadows: string[];
    zIndex: {
      mobileStepper: number;
      fab: number;
      speedDial: number;
      appBar: number;
      drawer: number;
      modal: number;
      snackbar: number;
      tooltip: number;
    };
  };
