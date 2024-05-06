import axios from "axios";
import React from "react";
// import Tag from "../components/Tag";
import { useEffect, useState } from "react";
const API_KEY = "o81V4rUQlxpFUbYc6nvpEpPCjCajYhlZ";
const tagMemeUrl = `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag${tag}`;
const url = `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState("false");

  // const [tag, setTag] = useState("car");
  async function fetchData(tag) {
    setLoader(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imagSource = data.data.images.downsized_large.url;
    console.log(imagSource);
    setGif(imagSource);
    setLoader(false);
  }
  useEffect(() => {
    fetchData("car");
  }, []);

  return { gif, loader, fetchData };
};
export default useGif;
