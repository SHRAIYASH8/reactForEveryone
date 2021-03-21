import "../App.css";
import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("Yellow");
  const [state, setState] = useState({ height: 10, width: 20 });
  const height = state.height;
  const width = state.width;
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
    setState((prevState) => {
      return { ...prevState, height: prevState.height + 1 };
    });
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme("green");
    setState((prevState) => {
      return { ...prevState, width: prevState.width - 1 };
    });
  };
  return (
    <>
      <div className="App">
        <button onClick={incrementCount}>+</button>
        <div>
          {count} - {theme} - {height} - {width}
        </div>
        <button onClick={decrementCount}>-</button>
      </div>
    </>
  );
}

export default UseState;
