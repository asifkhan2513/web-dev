import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_KEY = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_KEY);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.log("error aa gya");
      setPost([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>Data not found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
