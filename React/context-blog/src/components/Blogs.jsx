import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../contex/AppContext";

const Blogs = () => {
  // Consume
  const { posts, loading } = useContext(AppContext);
  console.log(posts);
  return (
    <div className="w-11/12 max-w-[670px] h-screen py-3 flex flex-col gap-y-7 mt-[206px] mb-[200px] justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <p className=" font-bold text-xl">{post.title}</p>
              <p className="text-[15px]">
                By <span className=" italic">{post.author}</span> on{" "}
                <span className="underline font-bold">{post.category}</span>
              </p>
              <p className=" text-[15px] mt-[6px] ">Posted on {post.date}</p>
              <p className="text-[16px] mt-[8px]">{post.content}</p>
              <div className="flex gap-x-3">
                {post.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="text-blue-500 underline font-bold text-[12px] mt-[4px] cursor-pointer"
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blogs;
