import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../default/Footer'
import Header from '../default/Header'

const PilihDokument = () => {
    return (
        <>
            <Header />
            <main>

                <section className="bg-blue">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12 pb-4">
                                <h1 className="text-white ">Pilih Dokument</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <div className="card shadow rounded-2 p-0 mt-n5">
                                    <div className="card-body p-sm-4">
                                        <Link to="">
                                            <div className="card border-4 shadow-lg rounded-2 px-4 py-3 my-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h6 className="m-0">Surat Keterangan Cuti Kuliah</h6>
                                                    <div>
                                                        <i className="bi bi-cloud-arrow-down-fill fs-5 text-body p-0"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="">
                                            <div className="card border-4 shadow-lg rounded-2 px-4 py-3 my-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h6 className="m-0">Surat Keterangan </h6>
                                                    <div>
                                                        <i className="bi bi-cloud-arrow-down-fill fs-5 text-body p-0"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
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

export default PilihDokument