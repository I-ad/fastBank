import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {RadioUnchecked, RadioChecked} from './RadioButtonIcons';

export const RadioAtom: React.FunctionComponent<{
  select: boolean | null;
  onPress?(): void;
}> = ({select, onPress}) => {
  const RenderInput = () => {
    switch (select) {
      case true:
        return <RadioChecked />;
      case false:
      default:
        return <RadioUnchecked />;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>{RenderInput()}</View>
    </TouchableWithoutFeedback>
  );
};
