import "../App.css";
import React, { useState, useMemo, useEffect } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);
  return (
    <>
      <div className="App">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </>
  );
}

function slowFunction(num) {
  console.log("slow function called start");
  for (let i = 0; i < 10; i++) {}
  console.log("slow function called end");
  return num * 2;
}

export default UseMemo;
