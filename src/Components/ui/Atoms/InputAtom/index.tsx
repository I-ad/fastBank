import React from 'react';
import styled from 'styled-components/native';
import {InputAtomType} from './interface';
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  variant,
} from 'styled-system';

export const InputAtom: React.FunctionComponent<InputAtomType> = styled.TextInput`
  ${variant({prop: 'variant', key: 'forms'})}
  ${compose(border, color, space, layout, flexbox, position, shadow)};
`;
