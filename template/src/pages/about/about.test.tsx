import React from 'react';
import { render } from '@testing-library/react';
import About from './about';
import { Provider } from 'react-redux';
import store from 'modules/store';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <About />
    </Provider>,
  );
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
