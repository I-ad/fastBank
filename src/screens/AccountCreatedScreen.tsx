import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Dimensions} from 'react-native';
import {ButtonMolecules, ScrollViewWrapper, TextAtom} from '../Components';
import {AccountCreatedIllustrations} from '../Components/ui/Atoms';
import {BoxAtom} from '../Components/ui/Atoms/BoxAtom';

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Register'>;

type IProps = {
  navigation: ProfileScreenNavigationProp;
};

const AccountCreatedScreen: React.FC<IProps> = ({navigation}) => {
  const onPress = () => navigation.replace('');
  return (
    <ScrollViewWrapper>
      <BoxAtom alignSelf="center" mt={64} mb={6}>
        <AccountCreatedIllustrations
          width={Dimensions.get('window').width - 48}
        />
      </BoxAtom>
      <TextAtom
        variant="heading2"
        textAlign="center"
        maxWidth={246}
        alignSelf="center">
        Your Account has Been Created
      </TextAtom>
      <BoxAtom flex={1} />
      <BoxAtom px={4}>
        <ButtonMolecules
          label="Verify Identity"
          variant="primary"
          onPress={onPress}
        />
      </BoxAtom>
    </ScrollViewWrapper>
  );
};

export default AccountCreatedScreen;
