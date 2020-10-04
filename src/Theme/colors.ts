import {ColorsType} from './interfaces';

const allColors = {
  '#4662EB': '#4662EB',
  '#1B2B36': '#1B2B36',
  '#36434D': '#36434D',
  '#667480': '#667480',
  '#8D9AA6': '#8D9AA6',
  '#C7D2D9': '#C7D2D9',
  '#FFFFFF': '#FFFFFF',
  '#EE5C52': '#EE5C52',
};

const primaries = {
  primaryFirst: allColors['#4662EB'],
};

const texts = {
  textFirst: allColors['#1B2B36'],
  textSecond: allColors['#36434D'],
  textThird: allColors['#667480'],
  textFourth: allColors['#8D9AA6'],
  textFifth: allColors['#C7D2D9'],
  textSixth: allColors['#FFFFFF'],
};

const backgrounds = {
  backgroundFirst: allColors['#FFFFFF'],
};

export const colors: ColorsType = {
  ...primaries,
  ...texts,
  ...backgrounds,
  borderFirst: allColors['#C7D2D9'],
  focus: allColors['#4662EB'],
  iconFirst: allColors['#C7D2D9'],
  danger: allColors['#EE5C52'],
};
