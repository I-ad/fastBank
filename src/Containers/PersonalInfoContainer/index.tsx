import {StackNavigationProp} from '@react-navigation/stack';
import {useFormik} from 'formik';
import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {AppContext, PERSONAL_INFO_ADDED} from '../../AppContext';
import {
  BoxAtom,
  ButtonAtom,
  ButtonMolecules,
  InputMolecules,
  RadioAtom,
  ScrollViewWrapper,
  TextAtom,
} from '../../Components';
import {object, string} from 'yup';
import {dateFormat} from '../../utilities/dateFormatted';

const style = {
  voidView: {
    flex: 1,
  },
  voidViewContainer: {
    flex: 1,
  },
};

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
}

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Register'>;

type IProps = {
  navigation: ProfileScreenNavigationProp;
};

const dateRegex = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;

const PersonalInfoContainer: React.FC<IProps> = ({navigation}) => {
  const {appDispatch} = React.useContext(AppContext);
  const onSubmit = (values: FormData) => {
    appDispatch({type: PERSONAL_INFO_ADDED, payload: values});
    navigation.push('Address');
  };
  const {
    values,
    errors,
    setFieldTouched,
    touched,
    handleChange,
    handleSubmit,
    setValues,
    isValid,
  } = useFormik<FormData>({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
    },
    onSubmit,
    validationSchema: object().shape<FormData>({
      firstName: string().required('Required').min(3),
      lastName: string().required('Required').min(3),
      dateOfBirth: string()
        .required('Required')
        .max(10, 'Invalid Date')
        .min(10, 'Invalid Date')
        .matches(dateRegex, 'Invalid Date'),
      gender: string().required('Required'),
    }),
  });
  const onChangeGender = (gender: 'Male' | 'Female') => () => {
    setFieldTouched('gender', true);
    setValues({...values, gender});
  };

  const setInputBlur = (name: string) => () => setFieldTouched(name, true);

  return (
    <ScrollViewWrapper>
      <KeyboardAvoidingView
        behavior="height"
        contentContainerStyle={style.voidViewContainer}
        style={style.voidView}>
        <TextAtom variant="heading3" mb={6} mt={4} px={4}>
          Personal Information
        </TextAtom>
        <BoxAtom px={4}>
          <InputMolecules
            label="First Name"
            onChange={handleChange('firstName')}
            value={values.firstName}
            onBlur={setInputBlur('firstName')}
            errorMessage={
              errors.firstName && touched.firstName ? errors.firstName : ''
            }
            mb={3}
          />
          <InputMolecules
            label="Last Name"
            onChange={handleChange('lastName')}
            value={values.lastName}
            onBlur={setInputBlur('lastName')}
            errorMessage={
              errors.lastName && touched.lastName ? errors.lastName : ''
            }
            mb={3}
          />
          <InputMolecules
            label="Date of Birth"
            leftIconName="CalendarIcon"
            onChange={handleChange('dateOfBirth')}
            value={dateFormat(values.dateOfBirth)}
            onBlur={setInputBlur('dateOfBirth')}
            errorMessage={
              errors.dateOfBirth && touched.dateOfBirth
                ? errors.dateOfBirth
                : ''
            }
            helpMessage="e.g. MM/DD/YYYY"
            mb={3}
          />
        </BoxAtom>
        <BoxAtom px={4}>
          <TextAtom variant="heading4" fontWeight="normal" mb={1}>
            Gender
          </TextAtom>
          <ButtonAtom
            flexDirection="row"
            alignItems="center"
            mb={2}
            onPress={onChangeGender('Male')}
            activeOpacity={1}>
            <RadioAtom select={values.gender === 'Male'} />
            <TextAtom variant="largeText" color="textSecond" ml={1}>
              Male
            </TextAtom>
          </ButtonAtom>
          <ButtonAtom
            flexDirection="row"
            alignItems="center"
            activeOpacity={1}
            onPress={onChangeGender('Female')}>
            <RadioAtom select={values.gender === 'Female'} />
            <TextAtom variant="largeText" color="textSecond" ml={1}>
              Female
            </TextAtom>
          </ButtonAtom>
          <TextAtom variant="help" color="danger">
            {errors.gender && touched.gender ? errors.gender : ''}
          </TextAtom>
        </BoxAtom>
        <BoxAtom flex={1} />
        <BoxAtom px={4}>
          <ButtonMolecules
            label="Next"
            variant="primary"
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </BoxAtom>
      </KeyboardAvoidingView>
    </ScrollViewWrapper>
  );
};

export default PersonalInfoContainer;
