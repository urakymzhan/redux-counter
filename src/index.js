import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './App';
import { Provider } from 'react-redux';
import store from './store';

// We wrap our app with Provider from react-redux
// then pass store values to our app so we can access it in our it

// const increment = () => {
//   return {
//     type: 'counter/increment'
//   }
// }

// store.dispatch({ type: 'INCREMENT' });

store.subscribe(() => {
  console.log('whenever store changed i get called', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
