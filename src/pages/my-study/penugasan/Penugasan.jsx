import React from 'react'

import Footer from '../../../components/default/Footer'
import Header from '../../../components/default/Header'

const Penugasan = () => {
    return (
        <>
            <Header />
            <main>

                {/* Intro */}
                <section className="bg-blue">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12 pb-4">
                                <h1 className="text-white ">Penugasan</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MainContent */}
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow rounded-2 p-0 mt-n5">

                                    <div className="card-header border-bottom px-4 pt-3 pb-0">
                                        <ul className="nav nav-bottom-line py-0" id="course-pills-tab" role="tablist">
                                            <li className="nav-item me-2 me-sm-4" role="presentation">
                                                <button
                                                    className="nav-link mb-2 mb-md-0 active"
                                                    id="course-pills-tab-1"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#course-pills-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="course-pills-4"
                                                    aria-selected="true">
                                                    Semua
                                                </button>
                                            </li>
                                            <li className="nav-item me-2 me-sm-4" role="presentation">
                                                <button
                                                    className="nav-link mb-2 mb-md-0"
                                                    id="course-pills-tab-1"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#course-pills-1"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="course-pills-1"
                                                    aria-selected="true">
                                                    Ditugaskan
                                                </button>
                                            </li>
                                            <li className="nav-item me-2 me-sm-4" role="presentation">
                                                <button
                                                    className="nav-link mb-2 mb-md-0"
                                                    id="course-pills-tab-2"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#course-pills-2"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="course-pills-2"
                                                    aria-selected="false">
                                                    Gagal
                                                </button>
                                            </li>
                                            <li className="nav-item me-2 me-sm-4" role="presentation">
                                                <button
                                                    className="nav-link mb-2 mb-md-0"
                                                    id="course-pills-tab-3"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#course-pills-3"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="course-pills-3"
                                                    aria-selected="false">
                                                    Selesai
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-body p-sm-4">
                                        <div className="tab-content" id="course-pills-tabContent">

                                            <div className="tab-pane fade show active"
                                                id="course-pills-4"
                                                role="tabpanel"
                                                aria-labelledby="course-pills-tab-1">
                                                <div className="card border-start border-primary border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="mt-3">
                                                            <h5 className="m-0 mb-1">
                                                                Tugas Matriks & Bahasa Jepang
                                                            </h5>
                                                            <p className="small">
                                                                Matematika
                                                            </p>
                                                        </div>
                                                        <div className="d-flex flex-column align-items-center">
                                                            <i className="bi bi-clock-history fs-5 text-primary"></i>
                                                            <p className="m-0">Deadline 24 Juni 2022, 09:00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade"
                                                id="course-pills-1"
                                                role="tabpanel"
                                                aria-labelledby="course-pills-tab-1">
                                                <div className="card border-start border-primary border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <h6 className="m-0">Surat Keterangan Mahasiswa</h6>
                                                        <div className="d-flex flex-column align-items-center">
                                                            <i className="bi bi-clock-history fs-5"></i>
                                                            <p className="m-0">Estimasi : 3-5 hari</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade"
                                                id="course-pills-2"
                                                role="tabpanel"
                                                aria-labelledby="course-pills-tab-2">
                                                <div className="card border-start border-danger border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="mt-3">
                                                            <h6 className="m-0">
                                                                Surat Keterangan Cuti Kuliah
                                                            </h6>
                                                            <p className="text-danger small">
                                                                Dokumen Kurang Jelas
                                                            </p>
                                                        </div>
                                                        <i className="bi bi-x-circle text-danger fs-5"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade"
                                                id="course-pills-3"
                                                role="tabpanel"
                                                aria-labelledby="course-pills-tab-3">
                                                <div className="card border-start border-success border-4 shadow-lg rounded-2 px-4 py-3 my-4">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <h6 className="m-0">
                                                            Surat Keterangan Cuti Kuliah
                                                        </h6>
                                                        <div>
                                                            <i className="bi bi-cloud-arrow-down-fill fs-5 text-body p-0"></i>
                                                            <i className="bi bi-check-circle-fill fs-5 text-success ps-3"></i>
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

            </main>
            <Footer />
        </>
    )
}

export default Penugasan