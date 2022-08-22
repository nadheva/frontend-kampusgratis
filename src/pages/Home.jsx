import React from "react";

import Hero from "../component/landing-page/Hero";
import Footer from "../component/partials/Footer";
import Header from "../component/partials/Header";
import Counter from "../component/landing-page/Counter";
import Fakultas from "../component/landing-page/Fakultas";
import Banner from "../component/landing-page/Banner";
import Mentor from "../component/landing-page/Mentor";
import Tentang from "../component/landing-page/Tentang";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Counter />
        <Fakultas />
        <Banner />
        <Mentor />
        <Tentang />
      </main>
      <Footer />
    </>
  );
};

export default Home;
