import React from 'react';
import {Svg, G, Path, Rect} from '../IconAtom/SvgProperties';

interface IconType {
  width?: number;
  color?: string;
  dataTestId?: string;
}

export const CheckboxChecked: React.FC<IconType> = ({
  color = '#000',
  width = 24,
}: IconType) => (
  <Svg width={width} height={width} viewBox="0 0 24 24">
    <G fillRule="nonzero" fill="none">
      <Rect fill="none" width={24} height={24} rx={1} />
      <Path
        d="M19.273 4H4.727A.727.727 0 0 0 4 4.727v14.546c0 .401.326.727.727.727h14.546a.727.727 0 0 0 .727-.727V4.727A.727.727 0 0 0 19.273 4zM10.58 15.973l-3.246-3.246L8.364 11.7l2.146 2.146 5.058-5.78 1.095.958-6.082 6.95z"
        fill={color}
      />
    </G>
  </Svg>
);

export const CheckboxUnchecked: React.FC<IconType> = ({
  color = '#000',
  width = 24,
}) => {
  const strokeRatio = (width / 24) * 1.6;
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24">
      <G fill="none" fillRule="evenodd">
        <Rect fill="none" fillRule="nonzero" width={24} height={24} rx={1} />
        <Path
          d="M4 4h16v16H4z"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={color}
          strokeWidth={strokeRatio}
        />
      </G>
    </Svg>
  );
};

export const CheckboxIndeterminate: React.FC<IconType> = ({
  color = '#000',
  width = 24,
}) => (
  <Svg width={width} height={width}>
    <G fillRule="nonzero" fill="none">
      <Rect fill="none" width={24} height={24} rx={1} />
      <Path
        d="M19.273 4H4.727A.727.727 0 0 0 4 4.727v14.546c0 .401.326.727.727.727h14.546a.727.727 0 0 0 .727-.727V4.727A.727.727 0 0 0 19.273 4zM8 11h8v2H8v-2z"
        fill={color}
      />
    </G>
  </Svg>
);
