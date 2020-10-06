import React from 'react';
import Register from './Register';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type ProfileScreenRouteProp = RouteProp<any, 'Profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Profile'>;

type IProps = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const RegisterContainer: React.FC<IProps> = () => {
  const onSubmit = (s: any) => {
    console.log(s);
  };
  return <Register onSubmit={onSubmit} />;
};

export default RegisterContainer;
