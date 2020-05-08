import { createStore } from 'redux';
import myReducer from './reducers'

// Single store of our app
// we pass reducers to our store
const store = createStore(myReducer)

export default store;