import React from 'react';

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

import IntroDetail from '../../components/Discussion-Global/IntroDetail';
import MainContent from '../../components/Discussion-Global/MainContentDetail';

const Detail = () => {
  return <>
    <Header />
    <main>
      {/* <IntroDetail /> */}
      <MainContent />
    </main>
    <Footer />
  </>
}

export default Detail;