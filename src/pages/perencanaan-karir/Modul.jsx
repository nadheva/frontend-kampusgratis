import React from 'react'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const Modul = () => {
    return (
        <>
            <Header />
            <main>

                <section className="py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-light p-4 text-center rounded-3">
                                    <h1 className="m-0">Modul Karir</h1>
                                    {/* <div className="d-flex justify-content-center">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-dots mb-0">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    Course minimal
                                                </li>
                                            </ol>
                                        </nav>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="row g-4">
                                    <div className="col-sm-6 col-lg-4 col-xl-3">
                                        <div className="card shadow h-100">
                                            {/* Image */}
                                            <img
                                                src="../../assets/images/courses/4by3/08.jpg"
                                                className="card-img-top"
                                                alt="course image"
                                            />
                                            {/* Card body */}
                                            <div className="card-body pb-0">
                                                {/* Badge and favorite */}
                                                <div className="d-flex justify-content-between mb-2">
                                                    <a
                                                        href="#"
                                                        className="badge bg-purple bg-opacity-10 text-purple"
                                                    >
                                                        All level
                                                    </a>
                                                    <a href="#" className="h6 fw-light mb-0">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                </div>
                                                {/* Title */}
                                                <h5 className="card-title">
                                                    <a href="#">Sketch from A to Z: for app designer</a>
                                                </h5>
                                                {/* Rating star */}
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item me-0 small">
                                                        <i className="fas fa-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item me-0 small">
                                                        <i className="fas fa-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item me-0 small">
                                                        <i className="fas fa-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item me-0 small">
                                                        <i className="fas fa-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item me-0 small">
                                                        <i className="far fa-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item ms-2 h6 fw-light mb-0">
                                                        4.0/5.0
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Card footer */}
                                            <div className="card-footer pt-0 pb-3">
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <span className="h6 fw-light mb-0">
                                                        <i className="far fa-clock text-danger me-2" />
                                                        12h 56m
                                                    </span>
                                                    <span className="h6 fw-light mb-0">
                                                        <i className="fas fa-table text-orange me-2" />
                                                        15 lectures
                                                    </span>
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

export default Modul