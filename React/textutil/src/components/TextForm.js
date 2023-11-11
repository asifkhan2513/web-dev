import React, { useState } from "react";
import "./TextForm.css";
export default function TextForm(props) {
  const handleUpClick = () => {
    // let newText = text.toUpperCase();
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLocaleClick = () => {
    let newLocale = text.toLowerCase();
    setText(newLocale);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className="container">
        {/* <h1> {props.heading}</h1> */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <lable htmlFor="mybox" class="form-label"></lable>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary lower" onClick={handleLocaleClick}>
          Convert To LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h1 className="underline"> Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.trim().length} Character
        </p>
        <hr></hr>
        <h5>Avarage time To Read This Sentence </h5>
        <br></br>
        {(0.009 * text.split(" ").length).toFixed(2)} Minuts
        <hr></hr>
        <h3> Preview </h3>
        <pre>{text}</pre>
        <hr></hr>
      </div>
    </>
  );
}
