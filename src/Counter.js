import React, { Component } from "react";
import { connect } from "react-redux";
import { minus, plus } from "./redux/actions";
import fetchUser from "./thunk/asyncActionCreater";

class Counter extends Component {
  render() {
    return (
      <>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.plusOne}>+</button>
        <button onClick={this.props.minusOne}>-</button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count,
  };
};
const mapDispatchToProps = (dispatch) => ({
  plusOne: () => {
    dispatch(plus());
  },
  minusOne: () => {
    dispatch(minus());
    dispatch(fetchUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
