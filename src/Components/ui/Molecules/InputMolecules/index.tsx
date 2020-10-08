import React, {MutableRefObject, useState} from 'react';
import {TextInputProps} from 'react-native';
import {BoxAtom} from '../../Atoms/BoxAtom';
import {IconAtom} from '../../Atoms/IconAtom';
import {InputAtom} from '../../Atoms/InputAtom';
import {TextAtom} from '../../Atoms/TextAtom';
import FloatingLabel from './FloatingLabel';

export interface InputMoleculesType {
  width?: string | number;
  autoFocus?: boolean;
  value?: string;
  label?: string;
  leftIconName?: string;
  errorMessage?: string | undefined;
  helpMessage?: string | undefined;
  mb?: number | string;
  ref?: MutableRefObject<TextInputProps>;
  keyboardType?: TextInputProps['keyboardType'];
  onFocus?(): void;
  onBlur?(): void;
  onChange?(text: string): void;
}

const InputMolecules: React.FC<InputMoleculesType> = ({
  width,
  onFocus,
  autoFocus,
  value,
  label,
  leftIconName,
  onChange,
  errorMessage,
  helpMessage,
  mb,
  onBlur,
  ref,
  keyboardType,
}) => {
  const [focus, setFocus] = useState(!!autoFocus);
  const [HEIGHT, SET_HEIGHT] = useState(0);
  const ON_FOCUS = () => {
    if (onFocus) {
      onFocus();
    }
    setFocus(true);
  };
  const ON_BLUR = () => {
    if (onBlur) {
      onBlur();
    }
    setFocus(false);
  };
  const onLayout = (e: any) => {
    SET_HEIGHT(e.nativeEvent.layout.height);
  };
  const LEFT_PADDING: number = leftIconName ? 44 : 16;
  return (
    <BoxAtom width={width} mb={mb}>
      <BoxAtom width={width} position="relative" onLayout={onLayout}>
        {!!leftIconName && (
          <BoxAtom position="absolute" top={HEIGHT / 2 - 12} left={16}>
            <IconAtom
              name={leftIconName}
              color={errorMessage ? 'danger' : focus ? 'focus' : 'iconFirst'}
              width={24}
            />
          </BoxAtom>
        )}
        {label && (
          <FloatingLabel
            isActive={focus || !!value}
            left={LEFT_PADDING}
            label={label}
            containerHeight={HEIGHT}
            isFocus={focus}
            hasError={!!errorMessage}
          />
        )}
        <InputAtom
          ref={ref}
          value={value}
          width={width}
          height={56}
          autoFocus={autoFocus}
          border={focus ? 2 : 1}
          borderColor={
            errorMessage ? 'danger' : focus ? 'focus' : 'borderFirst'
          }
          px={LEFT_PADDING}
          onFocus={ON_FOCUS}
          onBlur={ON_BLUR}
          onChangeText={onChange}
          borderRadius={1}
          keyboardType={keyboardType}
        />
      </BoxAtom>
      {!!errorMessage && (
        <TextAtom ml={16} variant="help" color="danger">
          {errorMessage}
        </TextAtom>
      )}
      {!!helpMessage && (
        <TextAtom ml={16} variant="help">
          {helpMessage}
        </TextAtom>
      )}
    </BoxAtom>
  );
};

export default InputMolecules;
