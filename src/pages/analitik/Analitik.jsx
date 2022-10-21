import React from 'react'

import Header from "../default/Header";
import Footer from "../default/Footer";
import DataUser from '../../components/analitik/DataUser';
import Chart from '../../components/analitik/Chart';
import DataKhs from '../../components/analitik/DataKhs';

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