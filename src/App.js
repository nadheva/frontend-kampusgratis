import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import RouteUser from "./config/RouteUser";

function App() {
  return (
    <BrowserRouter>
        <RouteUser />
    </BrowserRouter>
  );
}

export default App;
