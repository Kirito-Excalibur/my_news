import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet, useParams } from "react-router-dom";
import News from "./components/News";

function App({ match }) {
  let { value } = useParams(match);


  return (
    <div className="App h-full">
      <Navbar />
      <News match={value} />
    </div>
  );
}

export default App;
