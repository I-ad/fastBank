import React from 'react';
import {IconType} from '../IconType';
import {Svg, G, Rect, Path} from '../SvgProperties';

const EmailIcon: React.FC<IconType> = ({width = 24, color = '#C7D2D9'}) => (
  <Svg width={width} height={width} viewBox="0 0 24 24">
    <G fill="none" fillRule="evenodd">
      <Rect fill="none" fillRule="nonzero" width={24} height={24} rx={1} />
      <G
        strokeLinecap="square"
        transform="translate(3.2 4.8)"
        stroke={color}
        strokeWidth={1.6}>
        <Path d="M14.4 3.2L8.8 8.8 3.2 3.2" />
        <Rect width={17.6} height={14.4} rx={2} />
        <Path d="M4.8 9.6l-1.6 1.6M12.8 9.6l1.6 1.6" />
      </G>
    </G>
  </Svg>
);

export default EmailIcon;
