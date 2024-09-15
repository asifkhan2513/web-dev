import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [finalText, setFinalText] = useState("");

  const handleSubmit = () => {
    setFinalText(text);
    localStorage.setItem("myText", JSON.stringify({ text }));
  };

  useEffect(() => {
    console.log("it runs every refresh");
    const obj = localStorage.getItem("myText");
    const parsedData = JSON.parse(obj);
    if (parsedData) {
      setFinalText(parsedData.text);
    } else {
      setFinalText("");
    }
  }, []);
  return (
    <div className="App">
      <h1>{finalText}</h1>
      <input
        type="text"
        value={text}
        placeholder="enter any value"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>click me</button>
    </div>
  );
}

export default App;
