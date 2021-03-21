import "../App.css";
import React, { useState, useEffect } from "react";

function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [itmes, setItems] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const windowResized = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    window.addEventListener("resize", windowResized);
    return () => {
      window.removeEventListener("resize", windowResized);
      console.log("unmounting");
    };
  }, [resourceType]);
  return (
    <>
      <div className="App">
        <buton className="buttons" onClick={() => setResourceType("posts")}>
          Posts
        </buton>
        <buton className="buttons" onClick={() => setResourceType("users")}>
          Users
        </buton>
        <buton className="buttons" onClick={() => setResourceType("comments")}>
          Comments
        </buton>
      </div>
      <h1>
        {resourceType} : {windowSize}
      </h1>
      {itmes.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default UseEffect;
