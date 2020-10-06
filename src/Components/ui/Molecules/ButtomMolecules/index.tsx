import React from 'react';
import {ButtonAtom, TextAtom} from '../../Atoms';
import {ButtonMoleculesType} from './interface';

const ButtonMolecules: React.FC<ButtonMoleculesType> = ({
  label,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  activeOpacity = 1,
  variant,
  ...rest
}) => {
  const labelColor = () => {
    switch (variant) {
      case 'primary':
        return 'textSixth';
      case 'ghost':
        return 'primaryFirst';
      default:
        return '#000';
    }
  };
  return (
    <ButtonAtom
      {...rest}
      variant={disabled ? 'disabled' : variant}
      disabled={disabled}
      activeOpacity={activeOpacity}
      justifyContent="center"
      alignItems="center">
      {loading ? null : (
        <>
          {leftIcon}
          <TextAtom variant="buttonLabel" color={labelColor()}>
            {label}
          </TextAtom>
          {rightIcon}
        </>
      )}
    </ButtonAtom>
  );
};

export default ButtonMolecules;
