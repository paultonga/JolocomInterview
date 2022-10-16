import Animated from 'react-native-reanimated';

export interface HeaderProps {
  title: string;
  sharedValue: Animated.SharedValue<number>;
}
