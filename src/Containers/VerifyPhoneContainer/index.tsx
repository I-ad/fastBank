import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableWithoutFeedback} from 'react-native';
import {AppContext} from '../../AppContext';
import {
  BoxAtom,
  ButtonAtom,
  ScrollViewWrapper,
  TextAtom,
} from '../../Components';
import NumberHolder from './NumberHolder';

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Register'>;

type IProps = {
  navigation: ProfileScreenNavigationProp;
};

const VerifyPhoneContainer: React.FC<IProps> = ({navigation}) => {
  const {appData} = React.useContext(AppContext);
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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

  const resend = () => {
    navigation.replace('Register');
  };
  useEffect(() => {
    if (value && value.length === 4) {
      if (appData.verifyCode === value) {
        navigation.replace('PersonalInfo');
      } else {
        setErrorMessage('Wrong Code, Please Double Check Your Message');
      }
    }
  }, [value]);
  return (
    <ScrollViewWrapper>
      <BoxAtom position="absolute" bottom={0} width="100%" opacity={0}>
        <TextInput
          autoFocus={true}
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
      {!!errorMessage && (
        <TextAtom
          variant="help"
          color="danger"
          mb={4}
          textAlign="center"
          px={24}>
          {errorMessage}
        </TextAtom>
      )}
      <ButtonAtom
        maxWidth={180}
        justifyContent="center"
        alignSelf="center"
        onPress={resend}>
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

export default VerifyPhoneContainer;
