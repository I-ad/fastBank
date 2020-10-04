import {buttons} from './buttons';
import {colors} from './colors';
import {ThemeType} from './interfaces';
import {styleGuid} from './styleGuid';
import {typography} from './typograph';

const lightTheme: ThemeType = {
  ...styleGuid,
  colors,
  buttons,
  typography,
};

export default lightTheme;
