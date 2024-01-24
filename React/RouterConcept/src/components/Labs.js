import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate;

  function clickHandler() {
    navigate("/about");
  }
  return (
    <div>
      <p>This is Lab Page</p>
      <button onClick={clickHandler}>Move to AboutPage</button>
    </div>
  );
};

export default Labs;
