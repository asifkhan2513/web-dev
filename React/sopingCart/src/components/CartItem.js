import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
  };
  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="item.id" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div>
          <p>{item.price}</p>
        </div>
        <div onClick={removeFromCart}>
          <MdOutlineDeleteForever />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
