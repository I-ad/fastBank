import React from 'react';
import Scanner from 'react-native-rectangle-scanner';

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
  const timer: any = null;
  const cameraRef = React.useRef(null);

  const handleOnPictureProcessed = (...rest: any) => {
    console.log(rest);
  };

  const onRectangleDetected = (...rest: any) => {
    clearTimeout(timer);
    setTimeout(() => {
      console.log(rest);
    }, 1000);
  };

  return (
    <Scanner
      onPictureProcessed={handleOnPictureProcessed}
      onRectangleDetected={onRectangleDetected}
      ref={cameraRef}
      style={{flex: 1}}
    />
  );
};

export default ScanDocumentContainer;
