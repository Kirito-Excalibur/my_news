import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function News({ value }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getInfo() {
      const resp = await fetch(
        `https://newsapi.org/v2/top-headlines?apiKey=a5c95c3e18534fe7930f3b858519a32d${value}`
      );
      const respData = await resp.json();

      setData(respData.articles);
      setAuthor(respData.articles.map((val) => val.author));
      setTitle(respData.articles.map((val) => val.title));
      setImg(respData.articles.map((val) => val.urlToImage));
    }
    getInfo();
  }, []);

  console.log(data);
  return (
    <div className="App h-full">
      <div className="grid grid-cols-3 gap-3">
        {data.map((user, keys) => {
          return (
            <div
              className="bg-gray-200 shadow-md border p-5 flex flex-col items-center justify-center container rounded-lg "
              key={keys}
            >
              <span className="text-center">{user.title}</span>

              <img className="h-[200px]" src={`${user.urlToImage}`} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
