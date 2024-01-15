import React from "react";
import "./ItemDate.css";
const ItemDate = (props) => {
  return (
    <div className="date">
      <div>{props.day}</div>
      <div>{props.month}</div>
      <div>{props.year}</div>
    </div>
  );
};

export default ItemDate;
