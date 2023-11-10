import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
function App() {
  const ItemTwo = "Surf-Excel";
  return (
    <>
      <Item name="Nirma" />
      <ItemDate day="20" month="june" year=" 1998" />
      <Item name={ItemTwo} />
      <ItemDate day="22" month="july" year=" 2000" />
      <Item name="555" />
      <ItemDate day="24" month="sep" year=" 2010" />

      <h1 className="App">Hello jee </h1>
    </>
  );
}
export default App;
