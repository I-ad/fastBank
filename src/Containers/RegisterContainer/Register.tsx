import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Dimensions, KeyboardAvoidingView} from 'react-native';
import {
  ScrollViewWrapper,
  ButtonMolecules,
  BoxAtom,
  CreateAccountIllustrations,
  RenderInput,
} from '../../Components';

import {TextAtom} from '../../Components/ui/Atoms/TextAtom';

type FormData = {
  phoneNumber: string;
};

type IProps = {
  onSubmit(value: FormData): void;
};

const style = {
  voidView: {
    flex: 1,
  },
  voidViewContainer: {
    flex: 1,
  },
};

const Register: React.FC<IProps> = ({onSubmit}) => {
  const {control, errors, handleSubmit} = useForm<FormData>({
    mode: 'onChange',
  });
  return (
    <ScrollViewWrapper>
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={style.voidViewContainer}
        style={style.voidView}>
        <BoxAtom flex={1} px={24}>
          <TextAtom variant="heading1" mb={32}>
            Create an Account
          </TextAtom>
          <BoxAtom alignItems="center">
            <CreateAccountIllustrations
              width={Dimensions.get('window').width - 48}
            />
          </BoxAtom>
          <BoxAtom flex={1} mb={4} />
          <Controller
            name="phoneNumber"
            render={RenderInput('Mobile Number', 'PhoneIcon', errors, 2)}
            control={control}
            defaultValue=""
            rules={{
              required: 'This Field is Required.',
            }}
          />
          <TextAtom variant="mediumText" color="textFourth">
            You Should Be Getting a Text Message Shortly
          </TextAtom>
          <ButtonMolecules
            label="Continue"
            variant="primary"
            mt={24}
            onPress={handleSubmit(onSubmit)}
          />
        </BoxAtom>
      </KeyboardAvoidingView>
    </ScrollViewWrapper>
  );
};

export default Register;
