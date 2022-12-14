import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const KamusAplikasi = () => {
    return (
        <>
            <Header />
            <main>
                <section className="bg-blue py-7">
                    <div className="container">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-12">
                                <h1 className="text-white text-center">
                                    Kamus Aplikasi
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
                                            <div className="card-header p-0 pb-3">
                                                <form className="row g-4">
                                                    <div className="col-sm-12 col-lg-12">
                                                        <div className="position-relative">
                                                            <input
                                                                className="form-control pe-5 bg-transparent"
                                                                type="search"
                                                                placeholder="Search"
                                                                aria-label="Search"
                                                            />
                                                            <button
                                                                className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                                                                type="submit"
                                                            >
                                                                <i className="fas fa-search fs-6 " />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-body p-0 pt-3">
                                                <div className="vstack gap-3">
                                                    <Link to="/kamus-KG/kamus-aplikasi/1">
                                                        <div className="border-bottom py-2">
                                                            <h5>KHS </h5>
                                                        </div>
                                                    </Link>
                                                    <Link to="/kamus-KG/kamus-aplikasi/1">
                                                        <div className="border-bottom py-2">
                                                            <h5>Modul Bank </h5>
                                                        </div>
                                                    </Link>
                                                    <Link to="/kamus-KG/kamus-aplikasi/1">
                                                        <div className="border-bottom py-2">
                                                            <h5>My Learning </h5>
                                                        </div>
                                                    </Link>
                                                    <Link to="/kamus-KG/kamus-aplikasi/1">
                                                        <div className="border-bottom py-2">
                                                            <h5>Job Chanel </h5>
                                                        </div>
                                                    </Link>
                                                    <Link to="/kamus-KG/kamus-aplikasi/1">
                                                        <div className="border-bottom py-2">
                                                            <h5>Transkrip </h5>
                                                        </div>
                                                    </Link>
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

export default KamusAplikasi