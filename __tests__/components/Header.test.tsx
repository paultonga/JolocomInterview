/**
 * @format
 */

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Header from '../../src/components/Header/header';
import { HeaderProps } from '../../src/components/Header/header.models';

const props: HeaderProps = {
  title: 'Header',
  sharedValue: { value: 0 },
};

it('renders correctly', () => {
  renderer.create(<Header {...props} />);
});
