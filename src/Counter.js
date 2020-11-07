import React, { Component } from "react";
import { connect } from "react-redux";
import { minus, plus } from "./redux/actions";

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
const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = (dispatch) => ({
  plusOne: () => {
    dispatch(plus());
  },
  minusOne: () => {
    dispatch(minus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
