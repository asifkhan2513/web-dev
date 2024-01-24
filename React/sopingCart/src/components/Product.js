import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const distpatch = useDispatch();
  const addToCart = () => {
    distpatch(add(post));
  };
  const removeFromCart = () => {
    distpatch(remove(post.id));
  };
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <img src={post.image} alt={`${post.id}`} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {cart.some((p) => p.id === post.id) ? (
        <button onClick={removeFromCart}>Remove</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
