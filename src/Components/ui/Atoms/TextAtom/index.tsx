import React from 'react';
import styled from 'styled-components/native';
import {
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  textStyle,
  typography,
  variant,
} from 'styled-system';
import {TextAtomType} from './interface';

export const TextAtom: React.FunctionComponent<TextAtomType> = styled.Text`
  ${variant({prop: 'variant', key: 'typography'})}
  ${compose(
    textStyle,
    color,
    space,
    flexbox,
    position,
    shadow,
    typography,
    layout,
  )};
`;
