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
import {BoxAtomType} from './interface';

export const BoxAtom: React.FC<BoxAtomType> = styled.View`
  margin: 0;
  min-width: 0;
  ${variant({prop: 'variant', key: 'boxes'})}
  ${compose(color, space, flexbox, position, layout, shadow, grid, border)};
`;
