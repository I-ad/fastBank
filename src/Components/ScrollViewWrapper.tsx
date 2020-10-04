import React, {useState} from 'react';
import {Dimensions, ScrollView, SafeAreaView} from 'react-native';
import {BoxAtom} from './ui/Atoms/BoxAtom';

const ScrollViewWrapper: React.FC = ({children}) => {
  const [isScrollable, setIsScrollable] = useState(false);

  const onContentChange = (_: any, contentHeight: number) => {
    setIsScrollable(contentHeight > Dimensions.get('window').height);
  };
  return (
    <ScrollView
      onContentSizeChange={onContentChange}
      scrollEnabled={isScrollable}>
      <BoxAtom
        pt={40}
        bg="backgroundFirst"
        flex={1}
        pb={60}
        minHeight={Dimensions.get('window').height}>
        <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
      </BoxAtom>
    </ScrollView>
  );
};

export default ScrollViewWrapper;
