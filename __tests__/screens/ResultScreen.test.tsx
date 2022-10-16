/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ResultScreen from '../../src/screens/Result/resultScreen';
import { ResultScreenProps } from '../../src/screens/Result/resultScreen.models';

const props: ResultScreenProps = {
  isSuccess: false,
  onStartOver: () => {},
  windowHeight: 200,
};
it('renders correctly', () => {
  renderer.create(<ResultScreen {...props} />);
});
