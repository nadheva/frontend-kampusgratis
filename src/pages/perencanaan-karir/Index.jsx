import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const Index = () => {
    return (
        <>
            <Header />
            <main>
                <section className="mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <img
                                    src="../assets/images/element/karir.svg"
                                    className="h-200px h-md-300px mb-3"
                                    alt=""
                                />
                            </div>
                            <div className="col-4 text-center">
                                <p className="mb-0">
                                    <b>Perencanaan karir</b> adalah fitur
                                    untuk mengetahui minat dan bakat
                                    kamu dalam hal Akademik, mulai analisa sekarang untuk melihat karir yang cocok dengan kemampuan kamu
                                </p>
                                <Link to="/perencanaan-karir/hasil-analisa" type="button" className="btn btn-info mt-7 mb-0 rounded-5 px-4">
                                    Mulai Analisa
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Index