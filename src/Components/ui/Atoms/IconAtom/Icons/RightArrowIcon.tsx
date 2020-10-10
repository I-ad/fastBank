import React from 'react';
import {IconType} from '../IconType';
import {G, Path, Rect, Svg} from '../SvgProperties';

const RightArrowIcon: React.FC<IconType> = ({
  width = 24,
  color = '#C7D2D9',
}) => (
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
        <Path
          strokeLinecap="round"
          d="M10 8l4 4-4 4"
          stroke={color}
          strokeWidth={1.8}
        />
      </G>
    </G>
  </Svg>
);

export default RightArrowIcon;
