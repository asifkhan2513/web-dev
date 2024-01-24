import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Cartitem } from "../components/CartItem";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { Cart } = useSelector((state) => state);
  const [totalAmount, setTotalAMount] = useState(0);
  //const API_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    setTotalAMount(Cart.reducer((acc, curr) => acc + curr.price, 0));
  }, [Cart]);
  return (
    <div>
      {Cart.length > 0 ? (
        <div>
          <div>
            {Cart.map((item, index) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}
          </div>
          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total number of Item : {Cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Amount : {totalAmount}</p>
              <button>CheckOut ow </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty Now</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
