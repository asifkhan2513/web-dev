import "./Item.css";
function Item(props) {
  const itemName = props.name;
  return (
    <>
      <h2 className="item"> {itemName}</h2>
    </>
  );
}

export default Item;
