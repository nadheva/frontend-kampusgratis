import React from "react";

import Hero from "../component/landing-page/Hero";
import _Footer from "../component/partials/_Footer";
import Header from "../component/partials/Header";
import Counter from "../component/landing-page/Counter";
import Fakultas from "../component/landing-page/Fakultas";
import Banner from "../component/landing-page/Banner";
import Mentor from "../component/landing-page/Mentor";
import Tentang from "../component/landing-page/Tentang";
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
      <Element name="footer-section">
        <_Footer />
      </Element>
    </>
  );
};

export default LandingPage2;
