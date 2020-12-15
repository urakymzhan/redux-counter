import { createStore } from 'redux';
// if use redux-toolkit
// import { configureStore } from '@reduxjs/toolkit'
import myReducer from './reducers';

// Single store of our app
// we pass reducers to our store

// eslint is disabling underscores ( _ )
/* eslint-disable no-underscore-dangle */
const store = createStore(
  myReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
