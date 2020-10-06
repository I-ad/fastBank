import React from 'react';
import {BoxAtom} from '../../Components/ui/Atoms/BoxAtom';
import {TextAtom} from '../../Components/ui/Atoms/TextAtom';

type IProps = {
  value: string | undefined;
};

const NumberHolder: React.FC<IProps> = ({value}) => {
  return (
    <BoxAtom
      bg="backgroundThird"
      width={46}
      height={56}
      borderRadius={2}
      justifyContent="center"
      alignItems="center">
      {value && (
        <TextAtom variant="heading3" fontWeight="semiBold" color="textSecond">
          {value}
        </TextAtom>
      )}
    </BoxAtom>
  );
};

export default NumberHolder;
