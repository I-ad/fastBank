import {colors} from './colors';
import {styleGuid} from './styleGuid';

export const typography = {
  label: {
    fontSize: 16,
    fontFamily: styleGuid.fonts.normal,
    fontWeight: styleGuid.fontWeights.normal,
    color: colors.textFifth,
    lineHeight: styleGuid.lineHeights[1],
  },
  help: {
    fontSize: 14,
    fontWeight: styleGuid.fontWeights.semiBold,
    fontFamily: styleGuid.fonts.semiBold,
    color: colors.textFourth,
    lineHeight: styleGuid.lineHeights[1],
  },
  buttonLabel: {
    fontSize: styleGuid.fontSizes[2],
    fontFamily: styleGuid.fonts.semiBold,
    fontWeight: styleGuid.fontWeights.semiBold,
    color: colors.textSixth,
    lineHeight: styleGuid.lineHeights[1],
  },
  heading1: {
    fontSize: styleGuid.fontSizes[6],
    fontFamily: styleGuid.fonts.bold,
    fontWeight: styleGuid.fontWeights.bold,
    color: colors.textFirst,
    lineHeight: styleGuid.lineHeights[5],
  },
  extraLargeText: {
    fontSize: styleGuid.fontSizes[2],
    fontFamily: styleGuid.fonts.semiBold,
    fontWeight: styleGuid.fontWeights.semiBold,
    color: colors.textFirst,
    lineHeight: styleGuid.lineHeights[1],
  },
};
