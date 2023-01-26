import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import News from "./components/News";
import "./index.css";
import Home from "./pages/Home";
import Sports from "./pages/Sports";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
