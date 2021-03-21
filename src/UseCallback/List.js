import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //for useMemo case - setItems(getItems);
    setItems(getItems(4));
    console.log("useeffect");
    return () => {
      console.log("cleanup");
    };
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
}
