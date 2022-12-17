import React from 'react';

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

import Intro from '../../components/Discussion-Global/Intro';
import MainContent from '../../components/Discussion-Global/MainContent';

const Main = () => {
  return <>
    <Header />
    <main>
      <Intro />
      <MainContent />
    </main>
    <Footer />
  </>
}

export default Main;