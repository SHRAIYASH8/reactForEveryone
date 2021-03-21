import "../App.css";
import React, { useState, useReducer } from "react";
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "increment":
      return state;
  }
}
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const incrementCount = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrementCount = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <>
      <div className="App">
        <button onClick={incrementCount}>+</button>
        <div>{state.count}</div>
        <button onClick={decrementCount}>-</button>
      </div>
    </>
  );
}
// concerate way to handle copmplex state
export default UseReducer;
