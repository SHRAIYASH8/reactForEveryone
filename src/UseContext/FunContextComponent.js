import { useContext } from "react";
import { ThemeContext } from "./UseContext";

function FunContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2em",
    margin: "2em",
  };
  return (
    <>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}

export default FunContextComponent;
