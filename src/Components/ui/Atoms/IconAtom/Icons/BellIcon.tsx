import React from 'react';
import {IconType} from '../IconType';
import {Svg, G, Path} from '../SvgProperties';

const BellIcon: React.FC<IconType> = ({width = 12, color = '#6C727A'}) => (
  <Svg width={width} height={width * 1.333} viewBox="0 0 12 16">
    <G fill={color} fillRule="nonzero">
      <Path d="M11.73 11.828a8.74 8.74 0 0 1-1.096-4.152V5.124c0-2.828-2.116-5.12-4.726-5.12s-4.726 2.292-4.726 5.12v2.548a8.741 8.741 0 0 1-1.096 4.156.686.686 0 0 0-.01.646.585.585 0 0 0 .515.326h10.634c.213 0 .41-.125.514-.326a.686.686 0 0 0-.01-.646zM6.503 15.248a1.852 1.852 0 0 0 1.074-1.164H4.238c.158.48.485.872.91 1.09.424.218.912.245 1.355.074z" />
    </G>
  </Svg>
);

export default BellIcon;
