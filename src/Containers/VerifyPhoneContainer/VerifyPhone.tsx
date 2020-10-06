import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableWithoutFeedback} from 'react-native';
import {
  BoxAtom,
  ButtonAtom,
  ScrollViewWrapper,
  TextAtom,
} from '../../Components';
import NumberHolder from './NumberHolder';

const VerifyPhone: React.FC = () => {
  const [value, setValue] = useState('');
  const hiddenInputRef: any = useRef(null);
  const onChangeText = (text: string): void => {
    if (text.length <= 4) {
      setValue(text);
      console.log(text);
    }
  };
  const onBodyPressed = () => {
    if (hiddenInputRef && hiddenInputRef.current) {
      hiddenInputRef.current.focus();
    }
  };
  useEffect(() => {
    if (value && value.length >= 3) {
      if (hiddenInputRef && hiddenInputRef.current) {
        //
      }
    }
  }, [value]);
  return (
    <ScrollViewWrapper>
      <BoxAtom position="absolute" bottom={0} width="100%" opacity={0}>
        <TextInput
          autoFocus={true}
          style={{backgroundColor: 'red'}}
          ref={hiddenInputRef}
          onChangeText={onChangeText}
          value={value}
          keyboardType="number-pad"
        />
      </BoxAtom>
      <TextAtom variant="heading3" alignSelf="center" mb={2} mt={4}>
        Verify Phone
      </TextAtom>
      <TextAtom
        variant="largeText"
        maxWidth={287}
        alignSelf="center"
        textAlign="center">
        we have sent you a confirmation code via SMS to{' '}
        <TextAtom color="success" fontWeight="bold">
          123-123-1234
        </TextAtom>
      </TextAtom>
      <TouchableWithoutFeedback onPress={onBodyPressed}>
        <BoxAtom
          width={232}
          alignSelf="center"
          my={6}
          justifyContent="space-between"
          flexDirection="row">
          <NumberHolder value={value[0]} />
          <NumberHolder value={value[1]} />
          <NumberHolder value={value[2]} />
          <NumberHolder value={value[3]} />
        </BoxAtom>
      </TouchableWithoutFeedback>
      <ButtonAtom maxWidth={180} justifyContent="center" alignSelf="center">
        <TextAtom variant="large" color="textThird">
          Didn't receive it?{' '}
          <TextAtom color="primaryFirst" fontWeight="bold">
            Resend
          </TextAtom>
        </TextAtom>
      </ButtonAtom>
    </ScrollViewWrapper>
  );
};

export default VerifyPhone;
