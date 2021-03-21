import React from "react";
import "../App.css";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./UseCustomContext";

function AppContext() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}

export default AppContext;
