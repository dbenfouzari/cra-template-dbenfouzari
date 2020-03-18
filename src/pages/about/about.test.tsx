import React from 'react';
import { render } from '@testing-library/react';
import About from './about';

test('renders learn react link', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
