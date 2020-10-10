import React from 'react';
import {IconType} from '../IconType';
import {Svg, G, Rect, Path, Circle} from '../SvgProperties';

const DoneIcon: React.FC<IconType> = ({width = 24, color = '#C7D2D9'}) => (
  <Svg width={width} height={width} viewBox="0 0 24 24">
    <G transform="translate(-326 -16)" fill="none" fillRule="evenodd">
      <Rect fill="#F7F9FB" width={366} height={56} rx={4} />
      <G transform="translate(326 16)">
        <Rect
          fillOpacity={0.01}
          fill="none"
          fillRule="nonzero"
          width={24}
          height={24}
          rx={1}
        />
        <G
          strokeLinecap="square"
          transform="translate(3.2 3.2)"
          stroke={color}
          strokeWidth={2}>
          <Path d="M4 8.8L7.2 12l6.4-6.4" />
          <Circle cx={8.8} cy={8.8} r={8.8} />
        </G>
      </G>
    </G>
  </Svg>
);

export default DoneIcon;
