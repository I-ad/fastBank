import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  BoxAtom,
  ButtonAtom,
  CreatePasscodeIllustrations,
  TextAtom,
} from '../../Components';
import Dot from './Dot';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const style = {
  saveArea: {
    flex: 1,
  },
};

const CreatePasscode: React.FC = () => {
  const [value, setValue] = useState('');
  const hiddenInputRef: any = useRef(null);
  const onBodyPressed = () => {
    if (hiddenInputRef && hiddenInputRef.current) {
      hiddenInputRef.current.focus();
    }
  };
  const onChangeText = (text: string): void => {
    if (text.length <= 4) {
      setValue(text);
      console.log(text);
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
    <BoxAtom flex={1} bg="backgroundFirst">
      <TouchableWithoutFeedback onPress={onBodyPressed}>
        <SafeAreaView style={style.saveArea}>
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
          <TextAtom variant="heading3" alignSelf="center" mt={4}>
            Create a Passcode
          </TextAtom>
          <BoxAtom
            flexDirection="row"
            alignSelf="center"
            my={5}
            justifyContent="space-between">
            <Dot isActive={value.length > 0} />
            <Dot isActive={value.length > 1} />
            <Dot isActive={value.length > 2} />
            <Dot isActive={value.length > 3} />
          </BoxAtom>
          {HEIGHT > 680 && (
            <BoxAtom alignItems="center">
              <CreatePasscodeIllustrations width={WIDTH - 96} />
            </BoxAtom>
          )}
          <ButtonAtom mt={3} maxWidth={253} alignSelf="center">
            <TextAtom variant="mediumText" textAlign="center" color="textFifth">
              By Entering Your Passcode, You Agree to our
              <TextAtom ml={10} variant="heading6" color="primaryFirst">
                {' '}
                Terms & Conditions
              </TextAtom>
            </TextAtom>
          </ButtonAtom>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </BoxAtom>
  );
};

export default CreatePasscode;
