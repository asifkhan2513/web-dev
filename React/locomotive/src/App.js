// import logo from "./logo.svg";
import "./App.css";
import Page from "./components/Page";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

function App() {
  return (
    <div>
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
    </div>
  );
}

export default App;
