import React from 'react';
import {Alert} from 'react-native';
import {
  BoxAtom,
  ButtonAtom,
  InputAtom,
  TextAtom,
  IconAtom,
  IconWrapperAtom,
  IconButtonAtom,
} from '../../Components/ui/Atoms';

const Login: React.FC = () => {
  const onPress = () => Alert.alert('hi');
  return (
    <BoxAtom>
      <ButtonAtom
        width={200}
        height={50}
        bg="red"
        onPress={onPress}
        activeOpacity={1}
      />
      <InputAtom color="red" ml={100} autoFocus={true} />
      <TextAtom
        color="green"
        ml={30}
        mt={100}
        fontSize={100}
        lineHeight={'100px'}>
        Hello
      </TextAtom>
      <IconAtom name="BellIcon" color="blue" width={100} />
      <IconWrapperAtom
        name="BellIcon"
        color="orange"
        wrapperProps={{
          width: 100,
          height: 100,
          bg: 'pink',
        }}
      />
      <IconButtonAtom
        name="BellIcon"
        color="green"
        buttonProps={{
          width: 100,
          height: 100,
          bg: 'pink',
        }}
      />
    </BoxAtom>
  );
};

export default Login;
