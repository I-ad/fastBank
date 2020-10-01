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
import {ButtonAtomType} from './interface';

const ButtonStyled = styled.TouchableOpacity`
  margin: 0;
  min-width: 0;
  ${variant({prop: 'variant', key: 'buttons'})}
  ${compose(color, space, flexbox, position, layout, shadow, grid, border)};
`;

export const ButtonAtom: React.FunctionComponent<ButtonAtomType> = (props) => (
  <ButtonStyled {...props} />
);
