import React from 'react';
import { Pressable, Text } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { SquareButtonProps } from './squareButton.models';
import styles from './squareButton.styles';

const SquareButton: React.FC<SquareButtonProps> = ({
  label,
  onPress,
  disabled,
}) => {
  const sharedValue = useSharedValue(1);

  const grow = () => {
    sharedValue.value = withSpring(1);
  };

  const shrink = () => {
    sharedValue.value = withSpring(0);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      sharedValue.value,
      [1, 0],
      [1, 0.7],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      sharedValue.value,
      [1, 0],
      [1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        { opacity: disabled ? 0.6 : 1 },
      ]}>
      <Pressable
        onPressIn={shrink}
        onPressOut={grow}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default SquareButton;
