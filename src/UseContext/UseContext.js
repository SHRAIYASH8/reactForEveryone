import React, { useState } from "react";
import FunContextComponent from "./FunContextComponent";
export const ThemeContext = React.createContext();
export default function UseContext() {
  const [darkTheme, setDarkTheme] = useState(false);
  function toogleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>Toogle Theme</button>
        <FunContextComponent />
      </ThemeContext.Provider>
    </>
  );
}