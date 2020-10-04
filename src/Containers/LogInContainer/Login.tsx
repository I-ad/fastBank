import React, {useState} from 'react';
import {Alert, Dimensions, KeyboardAvoidingView} from 'react-native';
import ScrollViewWrapper from '../../Components/ScrollViewWrapper';
import {
  BoxAtom,
  ButtonMolecules,
  InputMolecules,
  TextAtom,
} from '../../Components/ui';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const onPress = () => Alert.alert('hi');
  const onEmailChange = (text: string) => {
    setEmail(text);
  };
  return (
    <ScrollViewWrapper>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <TextAtom variant="heading1">Login to Your Account</TextAtom>
        <BoxAtom flex={1} />
        <InputMolecules
          label="Email"
          leftIconName="EmailIcon"
          value={email}
          onChange={onEmailChange}
          autoFocus={true}
        />
        <InputMolecules label="Password" leftIconName="PasswordIcon" />
        <ButtonMolecules
          label="Continue"
          onPress={onPress}
          variant="primary"
          mt={24}
        />
      </KeyboardAvoidingView>
    </ScrollViewWrapper>
  );
};

export default Login;
