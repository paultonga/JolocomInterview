import { render, screen, fireEvent } from '@testing-library/react-native';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from '../../src/screens/Main/mainScreen';

it('renders correctly', () => {
  renderer.create(<MainScreen />);
});

it('displays AddInfo screen', () => {
  const { getByTestId } = render(<MainScreen />);

  const container = getByTestId('add-info-screen');

  expect(container).toBeTruthy();
});
