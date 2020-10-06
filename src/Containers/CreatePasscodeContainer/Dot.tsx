import React from 'react';
import {BoxAtom} from '../../Components/ui/Atoms/BoxAtom';

type IProps = {
  isActive: boolean;
};

const Dot: React.FC<IProps> = ({isActive}) => {
  return (
    <BoxAtom
      size={14}
      bg={isActive ? 'primaryFirst' : 'backgroundSecond'}
      borderRadius={24}
      ml={24}
      mr={12}
    />
  );
};

export default Dot;
