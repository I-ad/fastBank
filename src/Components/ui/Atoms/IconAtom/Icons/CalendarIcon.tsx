import React from 'react';
import {IconType} from '../IconType';
import {Svg, G, Path, Rect} from '../SvgProperties';

const CalendarIcon: React.FC<IconType> = ({width = 24, color = '#B4C0C8'}) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24">
      <G>
        <Rect fill="#FFF" fillRule="nonzero" width={24} height={24} rx={1} />
        <G
          strokeLinecap="square"
          transform="translate(3.2 3.2)"
          stroke={color}
          strokeWidth={1.6}>
          <Path d="M0 5.6h17.6" />
          <Rect y={1.6} width={17.6} height={15.2} rx={2} />
          <Path d="M4 0v2.4M13.6 0v2.4" />
        </G>
      </G>
    </Svg>
  );
};

export default CalendarIcon;
