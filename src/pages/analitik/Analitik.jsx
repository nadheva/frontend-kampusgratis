import React from 'react'

import Header from "../default/Header";
import Footer from "../default/Footer";
import DataUser from '../../components/analitik/analitik/DataUser';
import Chart from '../../components/analitik/analitik/Chart';
import DataKhs from '../../components/analitik/analitik/DataKhs';

const Analitik = () => {
    return (
        <>
            <Header />
            <main>
                <DataUser />
                <Chart />
                <DataKhs />
            </main>
            <Footer />
        </>
    )
}

export default Analitik