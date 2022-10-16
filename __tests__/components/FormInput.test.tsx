/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { FormInput } from '../../src/components/FormInput/formInput';
import { FormInputProps } from '../../src/components/FormInput/formInput.models';

const props: FormInputProps = {
  error: '',
};

it('renders correctly', () => {
  renderer.create(<FormInput {...props} />);
});
