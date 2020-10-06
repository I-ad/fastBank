import {colors} from './colors';
import {styleGuid} from './styleGuid';

export const buttons = {
  primary: {
    backgroundColor: colors.primaryFirst,
    borderRadius: styleGuid.radii[1],
    height: styleGuid.sizes.large,
    width: '100%',
  },
  disabled: {
    backgroundColor: colors.disabled,
    borderRadius: styleGuid.radii[1],
    height: styleGuid.sizes.large,
    width: '100%',
  },
  ghost: {
    backgroundColor: 'transparent',
    height: 'auto',
    width: 'auto',
  },
};
