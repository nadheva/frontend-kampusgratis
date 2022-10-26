import React from 'react'

import Footer from '../default/Footer'
import Header from '../default/Header'
import Intro from '../../components/acara-kampus/acara-kampus-detail/Intro'
import Category from '../../components/acara-kampus/acara-kampus-detail/Category'
import Desctriprion from '../../components/acara-kampus/acara-kampus-detail/Desctriprion'

const AcaraKampusDetail = () => {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Category />
                <Desctriprion />
            </main>
            <Footer />
        </>
    )
}

export default AcaraKampusDetail