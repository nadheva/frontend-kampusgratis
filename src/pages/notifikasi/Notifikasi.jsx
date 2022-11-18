import React from 'react'

import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'
import Intro from '../../components/notifikasi/notifikasiList/Intro'
import NotifikasiList from '../../components/notifikasi/notifikasiList/NotifikasiList'

export const Notifikasi = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <NotifikasiList />
            </main>
            <Footer />
        </>
    )
}
