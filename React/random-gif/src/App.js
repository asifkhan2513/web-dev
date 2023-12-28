// import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-screen background flex flex-col relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg font-bold text-4xl w-11/12 text-center mt-[40px] px-10 py-2 ">
        Random Gif
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
