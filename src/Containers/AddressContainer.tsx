import {StackNavigationProp} from '@react-navigation/stack';
import {useFormik} from 'formik';
import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {object, string} from 'yup';
import {ADDRESS_ADDED, AppContext} from '../AppContext';
import {
  BoxAtom,
  ButtonMolecules,
  InputMolecules,
  ScrollViewWrapper,
  TextAtom,
} from '../Components';

const style = {
  voidView: {
    flex: 1,
  },
  voidViewContainer: {
    flex: 1,
  },
};

type FormDat = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
};

const zipcodeRegex = /\d{5}/g;

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Register'>;

type IProps = {
  navigation: ProfileScreenNavigationProp;
};

const AddressContainer: React.FC<IProps> = ({navigation}) => {
  const {appDispatch} = React.useContext(AppContext);
  const onSubmit = (values: FormDat) => {
    appDispatch({type: ADDRESS_ADDED, payload: values});
    navigation.replace('AccountCreated');
  };
  const {
    handleChange,
    values,
    errors,
    setFieldTouched,
    touched,
    isValid,
    handleSubmit,
  } = useFormik<FormDat>({
    initialValues: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
    },
    onSubmit,
    validationSchema: object().shape<FormDat>({
      address1: string().required('Required'),
      address2: string(),
      city: string().required('Required'),
      state: string().required('Required'),
      zipcode: string()
        .required('Required')
        .min(5, 'Invalid Zipcode')
        .max(5, 'Invalid Zipcode')
        .matches(zipcodeRegex, 'Invalid Zipcode'),
    }),
  });
  const setInputBlur = (name: string) => () => setFieldTouched(name, true);
  return (
    <ScrollViewWrapper>
      <KeyboardAvoidingView
        behavior="height"
        contentContainerStyle={style.voidViewContainer}
        style={style.voidView}>
        <TextAtom variant="heading3" mb={6} mt={4} px={4}>
          Your Home Address
        </TextAtom>
        <BoxAtom px={4}>
          <InputMolecules
            label="Address 1"
            onChange={handleChange('address1')}
            onBlur={setInputBlur('address1')}
            value={values.address1}
            errorMessage={
              errors.address1 && touched.address1 ? errors.address1 : ''
            }
            mb={3}
          />
          <InputMolecules
            label="Address 2"
            onChange={handleChange('address2')}
            onBlur={setInputBlur('address2')}
            value={values.address2}
            errorMessage={
              errors.address2 && touched.address2 ? errors.address2 : ''
            }
            mb={3}
          />
          <InputMolecules
            label="City"
            onChange={handleChange('city')}
            onBlur={setInputBlur('city')}
            value={values.city}
            errorMessage={errors.city && touched.city ? errors.city : ''}
            mb={3}
          />
          <InputMolecules
            label="State"
            onChange={handleChange('state')}
            onBlur={setInputBlur('state')}
            value={values.state}
            errorMessage={errors.state && touched.state ? errors.state : ''}
            mb={3}
          />
          <InputMolecules
            label="Zipcode"
            onChange={handleChange('zipcode')}
            onBlur={setInputBlur('zipcode')}
            value={values.zipcode}
            errorMessage={
              errors.zipcode && touched.zipcode ? errors.zipcode : ''
            }
            keyboardType="number-pad"
          />
        </BoxAtom>
        <BoxAtom flex={1} />
        <BoxAtom px={4}>
          <ButtonMolecules
            label="Continue"
            variant="primary"
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </BoxAtom>
      </KeyboardAvoidingView>
    </ScrollViewWrapper>
  );
};

export default AddressContainer;
