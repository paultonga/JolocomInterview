import React from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';
import ResultScreen from '../Result/resultScreen';
import Strings from '../../constants/strings';
import AddInfoScreen from '../AddInfo/addInfoScreen';
import { generateRandomBool } from '../../utils';

const MainScreen = () => {
  const window = useWindowDimensions();
  const scrollRef = useAnimatedRef<ScrollView>();

  const [formVisible, setFormVisible] = React.useState(true);
  const [success, setSuccess] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    scrollRef?.current?.scrollTo({
      y: formVisible ? window.height : 0,
      animated: true,
    });

    setFormVisible(!formVisible);
  }, [formVisible, scrollRef, window.height]);

  const submitForm = React.useCallback(async () => {
    const isSuccess = await generateRandomBool();
    setSuccess(isSuccess);

    handleScroll();
  }, [handleScroll]);

  return (
    <ScrollView ref={scrollRef} scrollEnabled={false}>
      <AddInfoScreen
        title={Strings.ADD_INFO_HEADER}
        description={Strings.ADD_INFO_DESCRIPTION}
        onSubmitForm={submitForm}
        windowHeight={window.height}
      />

      <ResultScreen
        windowHeight={window.height}
        onStartOver={handleScroll}
        isSuccess={success}
      />
    </ScrollView>
  );
};

export default MainScreen;
