import React from 'react';
import {IconType} from '../IconType';
import {Circle, G, Path, Rect, Svg} from '../SvgProperties';

const PhoneIcon: React.FC<IconType> = ({width = 24, color = '#C7D2D9'}) => (
  <Svg width={width} height={width} viewBox="0 0 24 24">
    <G fill="none" fillRule="evenodd">
      <Rect fill="#FFF" fillRule="nonzero" width={24} height={24} rx={1} />
      <G
        strokeLinecap="square"
        transform="translate(5.6 3.2)"
        stroke={color}
        strokeWidth={1.6}>
        <Path d="M11.2 17.6H1.6A1.6 1.6 0 010 16V1.6A1.6 1.6 0 011.6 0h9.6a1.6 1.6 0 011.6 1.6V16a1.6 1.6 0 01-1.6 1.6z" />
        <Circle cx={3.2} cy={3.2} r={1} />
      </G>
    </G>
  </Svg>
);

export default PhoneIcon;
