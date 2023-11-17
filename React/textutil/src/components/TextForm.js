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
  const handleCopyClick = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleExtraClick = () => {
    let newText = text.split(/ [ ]+ /);
    setText(newText.join(" "));
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
          <label htmlFor="mybox" className="form-label"></label>
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
        <button className="btn btn-warning lower" onClick={handleLocaleClick}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-danger clear"
          id="copy"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button className="btn btn-primary mx-5" onClick={handleExtraClick}>
          Remove Extra Space
        </button>
        <button className="btn btn-danger clear" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1 className="underline"> Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.trim().length} Characters
        </p>
        <hr></hr>
        <h5>Avarage time To Read This Sentence </h5>
        <br></br>
        {0.008 * text.split(" ").length} Minutes Read
        <hr></hr>
        <h3> Preview </h3>
        <pre>{text}</pre>
        <hr></hr>
      </div>
    </>
  );
}
