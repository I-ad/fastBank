import {StackNavigationProp} from '@react-navigation/stack';
import {useFormik} from 'formik';
import React from 'react';
import {Dimensions, KeyboardAvoidingView} from 'react-native';
import {object, string} from 'yup';
import {AppContext, PHONE_NUMBER_ADDED} from '../../AppContext';
import {
  BoxAtom,
  ButtonMolecules,
  CreateAccountIllustrations,
  InputMolecules,
  ScrollViewWrapper,
  TextAtom,
} from '../../Components';
import {phoneFormat} from '../../utilities/phonePhormat';

type FormData = {
  phone: string;
};

const style = {
  voidView: {
    flex: 1,
  },
  voidViewContainer: {
    flex: 1,
  },
};

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Register'>;

type IProps = {
  navigation: ProfileScreenNavigationProp;
};

const RegisterContainer: React.FC<IProps> = ({navigation}) => {
  const {appDispatch} = React.useContext(AppContext);
  const onSubmit = (value: FormData) => {
    appDispatch({type: PHONE_NUMBER_ADDED, payload: value.phone});
    navigation.replace('CreatePasscode');
  };
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    setFieldTouched,
    isValid,
  } = useFormik<FormData>({
    initialValues: {
      phone: '',
    },
    validationSchema: object().shape({
      phone: string()
        .required('Required')
        .min(14, 'Invalid Phone Number')
        .max(14, 'Invalid Phone Number')
        .matches(phoneRegExp, 'Invalid Phone Number')
        .label('Phone Number'),
    }),
    onSubmit,
  });

  const setInputBlur = (name: string) => () => setFieldTouched(name, true);
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
          <InputMolecules
            label="Phone Number"
            leftIconName="PhoneIcon"
            mb={2}
            onChange={handleChange('phone')}
            value={phoneFormat(values.phone)}
            onBlur={setInputBlur('phone')}
            errorMessage={errors.phone && touched.phone ? errors.phone : ''}
            keyboardType="number-pad"
          />
          <TextAtom variant="mediumText" color="textFourth">
            You Should Be Getting a Text Message Shortly
          </TextAtom>
          <ButtonMolecules
            label="Continue"
            variant="primary"
            mt={24}
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </BoxAtom>
      </KeyboardAvoidingView>
    </ScrollViewWrapper>
  );
};

export default RegisterContainer;
