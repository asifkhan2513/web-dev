// import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Labs from "./Components/Labs";
import Support from "./Components/Support";
import NotFound from "./Components/NotFound";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="py-0 bg-cyan-500 ">
        <ul className="bg-cyan-500">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/labs">Labs</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
