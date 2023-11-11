import logo from "./logo.svg";
// import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 Far Away 💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>Waht do you need for your 😍 trip ?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list"></div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have x item o your bag you already pack x item (x%)</em>
    </footer>
  );
}
