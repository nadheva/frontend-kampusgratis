import React from "react";

import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Regist from "../pages/Regist";
import Home from "../pages/Home";

const Routed = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Regist} />
    </Switch>
  );
};

export default Routed;
