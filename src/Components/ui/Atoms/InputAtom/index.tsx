import React, {forwardRef} from 'react';
import {TextInputProps} from 'react-native';
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

const InputStyled: any = styled.TextInput`
  ${variant({prop: 'variant', key: 'forms'})}
  ${compose(border, color, space, layout, flexbox, position, shadow)};
`;

export const InputAtom = forwardRef<TextInputProps, InputAtomType>(
  (props, ref) => <InputStyled ref={ref} {...props} />,
);
