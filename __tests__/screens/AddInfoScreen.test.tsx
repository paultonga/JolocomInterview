/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddInfoScreen from '../../src/screens/AddInfo/addInfoScreen';
import renderer from 'react-test-renderer';
import { AddInfoScreenProps } from '../../src/screens/AddInfo/addInfoScreen.models';

const props: AddInfoScreenProps = {
  title: 'Title',
  description: 'description',
  onSubmitForm: () => {},
  windowHeight: 200,
};
it('renders correctly', () => {
  renderer.create(<AddInfoScreen {...props} />);
});
