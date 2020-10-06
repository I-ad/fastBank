import {ColorsType} from './interfaces';

const allColors = {
  royalBlue: '#4662EB',
  mirage: '#1B2B36',
  limedSpruce: '#36434D',
  paleSky: '#667480',
  regentGray: '#8D9AA6',
  loblolly: '#B6C0C7',
  white: '#FFFFFF',
  burntSienna: '#EE5C52',
  alto: '#D3D3D3',
  porcelain: '#EAEEEF',
  mountainMeadow: '#21B771',
  catskillWhite: '#F7F9FB',
};

const primaries = {
  primaryFirst: allColors.royalBlue,
};

const texts = {
  textFirst: allColors.mirage,
  textSecond: allColors.limedSpruce,
  textThird: allColors.paleSky,
  textFourth: allColors.regentGray,
  textFifth: allColors.loblolly,
  textSixth: allColors.white,
};

const backgrounds = {
  backgroundFirst: allColors.white,
  backgroundSecond: allColors.porcelain,
  backgroundThird: allColors.catskillWhite,
};

export const colors: ColorsType = {
  ...primaries,
  ...texts,
  ...backgrounds,
  borderFirst: allColors.loblolly,
  focus: allColors.royalBlue,
  iconFirst: allColors.loblolly,
  danger: allColors.burntSienna,
  success: allColors.mountainMeadow,
  disabled: allColors.alto,
};
