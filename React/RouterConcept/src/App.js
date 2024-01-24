// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Labs from "./components/Labs";
import Support from "./components/Support";
// import {Route}

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/lab">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/lab" element={<Labs />}></Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
