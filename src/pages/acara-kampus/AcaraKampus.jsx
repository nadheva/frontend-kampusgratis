import React from 'react';

import Header from "../default/Header";
import Footer from "../default/Footer";
import Intro from '../../components/acara-kampus/acara-kampus/Intro';
import Newsletter from '../../components/acara-kampus/acara-kampus/Newsletter';
import MainContent from '../../components/acara-kampus/acara-kampus/MainContent';

const AcaraKampus = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <MainContent />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default AcaraKampus