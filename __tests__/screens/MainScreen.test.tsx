/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from '../../src/screens/Main/mainScreen';

it('renders correctly', () => {
  renderer.create(<MainScreen />);
});
