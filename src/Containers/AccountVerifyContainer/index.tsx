import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {AppContext} from '../../AppContext';
import {BoxAtom, ScrollViewWrapper, TextAtom} from '../../Components';
import ListItem from './ListItem';

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Register'>;

type IProps = {
  navigation: ProfileScreenNavigationProp;
};
const AccountVerifyContainer: React.FC<IProps> = ({navigation}) => {
  const {appData} = React.useContext(AppContext);
  const goToScanScreen = () => {
    navigation.replace('ScanDocument');
  };
  return (
    <ScrollViewWrapper>
      <BoxAtom flex={1}>
        <TextAtom variant="heading3" mb={6} mt={4} px={4}>
          Identity
        </TextAtom>
        {!!appData.driverLicenses && (
          <TextAtom
            variant="largeText"
            color="textFourth"
            mb={6}
            mt={1}
            px={4}
            textAlign="center">
            Thank you for choosing Fast Bank, Our Team will Review your Data
            Soon
          </TextAtom>
        )}
        <ListItem title="Personal information" checked={true} />
        <ListItem title="Home Address" checked={true} />
        <ListItem
          title="Driver Licenses"
          checked={!!appData.driverLicenses}
          onClick={goToScanScreen}
        />
      </BoxAtom>
    </ScrollViewWrapper>
  );
};

export default AccountVerifyContainer;
