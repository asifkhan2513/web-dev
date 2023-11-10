import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";
function App() {
  const ItemTwo = "Surf-Excel";
  const response = [
    {
      itemName: " Nirma",
      itemDate: "20",
      itemMonth: "june",
      itemYear: "2000",
    },
    {
      itemName: "Surf- excel",
      itemDate: "20",
      itemMonth: "june",
      itemYear: "2000",
    },
    {
      itemName: "555",
      itemDate: "20",
      itemMonth: "june",
      itemYear: "1999",
    },
    {
      itemName: "Tide",
      itemDate: "20",
      itemMonth: "june",
      itemYear: "1990",
    },
  ];
  return (
    <div>
      <Card>
        <Item name={response[0].itemName} />
        <ItemDate
          day={response[0].itemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        />
        <Item name={response[1].itemName} />
        <ItemDate
          day={response[1].itemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        />
        <Item name={response[2].itemName} />
        <ItemDate
          day={response[2].itemDate}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        />
        <Item name={response[3].itemName} />
        <ItemDate
          day={response[3].itemDate}
          month={response[3].itemMonth}
          year={response[3].itemYear}
        />
      </Card>
      <h1 className="App">Hello jee </h1>
    </div>
  );
}
export default App;
