import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import ResultScreen from '../Result/resultScreen';
import Strings from '../../constants/strings';
import AddInfoScreen from '../AddInfo/addInfoScreen';
import { generateRandomBool } from '../../utils';
import styles from './mainScreen.styles';

const MainScreen = () => {
  const sharedValue = useSharedValue(0);
  const [offset, setOffset] = React.useState(0);

  const [formVisible, setFormVisible] = React.useState(true);
  const [success, setSuccess] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    sharedValue.value = withSpring(formVisible ? -offset : 0);

    setFormVisible(!formVisible);
  }, [formVisible, offset, sharedValue]);

  const submitForm = React.useCallback(async () => {
    const isSuccess = await generateRandomBool();
    setSuccess(isSuccess);

    handleScroll();
  }, [handleScroll]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(sharedValue.value, {
            duration: 200,
            easing: Easing.linear,
          }),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <AddInfoScreen
        title={Strings.ADD_INFO_HEADER}
        description={Strings.ADD_INFO_DESCRIPTION}
        onSubmitForm={submitForm}
      />

      <ResultScreen
        setOffset={(_offset: number) => setOffset(_offset)}
        onStartOver={handleScroll}
        isSuccess={success}
      />
    </Animated.View>
  );
};

export default MainScreen;
