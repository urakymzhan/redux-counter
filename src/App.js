import React from 'react';
import './App.css';
// redux imports
import { connect } from 'react-redux';
import { increment, decrement } from './actions';
// import store from './store';
class Counter extends React.Component {
  // we moved out our state to redux
  render() {
    // console.log(store.getState());
    console.log(this.props);
    const { count, dispatch } = this.props;
    // if used Ex: 2
    // const { count, increment, decrement } = this.props;

    return (
      <div className="counter">
        <h1>Counter</h1>
        {/* this is up to engineer how to use. Dispatch it or desctructure action creators right away and use it */}
        {/* Ex:1 */}
        <button onClick={() => dispatch(decrement(count))}>-</button>
        <span className="count">{count}</span>
        <button onClick={() => dispatch(increment(count))}>+</button>
        {/* Ex: 2 */}
        {/* <button onClick={() => decrement(count)}>-</button>
        <span className="count">{count}</span>
        <button onClick={() => increment(count)}>+</button> */}
      </div>
    );
  }
}
//  its maps our redux store state to component and pass it as props
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);

// if use Ex: 2
// export default connect(mapStateToProps, {increment, decrement})(Counter);
