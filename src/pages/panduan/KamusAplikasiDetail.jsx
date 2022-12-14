import React from 'react'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const KamusAplikasiDetail = () => {
    return (
        <>
            <Header />
            <main>
                <section className="bg-blue py-7">
                    <div className="container">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-12">
                                <h1 className="text-white text-center">
                                    KHS
                                </h1>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow rounded-2 p-0 mt-n5">
                                    <div className="card-body p-sm-4">
                                        <div className="card">
                                            <div className="card-body p-0 pt-3">
                                                <div className="vstack gap-3">
                                                    <div>
                                                        <h5 className="border-bottom">KHS </h5>
                                                        <p>KHS merupakan kumpulan definisi singkat dari istilah dan akronim yang digunakan di Mobile Aplikasi Kampus Gratis.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default KamusAplikasiDetail