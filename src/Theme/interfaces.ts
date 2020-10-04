import {Theme} from 'styled-system';

interface FontsWeights<T = number> {
  extraBlack: T;
  black: T;
  extraBold: T;
  bold: T;
  semiBold: T;
  medium: T;
  normal: T;
  semiLight: T;
  light: T;
  extraLight: T;
  thin: T;
}

export interface ThemeType {
  sizes: {
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
  };
  space: number[];
  fontSizes: string[];
  lineHeights: string[];
  fontWeights: FontsWeights;
  fonts: FontsWeights<string>;
  radii: number[];
  borders: Theme['borders'];
  buttons?: any;
  typography?: any;
  colors?: any;
}

export interface ColorsType {
  primaryFirst: string;
  textFirst: string;
  textSecond: string;
  textThird: string;
  textFourth: string;
  textFifth: string;
  textSixth: string;
  backgroundFirst: string;
  borderFirst: string;
  focus: string;
  iconFirst: string;
  danger: string;
}
