import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const KamusKG = () => {
    return (
        <>
            <Header />
            <main>
                <section className="py-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-light p-4 rounded-3 position-relative overflow-hidden">
                                    {/* Svg decoration */}
                                    <figure className="position-absolute top-0 end-0 mt-5">
                                        <svg width="566.3px" height="353.7px" viewBox="0 0 566.3 353.7">
                                            <path
                                                stroke="#17a2b8"
                                                fill="none"
                                                d="M525.1,4c8.1,0.7,14.9,7.2,17.9,14.8c3,7.6,3,16,2.1,24.1c-4.7,44.3-32.1,84.7-69.4,108.9 c-37.4,24.2-83.7,32.8-127.9,27.6c-32.3-3.8-63.5-14.5-95.9-16.6c-21.6-1.4-45.6,2.1-60.1,18.3c-7.7,8.5-11.8,19.6-14.8,30.7 c-7.9,29.5-9,60.8-19.7,89.5c-5.5,14.8-14,29.1-27.1,38c-15.6,10.5-35.6,12-54.2,9.5c-18.6-2.5-36.5-8.6-55-12.1"
                                            />
                                            <path
                                                stroke="#F99D2B"
                                                fill="none"
                                                d="M560.7,0.2c10,18.3,3.7,41.1-5,60.1c-11.8,25.9-28,50.3-50.2,68.2c-29,23.3-66.3,34-103.2,38.6 c-36.9,4.6-74.3,3.8-111.3,7.2c-22.3,2-45.3,5.9-63.5,19c-26.8,19.2-39,55.3-68.3,70.4c-38.2,19.6-89.7-4.9-125.6,18.8 c-22.6,15-30.7,44.2-33.3,71.2"
                                            />
                                        </svg>
                                    </figure>
                                    <div className="row position-relative align-items-center">
                                        {/* Content */}
                                        <div className="col-md-6 px-md-5">
                                            {/* Title */}
                                            <h1 className="mb-3">Kamus Kampus Gratis</h1>
                                            <p className="mb-3">
                                                Kumpulan definisi singkat dari istilah dan akronim yang digunakan di Website Kampus Gratis.
                                            </p>

                                        </div>
                                        {/* Image */}
                                        <div className="col-md-6 text-center">
                                            <img src="assets/images/book/book-bg.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* Row END */}
                                </div>
                            </div>
                        </div>
                        {/* Row END */}
                    </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="bg-purple rounded-3 bg-opacity-15 p-5 h-100">
                                    {/* Content */}
                                    <div className="row g-3 align-items-center my-auto">
                                        {/* Content */}
                                        <div className="col-sm-7 col-lg-12 col-xl-7">
                                            <h3 className="mb-1 fs-2">Kamus Aplikasi</h3>
                                            <p className="mb-3 h5 fw-light lead">
                                                Panduan ini berisi dokumen - dokumen panduan.
                                            </p>
                                            <Link to="/panduan/kamus-KG/kamus-aplikasi" className="btn btn-dark mb-0">
                                                Lihat Kamus
                                            </Link>
                                        </div>
                                        {/* Image */}
                                        <div className="col-sm-5 col-lg-12 col-xl-5">
                                            <img src="assets/images/element/29.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="bg-warning rounded-3 bg-opacity-15 p-5 h-100">
                                    {/* Content */}
                                    <div className="row g-3 align-items-center my-auto">
                                        {/* Content */}
                                        <div className="col-sm-7 col-lg-12 col-xl-7">
                                            <h3 className="mb-1 fs-2">Glosarium Materi Kuliah</h3>
                                            <p className="mb-3 h5 fw-light lead">
                                                Panduan ini berisi dokumen - dokumen panduan.
                                            </p>
                                            <Link to="/panduan/kamus-KG/glosarium" className="btn btn-dark mb-0">
                                                Lihat Glosarium
                                            </Link>
                                        </div>
                                        {/* Image */}
                                        <div className="col-sm-5 col-lg-12 col-xl-5">
                                            <img src="assets/images/element/29.svg" alt="" />
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

export default KamusKG