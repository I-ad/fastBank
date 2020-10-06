import React, {ReactElement} from 'react';
import {InputMolecules} from './ui/Molecules';

export const RenderInput: (
  label: string,
  leftIconName: string,
  errors: any,
  mb?: number,
) => (props: any) => ReactElement = (label, leftIconName, errors, mb) => {
  return (props) => (
    <InputMolecules
      {...props}
      label={label}
      leftIconName={leftIconName}
      mb={mb}
      errorMessage={
        !!errors &&
        (errors as any)[props.name] &&
        (errors as any)[props.name].message
      }
    />
  );
};
