import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [author, setAuthor] = useState([]);
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);
  const [data,setData]=useState()
  useEffect(() => {
    async function getInfo() {
      const resp = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=a5c95c3e18534fe7930f3b858519a32d`
      );
      const respData = await resp.json();
      console.log(respData.articles);
      setAuthor(respData.articles.map((val) => val.author));
      setTitle(respData.articles.map((val) => val.title));
      setImg(respData.articles.map((val) => val.urlToImage));
    }
    getInfo();
  }, []);

  return (
    <div className="App h-full">
      <div className="columns-3 h-full">
        {title.map((user, keys) => {
          return (
            <div className="bg-red-400 border  rounded-lg " key={keys}>
              {user}

            </div>
          );
        })}
{img.map((user)=>{
  return(
    <div>
      <img src={`${user}`} alt="" />
      
    </div>
  )
})}

      </div>
    </div>
  );
}

export default App;
