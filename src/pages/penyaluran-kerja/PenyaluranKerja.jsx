import React from 'react'

import Header from "../default/Header";
import Footer from "../default/Footer";

const penyaluranKerja = () => {
    return (
        <>
            <Header />

            <main>
                {/* ======================= Page Banner START */}
                {/* Intro */}
                <section className="py-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-dark p-4 text-center rounded-3">
                                    <h1 className="text-white m-0">Penyaluran Kerja</h1>
                                    <div className="d-flex justify-content-center">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                                                <li className="breadcrumb-item">
                                                    <a href=" ">Kategori</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    Penyaluran Kerja
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ======================= Page Banner END */}

                {/* ======================= Inner part START */}
                {/* MainCOntent */}
                <section className="pt-4">
                    <div className="container">

                        {/* FilterBar */}
                        <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
                            <div className="row g-3">
                                <div className="col-xl-3">
                                    <input
                                        className="form-control me-1"
                                        type="search"
                                        placeholder="Search"
                                    />
                                </div>
                                <div className="col-xl-8">
                                    <div className="row g-3">
                                        <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                            <select
                                                className="form-select form-select-sm js-choice"
                                                aria-label=".form-select-sm example"
                                            >
                                                <option>Terbaru</option>
                                                <option>Terlama</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                            <select
                                                className="form-select form-select-sm js-choice"
                                                aria-label=".form-select-sm example"
                                            >
                                                <option value="">Waktu Kerja</option>
                                                <option>Full Time</option>
                                                <option>Part Time</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6 col-md-4 pb-2 pb-md-0">
                                            <select
                                                className="form-select form-select-sm js-choice"
                                                aria-label=".form-select-sm example"
                                            >
                                                <option value="">Lowongan</option>
                                                <option>Pekerjaan</option>
                                                <option>Magang</option>
                                                <option>Project</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-1">
                                    <button
                                        type="button"
                                        className="btn btn-primary mb-0 rounded z-index-1 w-100"
                                    >
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* CardList */}
                        <div className="row g-4 ">

                            <div className="col-lg-10 col-xl-6">
                                <div className="card shadow p-2">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_dicoding_indonesia_070922131405.png"
                                                className="rounded-3"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                                                    <div>
                                                        <h5 className="card-title mb-0">
                                                            <a href="/detail-penyaluran-kerja">Frontend Developer</a>
                                                        </h5>
                                                        <p className="small mb-2 mb-sm-0">
                                                            NBS (PT Kode Aplikasi Indonesia)
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-truncate-2 mb-3">
                                                    Full time | Jakarta Selatan
                                                </p>
                                                <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                    <h6 className="text-orange mb-0">Rp. 1.000.000</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-10 col-xl-6">
                                <div className="card shadow p-2">
                                    <div className="row g-0">

                                        <div className="col-md-4">
                                            <img
                                                src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_pt_jagat_teknologi_indonesia_040222165227.png"
                                                className="rounded-3"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                                                    <div>
                                                        <h5 className="card-title mb-0">
                                                            <a href="#">Backend Developer</a>
                                                        </h5>
                                                        <p className="small mb-2 mb-sm-0">
                                                            NBS (PT Kode Aplikasi Indonesia)
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-truncate-2 mb-3">
                                                    Full time | Jakarta Selatan
                                                </p>
                                                {/* Info */}
                                                <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                    <h6 className="text-orange mb-0">Rp. 1.000.000</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-10 col-xl-6">
                                <div className="card shadow p-2">
                                    <div className="row g-0">

                                        <div className="col-md-4">
                                            <img
                                                src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_pt_sang_byte_indonesia_130922083138.png"
                                                className="rounded-3"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                                                    <div>
                                                        <h5 className="card-title mb-0">
                                                            <a href="#">Full Stack Developer</a>
                                                        </h5>
                                                        <p className="small mb-2 mb-sm-0">
                                                            NBS (PT Kode Aplikasi Indonesia)
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-truncate-2 mb-3">
                                                    Full time | Jakarta Selatan
                                                </p>
                                                {/* Info */}
                                                <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                    <h6 className="text-orange mb-0">Rp. 1.000.000</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* ======================= Inner part END */}
            </main>

            <Footer />
        </>
    )
}

export default penyaluranKerja