import React, { useContext } from "react";
import { AppContext } from "../contex/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>Page not found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>
              By <span>{post.author}</span> On <span>{post.category}</span>
            </p>
            <p>
              Post on <span>{post.date}</span>
            </p>
            <p>{post.cotent}</p>
            <div>
              {post.tag.map((tag, index) => {
                return <span key={index}>{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Blogs;
