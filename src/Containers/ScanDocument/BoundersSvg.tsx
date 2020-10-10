import React from 'react';
import {
  G,
  Path,
  Svg,
  Circle,
} from '../../Components/ui/Atoms/IconAtom/SvgProperties';

export const BoundersSvg: React.FC<{width?: number}> = ({width = 372}) => {
  const ratio = 251 / 372;
  return (
    <Svg width={width} height={width * ratio} viewBox="0 0 372 251">
      <G fill="none" fillRule="evenodd">
        <Path
          d="M35 2.5a2.5 2.5 0 01.164 4.995L35 7.5H21c-7.352 0-13.332 5.877-13.497 13.19L7.5 21v14a2.5 2.5 0 01-4.995.164L2.5 35V21c0-10.105 8.102-18.318 18.164-18.497L21 2.5h14z"
          fillOpacity={0.04}
          fill="#000"
          fillRule="nonzero"
        />
        <Path
          d="M33 .5a2.5 2.5 0 01.164 4.995L33 5.5H19c-7.352 0-13.332 5.877-13.497 13.19L5.5 19v14a2.5 2.5 0 01-4.995.164L.5 33V19C.5 8.895 8.602.682 18.664.503L19 .5h14zM3 215.5a2.5 2.5 0 012.495 2.336L5.5 218v14c0 7.352 5.877 13.332 13.19 13.497l.31.003h14a2.5 2.5 0 01.164 4.995L33 250.5H19C8.895 250.5.682 242.398.503 232.336L.5 232v-14a2.5 2.5 0 012.5-2.5z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M5 213.5a2.5 2.5 0 012.495 2.336L7.5 216v14c0 7.352 5.877 13.332 13.19 13.497l.31.003h14a2.5 2.5 0 01.164 4.995L35 248.5H21c-10.105 0-18.318-8.102-18.497-18.164L2.5 230v-14a2.5 2.5 0 012.5-2.5z"
          fillOpacity={0.04}
          fill="#000"
          fillRule="nonzero"
        />
        <Path
          d="M353 .5c10.105 0 18.318 8.102 18.497 18.164l.003.336v14a2.5 2.5 0 01-4.995.164L366.5 33V19c0-7.352-5.877-13.332-13.19-13.497L353 5.5h-14a2.5 2.5 0 01-.164-4.995L339 .5h14z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M351 2.5c10.105 0 18.318 8.102 18.497 18.164l.003.336v14a2.5 2.5 0 01-4.995.164L364.5 35V21c0-7.352-5.877-13.332-13.19-13.497L351 7.5h-14a2.5 2.5 0 01-.164-4.995L337 2.5h14z"
          fillOpacity={0.04}
          fill="#000"
          fillRule="nonzero"
        />
        <Circle
          strokeOpacity={0.3}
          stroke="#FFF"
          strokeWidth={4}
          cx={186}
          cy={135}
          r={6}
        />
        <Path
          d="M369 215.5a2.5 2.5 0 012.495 2.336l.005.164v14c0 10.105-8.102 18.318-18.164 18.497l-.336.003h-14a2.5 2.5 0 01-.164-4.995l.164-.005h14c7.352 0 13.332-5.877 13.497-13.19l.003-.31v-14a2.5 2.5 0 012.5-2.5z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M367 213.5a2.5 2.5 0 012.495 2.336l.005.164v14c0 10.105-8.102 18.318-18.164 18.497l-.336.003h-14a2.5 2.5 0 01-.164-4.995l.164-.005h14c7.352 0 13.332-5.877 13.497-13.19l.003-.31v-14a2.5 2.5 0 012.5-2.5z"
          fillOpacity={0.04}
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
};