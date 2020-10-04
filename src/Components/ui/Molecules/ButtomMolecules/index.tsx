import React, {ReactNode} from 'react';
import {ButtonAtom, TextAtom} from '../../Atoms';
import {ButtonMoleculesType} from './interface';

const ButtonMolecules: React.FC<ButtonMoleculesType> = ({
  label,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  activeOpacity = 1,
  ...rest
}) => {
  return (
    <ButtonAtom
      {...rest}
      disabled={disabled}
      activeOpacity={activeOpacity}
      justifyContent="center"
      alignItems="center">
      {loading ? null : (
        <>
          {leftIcon}
          <TextAtom variant="buttonLabel">{label}</TextAtom>
          {rightIcon}
        </>
      )}
    </ButtonAtom>
  );
};

export default ButtonMolecules;
