import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {
  CheckboxChecked,
  CheckboxIndeterminate,
  CheckboxUnchecked,
} from './CheckBoxIcons';

export const CheckboxAtom: React.FunctionComponent<{
  checked: boolean | null;
  onPress?(): void;
}> = ({checked, onPress}) => {
  const RenderInput = () => {
    switch (checked) {
      case true:
        return <CheckboxChecked />;
      case false:
        return <CheckboxUnchecked />;
      default:
        return <CheckboxIndeterminate />;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>{RenderInput()}</View>
    </TouchableWithoutFeedback>
  );
};
