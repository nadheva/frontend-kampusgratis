import React from 'react';

// Component
import Header from "../default/Header";
import Footer from "../default/Footer";
import Intro from '../../components/layanan-konsultasi/home-layanan/Intro';
import CardList from '../../components/layanan-konsultasi/home-layanan/CardList';

const HomeLayanan = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <CardList />
            </main>
            <Footer />
        </>
    )
}

export default HomeLayanan