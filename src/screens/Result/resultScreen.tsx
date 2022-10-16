import React from 'react';
import { Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Strings from '../../constants/strings';
import { usePallette } from '../../utils/colors';
import { ResultScreenProps } from './resultScreen.models';
import styles from './resultScreen.styles';

const ResultScreen: React.FC<ResultScreenProps> = ({
  onStartOver,
  windowHeight,
  isSuccess,
}) => {
  const { colors } = usePallette();

  return (
    <View
      style={[
        styles.container,
        { height: windowHeight, backgroundColor: colors.background },
      ]}>
      <Text style={[styles.title, { color: colors.primaryText }]}>
        {isSuccess ? Strings.SUCCESS_HEADER : Strings.FAILURE_HEADER}
      </Text>
      <Icon
        color={colors.primaryText}
        name={isSuccess ? 'check' : 'x'}
        size={70}
        style={styles.icon}
      />
      <Text style={[styles.subtitle, { color: colors.primaryText }]}>
        {Strings.LOREM}
      </Text>

      <Pressable onPress={onStartOver} style={styles.button}>
        <Text style={[styles.buttonText, { color: colors.primaryText }]}>
          Start over
        </Text>
      </Pressable>
    </View>
  );
};

export default ResultScreen;
