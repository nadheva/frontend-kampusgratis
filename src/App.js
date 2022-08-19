import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Routed from "./config/Routed";

function App() {
  return (
    <BrowserRouter>
      <Routed />
    </BrowserRouter>
  );
}

export default App;
