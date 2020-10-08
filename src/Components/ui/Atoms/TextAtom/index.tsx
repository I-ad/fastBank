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
import lightTheme from '../../../../Theme/LightTheme';
import {TextAtomType} from './interface';

export const TextStyled: any = styled.Text`
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

export const TextAtom: React.FC<TextAtomType> = (props) => (
  <TextStyled {...props} theme={lightTheme} />
);
