import React from "react";
import { Route, Switch } from "react-router-dom";

// css
import "../assets/user/vendor/font-awesome/css/all.min.css";
import "../assets/user/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/user/vendor/tiny-slider/tiny-slider.css";
import "../assets/user/vendor/glightbox/css/glightbox.css";

// theme css
import "../assets/user/css/style.css";
import "../assets/user/css-custom/style.css";

// js
import "../assets/user/vendor/bootstrap/dist/js/bootstrap.bundle.min.js";

// vendor
import "../assets/user/vendor/tiny-slider/tiny-slider.js";
import "../assets/user/vendor/glightbox/js/glightbox.js";
import "../assets/user/vendor/purecounterjs/dist/purecounter_vanilla.js";

// Template Functions
// import "../assets/user/js/functions.js";

// import page
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
