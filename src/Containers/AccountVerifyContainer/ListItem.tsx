import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {BoxAtom} from '../../Components/ui/Atoms/BoxAtom';
import {IconAtom} from '../../Components/ui/Atoms/IconAtom';
import {TextAtom} from '../../Components/ui/Atoms/TextAtom';

type IProps = {
  title: string;
  checked: boolean;
  onClick?(): void;
};

const ListItem: React.FC<IProps> = ({title, checked, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick} disabled={checked}>
      <BoxAtom
        height={56}
        mx={4}
        bg="backgroundThird"
        px={3}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}>
        <TextAtom variant="largeText" color="textSecond">
          {title}
        </TextAtom>
        {checked ? (
          <IconAtom name="DoneIcon" color="success" />
        ) : (
          <IconAtom name="RightArrowIcon" color="textThird" />
        )}
      </BoxAtom>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;
