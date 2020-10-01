import {themeGet} from '@styled-system/theme-get';
import React from 'react';
import {ThemeContext} from 'styled-components';
import {BoxAtom} from '../BoxAtom';
import {ButtonAtom} from '../ButtonAtom';
import IconsBucket from './IconsBucket';
import {
  IconAtomType,
  IconButtonAtomType,
  IconWrapperAtomType,
} from './IconType';

const useThemeColors = (color?: string): string => {
  const theme = React.useContext(ThemeContext);
  return themeGet(`colors.${color}`, color)({theme});
};

export const IconAtom: React.FC<IconAtomType> = ({
  name,
  color = 'iconFirst',
  width = 24,
  dataTestId = 'icon-test-id',
}: IconAtomType) => {
  const iconColor = useThemeColors(color);
  const Icon = IconsBucket.getByName(name);
  if (!Icon || !name) {
    return null;
  }
  return (
    <Icon dataTestId={dataTestId} color={iconColor || color} width={width} />
  );
};

export const IconWrapperAtom: React.FC<IconWrapperAtomType> = ({
  name,
  color = 'iconFirst',
  width = 24,
  wrapperProps,
}: IconWrapperAtomType) => {
  const iconColor = useThemeColors(color);
  const Icon = IconsBucket.getByName(name);
  if (!Icon || !name) {
    return null;
  }
  return (
    <BoxAtom
      borderRadius={100}
      {...wrapperProps}
      justifyContent="center"
      alignItems="center">
      <Icon color={iconColor || color} width={width} />
    </BoxAtom>
  );
};
export const IconButtonAtom: React.FunctionComponent<IconButtonAtomType> = ({
  name,
  color = 'iconFirst',
  width = 24,
  buttonProps,
}: IconButtonAtomType) => {
  const iconColor = useThemeColors(color);
  const Icon = IconsBucket.getByName(name);
  if (!Icon || !name) {
    return null;
  }
  const onMouseDown = (e: any) => {
    e.preventDefault();
  };
  return (
    <ButtonAtom
      borderRadius={100}
      bg="transparent"
      {...buttonProps}
      onPressIn={onMouseDown}
      justifyContent="center"
      alignItems="center">
      <Icon color={iconColor || color} width={width} />
    </ButtonAtom>
  );
};

IconButtonAtom.displayName = 'IconButtonAtom';
IconWrapperAtom.displayName = 'IconWrapperAtom';
IconAtom.displayName = 'IconAtom';
