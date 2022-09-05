import React from "react";
import { Route, Routes } from "react-router-dom";

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
import PageNotFound from "../pages/error/404";
import Unauthorized from "../pages/error/401";
import Forbidden from "../pages/error/403";
import ServerError from "../pages/error/500";
import ServiceUnavailable from "../pages/error/503";

const Routed = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage2 />} />
      <Route path="/landing-page1" element={<LandingPage1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Regist />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/edit-profile" element={<EditProfile />} />

      <Route path="/*" element={<PageNotFound />} />
      <Route path="/401" element={<Unauthorized />} />
      <Route path="/403" element={<Forbidden />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="/503" element={<ServiceUnavailable />} />
    </Routes>
  );
};

export default Routed;
