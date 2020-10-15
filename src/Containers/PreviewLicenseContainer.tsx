import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, Platform, SafeAreaView} from 'react-native';
import RNFS from 'react-native-fs';
import {AppContext, LICENSE_ADDED} from '../AppContext';
import {BoxAtom, ButtonMolecules} from '../Components';

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Register'>;

type IProps = {
  navigation: ProfileScreenNavigationProp;
};

const PreviewLicenseContainer: React.FC<IProps> = ({navigation}) => {
  const {appData, appDispatch} = React.useContext(AppContext);
  const addPicture = async () => {
    const base64data = await RNFS.readFile(
      Platform.OS === 'ios'
        ? `file://${appData.licensePicturePath}`
        : appData.licensePicturePath || '',
      'base64',
    ).then();
    if (base64data) {
      appDispatch({type: LICENSE_ADDED, payload: base64data});
    }
    navigation.replace('AccountVerifyContainer');
  };
  const retake = () => {
    navigation.replace('ScanDocument');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={{
          uri:
            Platform.OS === 'ios'
              ? `file:${appData.licensePicturePath}`
              : appData.licensePicturePath || '',
        }}
        style={{flex: 1, width: 414}}
        resizeMode="contain"
      />
      <BoxAtom px={4}>
        <ButtonMolecules
          variant="primary"
          label="Looks Good"
          mb={2}
          onPress={addPicture}
        />
        <ButtonMolecules variant="primary" label="Retake" onPress={retake} />
      </BoxAtom>
    </SafeAreaView>
  );
};

export default PreviewLicenseContainer;
