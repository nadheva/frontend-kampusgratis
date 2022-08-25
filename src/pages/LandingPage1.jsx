import React from "react";
import { Element } from "react-scroll";

import Header1 from "../component/partials/Header1";
import Hero1 from "../component/landing-page1/Hero1";
import _Footer1 from "../component/partials/_Footer1";

import "../assets/user/css-custom/style-kg-1.css";

const LandingPage1 = () => {
  return (
    <>
      <Header1 />
      <main>
        <Hero1 />
      </main>
      <Element name="footer-section">
        <_Footer1 />
      </Element>
    </>
  );
};

export default LandingPage1;
