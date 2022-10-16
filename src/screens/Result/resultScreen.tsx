import React from 'react';
import { Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Strings from '../../constants/strings';
import styles from './resultScreen.styles';

Icon.loadFont();

const ResultScreen: React.FC<ResultScreenProps> = ({
  onStartOver,
  windowHeight,
  isSuccess,
}) => {
  return (
    <View style={[styles.container, { height: windowHeight }]}>
      <Text style={styles.title}>
        {isSuccess ? Strings.SUCCESS_HEADER : Strings.FAILURE_HEADER}
      </Text>
      <Icon name={isSuccess ? 'check' : 'x'} size={70} style={styles.icon} />
      <Text style={styles.subtitle}>{Strings.LOREM}</Text>

      <Pressable onPress={onStartOver} style={styles.button}>
        <Text style={styles.buttonText}>Start over</Text>
      </Pressable>
    </View>
  );
};

export default ResultScreen;
