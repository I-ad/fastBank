import {RefAttributes} from 'react';
import {TextInputProps} from 'react-native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
  ShadowProps,
  SpaceProps,
} from 'styled-system';
import {Omit} from '../../types/common';

interface IStyled
  extends BorderProps,
    RefAttributes<TextInputProps>,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {
  variant?: ResponsiveValue<string>;
}

export interface InputAtomType
  extends IStyled,
    Omit<TextInputProps, keyof IStyled> {}
