import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import Scanner, {
  DetectedRectangle,
  RectangleOverlay,
} from 'react-native-rectangle-scanner';
import {BoxAtom} from '../../Components/ui/Atoms/BoxAtom';
import {TextAtom} from '../../Components/ui/Atoms/TextAtom';
import {BoundersSvg} from './BoundersSvg';

// 0
// :
// detectedRectangle:
//     bottomLeft: {
//       y: 362.9134216308594, x
//     :
//       633.9171752929688
//     }
// bottomRight: {
//   y: 703.4518432617188, x
// :
//   639.4783935546875
// }

// dimensions: {
//   width: 696, height:1504
// }

// topLeft: {
//   y: 374.81585693359375, x
// :
//   470.8850402832031
// }
// topRight: {
//   y: 715.354248046875, x
// :
//   476.4462585449219
// }
// __proto__: Object
// target: 787

type Rectangle = {
  detectedRectangle: {
    topLeft: {
      x: number;
      y: number;
    };
    topRight: {
      x: number;
      y: number;
    };
    bottomRight: {
      x: number;
      y: number;
    };
    bottomLeft: {
      x: number;
      y: number;
    };
  };
};

const ScanDocumentContainer: React.FC = () => {
  const cameraRef = React.useRef(null);
  const [detectedRectangle, setDetectedRectangle] = useState<any>(null);
  const [card, setCard] = useState({width: 0, height: 0});

  const handleOnPictureProcessed = (...rest: any) => {
    console.log(rest);
  };

  const onRectangleDetected = (items: {
    detectedRectangle: DetectedRectangle;
  }) => {
    setDetectedRectangle(items.detectedRectangle);
    if (items && items.detectedRectangle) {
      const {topLeft, topRight, bottomLeft} = items.detectedRectangle;
      const dimensions = Dimensions.get('window');
      const width = topRight.x - topLeft.x;
      const height = bottomLeft.y - topLeft.y;
      if (dimensions.height > dimensions.width) {
        // Portrait
      } else {
        setCard({
          width,
          height,
        });
      }
    }
  };

  return (
    <BoxAtom flex={1} position="relative">
      <Scanner
        onPictureProcessed={handleOnPictureProcessed}
        onRectangleDetected={onRectangleDetected}
        ref={cameraRef}
        style={{flex: 1}}
        enableTorch={true}
      />
      <RectangleOverlay
        detectedRectangle={detectedRectangle}
        backgroundColor="rgba(255,181,6, 0.2)"
        borderColor="rgb(255,181,6)"
        borderWidth={4}
        detectedBackgroundColor="rgba(255,181,6, 0.3)"
        detectedBorderWidth={6}
        detectedBorderColor="rgb(255,218,124)"
        allowDetection={true}
      />
      <BoxAtom position="absolute" top={0} left={0} right={0} bottom={0}>
        <BoxAtom alignSelf="center" mt={140}>
          <BoundersSvg />
        </BoxAtom>
        <TextAtom
          variant="heading2"
          color="#FFF">{`width: ${card.width}`}</TextAtom>
        <TextAtom
          variant="heading2"
          color="#FFF">{`height: ${card.height}`}</TextAtom>
      </BoxAtom>
    </BoxAtom>
  );
};

export default ScanDocumentContainer;
