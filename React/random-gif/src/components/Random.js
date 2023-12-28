import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
// import { useEffect } from "react";
const API_KEY = "o81V4rUQlxpFUbYc6nvpEpPCjCajYhlZ&tag=&rating=g";

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loader, setLoader] = useState("false");
  // async function fetchData() {
  //   setLoader(true);
  //   const url = `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imagSource = data.data.images.downsized_large.url;
  //   console.log(imagSource);
  //   setGif(imagSource);
  //   setLoader(false);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loader, fetchData } = useGif();
  // function clickHandler() {
  //   fetchData();
  // }
  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[20px] text-xl underline font-bold uppercase">
        {" "}
        A Random Gif
      </h1>
      {loader ? <Spinner /> : <img src={gif} width="450" alt="" />}

      <button
        onClick={() => fetchData("car")}
        className="mb-[15px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
