import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './App';
import { Provider } from 'react-redux';
import store from './store';

// We wrapp our app with Provider from react-redux 
// then pass store values to our app so we can access it in our it
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);



