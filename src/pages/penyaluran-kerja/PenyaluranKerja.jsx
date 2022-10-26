import React from 'react'

import Header from "../default/Header";
import Footer from "../default/Footer";
import Intro from '../../components/penyaluran-kerja/penyaluran-kerja/Intro';
import MainContent from '../../components/penyaluran-kerja/penyaluran-kerja/MainContent';

const penyaluranKerja = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <MainContent />
            </main>
            <Footer />
        </>
    )
}

export default penyaluranKerja