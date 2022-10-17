import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import AddInfoScreen from '../../src/screens/AddInfo/addInfoScreen';
import renderer, { act } from 'react-test-renderer';
import { AddInfoScreenProps } from '../../src/screens/AddInfo/addInfoScreen.models';

describe('AddInfoScreen', () => {
  const props: AddInfoScreenProps = {
    title: 'Title',
    description: 'description',
    onSubmitForm: jest.fn(),
    windowHeight: 200,
  };

  it('renders correctly', () => {
    renderer.create(<AddInfoScreen {...props} />);
  });

  it('form does not submit empty data', () => {
    const mockFn = jest.fn();

    render(
      <AddInfoScreen
        title="title"
        description="description"
        windowHeight={700}
        onSubmitForm={mockFn}
      />,
    );

    act(() => {
      fireEvent.press(screen.getByText('Submit'));
    });

    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
