interface IFonts<T> {
  extraBlack?: T;
  black?: T;
  extraBold?: T;
  bold: T;
  semiBold: T;
  medium: T;
  normal: T;
  semiLight?: T;
  light?: T;
  extraLight?: T;
  thin?: T;
}

interface ISizes {
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
}

interface BaseType {
  space: number[];
  fontSizes: number[];
  fontWeights: IFonts<number>;
  lineHeights: (number | string)[];
  borders: (string | number)[];
  letterSpacings: string[];
  fonts: IFonts<string>;
  radii: (string | number)[];
  sizes: ISizes;
  shadows: string[];
  zIndices: number[];
}

export interface ThemeType<T extends any> extends BaseType {
  name?: string;
  colors: T;
  buttons: { [k: string]: any };
  box: { [k: string]: any };
  text: { [key: string]: any };
  forms?: { [key: string]: any };
}

// background color
// text Color
// element background
// icon Color
// border Color
// focus Color

type B = { [key: string]: any };

interface ITheme extends B {
  colors: any;
}

const C: ITheme = {
  colors: [],
  inputs: {},
};
