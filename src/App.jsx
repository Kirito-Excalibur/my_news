import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Outlet,
  Route,
  useParams,
  Routes,
} from "react-router-dom";
import News from "./components/News";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Crime from "./pages/Crime";

function App() {
  return (
    <div className="App h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/Crime" element={<Crime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
