import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {TextAtom} from '../../Atoms/TextAtom';

interface IProps {
  isActive: boolean;
  left: number;
  label?: string;
  labelBackground?: string;
  containerHeight: number;
  barHeight?: number;
  isFocus: boolean;
  hasError: boolean;
}

const FloatingLabel: React.FC<IProps> = ({
  label,
  isActive,
  containerHeight,
  left,
  isFocus,
  hasError,
}: IProps) => {
  const labelPosition = useRef(new Animated.Value(isActive ? 1 : 0)).current;
  const [HEIGHT, SET_HEIGHT] = useState(0);
  const [WIDTH, SET_WIDTH] = useState(0);
  const [weight, setWeight] = useState('normal');
  useEffect(() => {
    Animated.timing(labelPosition, {
      toValue: isActive ? 1 : 0,
      duration: 260,
      easing: Easing.exp,
      useNativeDriver: true,
      delay: 0,
    }).start(() => {
      setWeight(isActive ? 'bold' : 'normal');
    });
  }, [isActive, labelPosition]);
  const translateY = labelPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [containerHeight / 2 - HEIGHT / 2, -HEIGHT / 2],
  });
  const translateX = labelPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [left, 16],
  });
  const translateXFirstOrigin = labelPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [-2, -1 * (WIDTH / 2) - 2],
  });
  const translateXSecondOrigin = labelPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [-2, WIDTH / 2 - 2],
  });
  const scale = labelPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const onLayout = (e: any) => {
    SET_HEIGHT(e.nativeEvent.layout.height);
    SET_WIDTH(e.nativeEvent.layout.width);
  };
  return (
    <Animated.View
      onLayout={onLayout}
      pointerEvents="none"
      style={{
        position: 'absolute',
        transform: [
          {translateY},
          {translateX},
          {translateX: translateXFirstOrigin},
          {scale},
          {translateX: translateXSecondOrigin},
        ],
        zIndex: 4,
        top: 0,
        left: 0,
        paddingLeft: 4,
        paddingRight: 4,
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: HEIGHT / 2,
          bottom: 0,
          backgroundColor: '#FFF',
          opacity: labelPosition,
        }}
      />
      <TextAtom
        fontSize={16}
        variant="label"
        color={hasError ? 'danger' : isFocus ? 'focus' : ''}
        fontWeight={weight}>
        {label}
      </TextAtom>
    </Animated.View>
  );
};

FloatingLabel.displayName = 'FloatingLabel';

export default FloatingLabel;
