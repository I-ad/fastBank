import {ThemeType} from './interfaces';

export const styleGuid: ThemeType = {
  sizes: {
    extraSmall: 24,
    small: 32,
    medium: 48,
    large: 56,
    extraLarge: 64,
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px'],
  lineHeights: ['16px', '24px', '32px', '40px', '48px', '72px'],
  fontWeights: {
    extraBlack: 950,
    black: 900,
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    medium: 500,
    normal: 400,
    semiLight: 350,
    light: 300,
    extraLight: 200,
    thin: 100,
  },
  fonts: {
    extraBlack: '',
    black: '',
    extraBold: '',
    bold: '',
    semiBold: '',
    medium: '',
    normal: '',
    semiLight: '',
    light: '',
    extraLight: '',
    thin: '',
  },
  radii: [0, 4, 8],
  borders: ['none', '1px solid', '1.6px solid'],
};

const A = (styleGuide: any, colors: any) => {
  console.log(styleGuide, colors);
};

console.log(A);
