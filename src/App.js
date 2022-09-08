import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routed from "./config/Routed";

function App() {
  return (
    <BrowserRouter>
      <Routed />
    </BrowserRouter>
  );
}

export default App;
