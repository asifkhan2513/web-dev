// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  function firstHandler(event) {
    // console.log(event.target.value);

    console.log(setFirst);
    setFirst(event.target.value);
  }
  function secondHandler(event) {}
  return (
    <div className="App">
      <h1>Asif khan</h1>
      <form>
        <input type="text" placeholder="First Name" onChange={firstHandler} />{" "}
        <br></br>
        <br></br>
        <input type="text" placeholder="Last Name" onChange={secondHandler} />
      </form>
    </div>
  );
}

export default App;
