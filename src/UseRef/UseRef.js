import "../App.css";
import React, { useState, useRef, useEffect } from "react";
function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const innerRef = useRef();
  const prevName = useRef("");
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);
  const focus = () => {
    innerRef.current.focus();
    innerRef.current.value = "shraiyash";
  };
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <>
      <div className="App">
        <input
          ref={innerRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          My Name is {name} and it used to be {prevName.current}
        </div>
        <div>I render {renderCount.current} times</div>
        <button onClick={focus}>focus</button>
      </div>
    </>
  );
}

export default UseRef;

//use to have access to DOM element
//use to have access to last value
//counter for page mounting
