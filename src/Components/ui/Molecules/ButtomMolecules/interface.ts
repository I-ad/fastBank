import {ReactNode} from 'react';
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

export interface ButtonMoleculesType extends IStyled {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  activeOpacity?: 1 | 0;
  onPress?(): void;

  variant?: ResponsiveValue<string>;
}
