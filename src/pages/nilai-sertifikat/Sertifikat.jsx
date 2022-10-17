import React from 'react'

import Banner from '../../components/Profile/Banner';
import Sidebar from "../../components/Profile/Sidebar";
import Header from "../default/Header";
import Footer from "../default/Footer";

const Sertifikat = () => {
    return (
        <>
            <Header />
            <Banner />
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <div className="col-xl-9">
                            <div className="card border bg-transparent rounded-3">
                                <div className="card-header bg-transparent border-bottom">
                                    <h3 className="mb-0">List Sertifikat</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-lg-12 col-xl-12">
                                            <div className="card card-body shadow rounded-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-lg bg-blue bg-opacity-10 rounded-circle text-blue">
                                                        <i className="fas fa-file-pdf" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="mb-0">
                                                            <a
                                                                href=" "
                                                                className="stretched-link"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                            >
                                                                Math &amp; Logic
                                                            </a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-12 col-xl-12">
                                            <div className="card card-body shadow rounded-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-lg bg-blue  bg-opacity-10 rounded-circle text-blue">
                                                        <i className="fas fa-file-pdf" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="mb-0">
                                                            <a
                                                                href=" "
                                                                className="stretched-link"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                            >
                                                                Health &amp; Fitness
                                                            </a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-12 col-xl-12">
                                            <div className="card card-body shadow rounded-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-lg bg-blue bg-opacity-10 rounded-circle text-blue">
                                                        <i className="fas fa-file-pdf" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="mb-0">
                                                            <a
                                                                href=" "
                                                                className="stretched-link"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                            >
                                                                Photography
                                                            </a>
                                                        </h5>
                                                    </div>
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

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img src="assets/images/about/12.jpg" alt="" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Unduh
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sertifikat