/**
 * @format
 */

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import SquareButton from '../../src/components/SquareButton/squareButton';
import { SquareButtonProps } from '../../src/components/SquareButton/squareButton.models';

const props: SquareButtonProps = {
  label: 'Submit',
  onPress: () => {},
  disabled: false,
};

it('renders correctly', () => {
  renderer.create(<SquareButton {...props} />);
});
