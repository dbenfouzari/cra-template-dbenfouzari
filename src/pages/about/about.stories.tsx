import React from 'react';
import About from './about';
import { Provider } from 'react-redux';
import store from 'modules/store';

export default {
  title: 'Pages/About',
  component: About,
};

export const Default = () => (
  <Provider store={store}>
    <About />
  </Provider>
);
