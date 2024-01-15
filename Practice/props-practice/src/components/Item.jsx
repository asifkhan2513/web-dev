import React from "react";
import "./Item.css";
// import App from "../App";
const Item = (props) => {
  return (
    <div>
      <p className="nirma">{props.name}</p>
    </div>
  );
};

export default Item;
