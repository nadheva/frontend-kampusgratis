import React from "react";
import { Element } from "react-scroll";

import Header1 from "../component/partials/Header1";
import Hero1 from "../component/landing-page1/Hero1";
import _Footer1 from "../component/partials/_Footer1";
import Fakultas1 from "../component/landing-page1/Fakultas1";
import Mentor1 from "../component/landing-page1/Mentor1";
import Event1 from "../component/landing-page1/Event1";

import "../assets/user/css-custom/style-kg-1.css";

const LandingPage1 = () => {
  return (
    <>
      <Header1 />
      <main>
        <Element name="home-section1">
          <Hero1 />
        </Element>
        <Element name="fakultas-section1">
          <Fakultas1 />
        </Element>
        <Element name="mentor-section1">
          <Mentor1 />
        </Element>
        <Element name="event-section1">
          <Event1 />
        </Element>
      </main>
      <Element name="footer-section1">
        <_Footer1 />
      </Element>
    </>
  );
};

export default LandingPage1;
