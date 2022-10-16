import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { HeaderProps } from './header.models';
import styles from './header.styles';

const Header: React.FC<HeaderProps> = ({ title, sharedValue }) => {
  const inputRange = [0, 1];

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      sharedValue.value,
      inputRange,
      [0, 1],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      sharedValue.value,
      inputRange,
      [0, 1],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      sharedValue.value,
      inputRange,
      [0, 1],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[styles.headerContainer, animatedHeaderStyle]}>
      <Animated.Text style={[styles.headerText, animatedTextStyle]}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

export default Header;
