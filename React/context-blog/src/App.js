import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import AppContext from "./contex/AppContext";
export const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);
  console.log("fine");
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
