import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Women from "./components/Women";
import Men from "./components/Men";
import Unisex from "./components/Unisex";
import Shop from "./components/Shop";
import About from "./components/About";
import Login from "./components/Login";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/unisex" element={<Unisex />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
