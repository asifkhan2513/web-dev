import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          border: "2px solid red",
          color: "white",
          backgroundColor: "blue",
          padding: "5px",
          borderRadius: "10%",
        }}
        onClick={() => {
          dispatch(increament());
        }}
      >
        Increament
      </button>{" "}
      <br></br>
      <br></br>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "600",
          color: "black",
        }}
      >
        {count}
      </div>
      <br></br>
      <br></br>
      <button
        style={{
          border: "2px solid red",
          color: "white",
          backgroundColor: "blue",
          padding: "5px",
          borderRadius: "10%",
        }}
        onClick={() => {
          dispatch(decreament());
        }}
      >
        Decreament
      </button>
    </div>
  );
};

export default Counter;
