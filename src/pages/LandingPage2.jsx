import React from "react";

import Hero from "../component/landing-page2/Hero";
import Footer2 from "../component/partials/Footer2";
import Header from "../component/partials/Header";
import Counter from "../component/landing-page2/Counter";
import Fakultas from "../component/landing-page2/Fakultas";
import Banner from "../component/landing-page2/Banner";
import Mentor from "../component/landing-page2/Mentor";
import Tentang from "../component/landing-page2/Tentang";
import { Element } from "react-scroll";

import '../assets/user/css-custom/style.css';

const LandingPage2 = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Counter />

        <Element name="fakultas-section">
          <Fakultas />
        </Element>

        <Banner />

        <Element name="mentor-section">
          <Mentor />
        </Element>
        <Element name="tentang-section">
          <Tentang />
        </Element>
      </main>
      <Element id="footer-section" className="element">
        <Footer2 />
      </Element>
    </>
  );
};

export default LandingPage2;
