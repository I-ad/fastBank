import {TouchableOpacityProps} from 'react-native';
import {
  AlignSelfProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  FlexProps,
  GridProps,
  LayoutProps,
  OrderProps,
  PositionProps,
  ResponsiveValue,
  ShadowProps,
  SpaceProps,
} from 'styled-system';
import {Omit} from '../../types/common';

interface IStyled
  extends SpaceProps,
    Omit<LayoutProps, 'display'>,
    ColorProps,
    FlexProps,
    OrderProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    FlexboxProps,
    GridProps,
    AlignSelfProps {
  variant?: ResponsiveValue<string>;
}

export interface ButtonAtomType
  extends IStyled,
    Omit<TouchableOpacityProps, keyof IStyled> {}
