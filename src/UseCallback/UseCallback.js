import "../App.css";
import React, { useState, useCallback } from "react";
import List from "./List";
export default function UseCallback() {
  const [number, setNumber] = React.useState(1);
  const [dark, setDark] = React.useState(true);
  //for useMemo case - const getItems = useMemo(() => {
  const getItems = useCallback(
    (i) => {
      return [number + i, number + i + 1, number + i + 2];
    },
    [number]
  );
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toogle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}
