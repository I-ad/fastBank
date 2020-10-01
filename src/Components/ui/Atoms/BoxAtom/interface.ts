import {ViewProps} from 'react-native';
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
    LayoutProps,
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

export interface BoxAtomType extends IStyled, Omit<ViewProps, keyof IStyled> {}
