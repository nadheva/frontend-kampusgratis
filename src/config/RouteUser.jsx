import React from "react";
import { Routes, Route } from "react-router-dom";

// page
import Login from "../pages/Login";
import Home from "../pages/Home";

function RouteUser() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RouteUser;
