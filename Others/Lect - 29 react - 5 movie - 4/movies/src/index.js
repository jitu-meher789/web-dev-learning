import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./Navbar";
import Customers from "./Customers";
import Rentals from "./Rentals";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  </Router>
);
