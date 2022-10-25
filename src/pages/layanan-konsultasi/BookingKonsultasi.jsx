import React from 'react'

// Component
import Header from "../default/Header";
import Footer from "../default/Footer";
import Intro from '../../components/layanan-konsultasi/booking-konsultasi/Intro';
import MainContent from '../../components/layanan-konsultasi/booking-konsultasi/MainContent';

const BookingKonsultasi = () => {
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

export default BookingKonsultasi