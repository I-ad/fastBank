import React from 'react';
import ScrollViewWrapper from '../../Components/ScrollViewWrapper';
import {BoxAtom} from '../../Components/ui/Atoms/BoxAtom';
import {TextAtom} from '../../Components/ui/Atoms/TextAtom';
import {ButtonMolecules, InputMolecules} from '../../Components/ui/Molecules';

const Register: React.FC = () => {
  return (
    <ScrollViewWrapper>
      <BoxAtom flex={1} px={24}>
        <TextAtom variant="heading1">Create an Account</TextAtom>
        <BoxAtom flex={1} />
        <InputMolecules label="Phone Number" leftIconName="PhoneIcon" mb={16} />
        <TextAtom variant="extraLargeText" color="textFourth">
          An SMS May Be Sent To Your Phone.
        </TextAtom>
        <ButtonMolecules label="Continue" variant="primary" mt={40} mb={24} />
        <TextAtom variant="extraLargeText" color="textFourth">
          Already Have an Account?
        </TextAtom>
      </BoxAtom>
    </ScrollViewWrapper>
  );
};

export default Register;
