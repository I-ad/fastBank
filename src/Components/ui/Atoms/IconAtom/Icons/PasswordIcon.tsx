import React from 'react';
import {IconType} from '../IconType';
import {Circle, G, Path, Rect, Svg} from '../SvgProperties';

const PasswordIcon: React.FC<IconType> = ({width = 24, color = '#C7D2D9'}) => (
  <Svg width={width} height={width} viewBox="0 0 24 24">
    <G fill="none" fillRule="evenodd">
      <Rect fill="none" fillRule="nonzero" width={24} height={24} rx={1} />
      <G
        strokeLinecap="square"
        transform="translate(3.2 3.2)"
        stroke={color}
        strokeWidth={1.6}>
        <Path d="M3.2 6.4v4.8M14.4 6.4v4.8M12.138 5.462l-6.675 6.675" />
        <Circle cx={3.2} cy={3.2} r={3.2} />
        <Circle cx={14.4} cy={3.2} r={3.2} />
        <Circle cx={3.2} cy={14.4} r={3.2} />
        <Circle cx={14.4} cy={14.4} r={3.2} />
      </G>
    </G>
  </Svg>
);

export default PasswordIcon;
