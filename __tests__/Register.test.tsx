import 'jest-styled-components';
import {act} from '@testing-library/react-native';
import React from 'react';
import {RegisterContainer} from '../src/Containers';
import {fireEvent, render} from '../test-utils';

it('should render', () => {
  const {getByTestId, findByText} = render(<RegisterContainer />);
  const Button = getByTestId('button-atom-test-id');
  act(() => fireEvent.press(Button));
  const text = findByText('xxxx');
  expect(text).toBeDefined();
});
