import React from 'react';
import Intro from '../../components/studiku/pertemuan/Intro';
import MainContent from '../../components/studiku/pertemuan/MainContent';
import ModalSlide from '../../components/studiku/pertemuan/ModalSlide';

const Pertemuan = () => {
    return (
        <>
            <main>
                <Intro />
                <MainContent />
            </main>
            <ModalSlide />

        </>
    )
}

export default Pertemuan