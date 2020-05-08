import React from 'react';
import './App.css';
import { increment, decrement } from './actions';
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  
  const count = useSelector(state => state.count);
  const dispatch = useDispatch()

    return (
      <div className="counter">
        <h1>Counter</h1>
        <button onClick={() => dispatch(decrement(count))}>-</button>
        <span className="count">{count}</span>
        <button onClick={() => dispatch(increment(count))}>+</button>
      </div>
    );
}

export default Counter;


