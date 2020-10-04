import React from 'react';
import {Circle, G, Path, Svg} from '../IconAtom/SvgProperties';

interface IconType {
  width?: number;
  color?: string;
  dataTestId?: string;
}

export const RadioChecked: React.FC<IconType> = ({
  color = '#000',
  width = 24,
}: IconType) => {
  const strokeRatio = (width / 24) * 1.6;
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24">
      <G fill="none" fillRule="evenodd">
        <Path fill="none" d="M0 0h24v24H0z" />
        <Circle
          stroke={color}
          strokeWidth={strokeRatio}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx={12}
          cy={12}
          r={8}
        />
        <Circle fill={color} cx={12} cy={12} r={4} />
      </G>
    </Svg>
  );
};

export const RadioUnchecked: React.FC<IconType> = ({
  color = '#000',
  width = 24,
}) => {
  const strokeRatio = (width / 24) * 1.6;
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24">
      <G fill="none" fillRule="evenodd">
        <Path fill="none" d="M0 0h24v24H0z" />
        <Circle
          stroke={color}
          strokeWidth={strokeRatio}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx={12}
          cy={12}
          r={8}
        />
      </G>
    </Svg>
  );
};
