import { combineReducers } from 'redux';
import counter from './counter';
import { configureStore } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  counter,
});

const store = configureStore({ reducer });

export default store;
