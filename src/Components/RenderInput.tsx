import React, {ReactElement} from 'react';
import {InputMolecules} from './ui/Molecules';
import {InputMoleculesType} from './ui/Molecules/InputMolecules';

export const RenderInput: (
  errors: any,
  inputProps?: InputMoleculesType,
) => (props: any) => ReactElement = (errors, inputProps) => {
  return (props) => (
    <InputMolecules
      {...props}
      {...inputProps}
      errorMessage={
        !!errors &&
        (errors as any)[props.name] &&
        (errors as any)[props.name].message
      }
    />
  );
};
