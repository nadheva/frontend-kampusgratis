import React from 'react';

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

import Intro from '../../components/Discussion-Global/IntroCreate';
import MainContent from '../../components/Discussion-Global/Create';

const Create = () => {
  return <>
    <Header />
    <main>
      <Intro />
      <MainContent />
    </main>
    <Footer />
  </>
}

export default Create;