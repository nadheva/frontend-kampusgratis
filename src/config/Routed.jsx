import React from "react";
import { Route, Switch } from "react-router-dom";

// css
import "../assets/user/vendor/font-awesome/css/all.min.css";
import "../assets/user/vendor/bootstrap-icons/bootstrap-icons.css";

// theme css
import "../assets/user/css/style.css";

// import page
import Login from "../pages/Login";
import Regist from "../pages/Regist";
import LandingPage1 from "../pages/LandingPage1";
import LandingPage2 from "../pages/LandingPage2";
import ForgotPassword from "../pages/ForgotPassword";
import EditProfile from "../pages/EditProfile";



const Routed = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage2} />
      <Route path="/landing-page1" component={LandingPage1} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Regist} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/edit-profile" component={EditProfile} />
    </Switch>
  );
};

export default Routed;
