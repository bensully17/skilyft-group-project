import React from 'react';
import MtnPicker from '../components/Picker/MtnPicker';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<MtnPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});