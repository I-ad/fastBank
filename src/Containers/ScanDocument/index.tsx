import React, {useState} from 'react';
import Scanner, {RectangleOverlay} from 'react-native-rectangle-scanner';

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

const ScanDocumentContainer: React.FC = () => {
  const cameraRef = React.useRef(null);
  const [detectedRectangle, setDetectedRectangle] = useState<any>(null);

  const handleOnPictureProcessed = (...rest: any) => {
    console.log(rest);
  };

  const onRectangleDetected = (items: {detectedRectangle: any}) => {
    setDetectedRectangle(items.detectedRectangle);
  };

  return (
    <Scanner
      onPictureProcessed={handleOnPictureProcessed}
      onRectangleDetected={onRectangleDetected}
      ref={cameraRef}
      style={{flex: 1}}>
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
    </Scanner>
  );
};

export default ScanDocumentContainer;
