import React from "react";
import { Route, Routes } from "react-router-dom";

// Plugins CSS 
import "../assets/user/vendor/font-awesome/css/all.min.css";
import "../assets/user/vendor/bootstrap-icons/bootstrap-icons.css";

import "../assets/user/vendor/tiny-slider/tiny-slider.css";
import "../assets/user/vendor/choices/css/choices.min.css";

// Theme CSS 
import "../assets/user/css/style.css";


// import page
import Login from "../pages/auth/Login";
import Regist from "../pages/auth/Regist";
import LandingPage1 from "../pages/LandingPage1";
import LandingPage2 from "../pages/LandingPage2";
import ForgotPassword from "../pages/auth/ForgotPassword";
import EditProfile from "../pages/EditProfile";
import PageNotFound from "../pages/error/404";
import Unauthorized from "../pages/error/401";
import Forbidden from "../pages/error/403";
import ServerError from "../pages/error/500";
import ServiceUnavailable from "../pages/error/503";
import Home from "../pages/studiku/Home";
import HomeStudiku from "../pages/studiku/HomeStudiku";
import PertemuanStudiku from "../pages/studiku/PertemuanStudiku";
import VidioPlayer from "../pages/studiku/VidioPlayer";
import Quiz from "../pages/studiku/Quiz";
import Pertemuan from "../pages/studiku/Pertemuan";
import ForumDiskusi from "../pages/studiku/ForumDiskusi";

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

      {/* Studiku */}
      <Route path="/home" element={<Home />} />
      <Route path="/studiku" element={<HomeStudiku />} />

      <Route path="/pertemuan" element={<Pertemuan />} />
      <Route path="/pertemuan1" element={<PertemuanStudiku />} />

      <Route path="/vidio-player" element={<VidioPlayer />} />
      <Route path="/quiz" element={<Quiz />} />

      <Route path="/forum-diskusi" element={<ForumDiskusi />} />
    </Routes>
  );
};

export default Routed;
