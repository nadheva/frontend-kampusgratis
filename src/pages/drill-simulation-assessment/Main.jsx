import React from 'react';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';

import Intro from '../../components/Drill-Simulation-Assessment/Intro';
import MainContent from '../../components/Drill-Simulation-Assessment/MainContent';

const Main = () => {
  return <>
    <Header />
    <main>
      {/* <Intro /> */}
      <MainContent />
    </main>
    <Footer />
  </>
}

export default Main;