// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import "./App.css";
import React, { useState } from "react";

import TextForm from "./components/TextForm";
// import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import Aboutus from "./components/Aboutus";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroudColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroudColor = "white";
    }
  };
  return (
    <>
      <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert Alert="This is An Alert" />
      <div className="container my-3 ">
        <TextForm heading="Enter the text to Analysis" />
        {/* <Aboutus /> */}
      </div>
    </>
  );
}

export default App;
