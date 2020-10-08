import React from 'react';
import styled from 'styled-components/native';
import {
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  variant,
} from 'styled-system';
import lightTheme from '../../../../Theme/LightTheme';
import {BoxAtomType} from './interface';

export const BoxStyled: any = styled.View`
  margin: 0;
  min-width: 0;
  ${variant({prop: 'variant', key: 'boxes'})}
  ${compose(color, space, flexbox, position, layout, shadow, grid, border)};
`;

export const BoxAtom: React.FC<BoxAtomType> = (props) => (
  <BoxStyled {...props} theme={lightTheme} />
);
