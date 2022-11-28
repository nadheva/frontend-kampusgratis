import React from 'react'
// import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6 position-relative overflow-hidden">
                        <div className="bg-primary bg-opacity-10 rounded-3 p-5 h-100">
                            <div className="position-absolute bottom-0 end-0 me-3">
                                <img
                                    loading="lazy"
                                    src="/assets/images/element/08.svg"
                                    className="h-100px h-sm-200px"
                                    alt="banner1"
                                />
                            </div>
                            <div className="row">
                                <div className="col-sm-8 position-relative">
                                    <h3 className="mb-1">Dapatkan Sertifikat</h3>
                                    <p className="mb-3 h5 fw-light lead">
                                        Dapatkan program sertifikat profesional yang tepat untuk
                                        Anda.
                                    </p>
                                    {/* <Link to=" " className="btn btn-primary mb-0">
                                        Lihat Program
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative overflow-hidden">
                        <div className="bg-secondary rounded-3 bg-opacity-10 p-5 h-100">
                            <div className="position-absolute bottom-0 end-0 me-3">
                                <img
                                    loading="lazy"
                                    src="/assets/images/element/15.svg"
                                    className="h-100px h-sm-200px"
                                    alt="banner2"
                                />
                            </div>
                            <div className="row">
                                <div className="col-sm-8 position-relative">
                                    <h3 className="mb-1">Kursus Terbaik</h3>
                                    <p className="mb-3 h5 fw-light lead">
                                        Daftar sekarang di kursus paling populer dan berperingkat
                                        terbaik.
                                    </p>
                                    {/* <Link to=" " className="btn btn-warning mb-0">
                                        Lihat Kursus
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner