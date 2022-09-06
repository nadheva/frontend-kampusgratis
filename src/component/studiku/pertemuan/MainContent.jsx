import React from 'react'

const MainContent = () => {
    return (
        <div className="col-lg-8">
            <div className="bg-body bg-body-pertemuan shadow rounded-2 p-4">
                <ul className="nav nav-pills nav-tabs-line pt-0" id="course-pills-tab" role="tablist">
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                        <button className="nav-link mb-2 mb-md-0 active text-white" id="course-pills-tab-1"
                            data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab"
                            aria-controls="course-pills-1" aria-selected="true">Vidio</button>
                    </li>
                    <li className="nav-item me-2 me-sm-4" role="presentation">
                        <button className="nav-link mb-2 mb-md-0 text-white" id="course-pills-tab-2"
                            data-bs-toggle="pill" data-bs-target="#course-pills-2" type="button" role="tab"
                            aria-controls="course-pills-2" aria-selected="false">Dokumen</button>
                    </li>
                </ul>
                <hr />
                <div className="tab-content pt-2" id="course-pills-tabContent">
                    <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel"
                        aria-labelledby="course-pills-tab-1">
                        <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">

                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header font-base" id="heading-1">
                                    <button
                                        className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed text-white"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1"
                                        aria-expanded="true" aria-controls="collapse-1">
                                        Pertemuan 1
                                    </button>
                                </h6>
                                <div id="collapse-1" className="accordion-collapse collapse show"
                                    aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body mt-3">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                    <i className="fas fa-play me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Type
                                                    of Digital Marketing</span>
                                            </div>
                                            <p className="mb-0">18m 10s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header font-base" id="heading-2">
                                    <button
                                        className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2"
                                        aria-expanded="false" aria-controls="collapse-2">
                                        Pertemuan 2
                                    </button>
                                </h6>
                                <div id="collapse-2" className="accordion-collapse collapse"
                                    aria-labelledby="heading-2" data-bs-parent="#accordionExample2">

                                    <div className="accordion-body mt-3">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                    <i className="fas fa-play me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">What
                                                    is Digital Marketing</span>
                                            </div>
                                            <p className="mb-0">11m 20s</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header font-base" id="heading-5">
                                    <button
                                        className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5"
                                        aria-expanded="false" aria-controls="collapse-5">
                                        Pertemuan 3
                                    </button>
                                </h6>
                                <div id="collapse-5" className="accordion-collapse collapse"
                                    aria-labelledby="heading-5" data-bs-parent="#accordionExample2">

                                    <div className="accordion-body mt-3">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                    <i className="fas fa-play me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                            </div>
                                            <p className="mb-0">1m 10s</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header font-base" id="heading-6">
                                    <button
                                        className="accordion-button fw-bold collapsed rounded d-block d-sm-flex d-inline-block"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6"
                                        aria-expanded="false" aria-controls="collapse-6">
                                        Pertemuan 4
                                    </button>
                                </h6>
                                <div id="collapse-6" className="accordion-collapse collapse"
                                    aria-labelledby="heading-6" data-bs-parent="#accordionExample2">

                                    <div className="accordion-body mt-3">



                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                    <i className="fas fa-play me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Creating
                                                    Facebook Pages</span>
                                            </div>
                                            <p className="mb-0 text-truncate">25m 20s</p>
                                        </div>

                                        <hr />


                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                                    <i className="fas fa-play me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Facebook
                                                    Page Custom URL</span>
                                            </div>
                                            <p className="mb-0">11m 30s</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="course-pills-2" role="tabpanel"
                        aria-labelledby="course-pills-tab-2">
                        <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">

                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header font-base" id="heading-1">
                                    <button
                                        className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1"
                                        aria-expanded="true" aria-controls="collapse-1">
                                        Pertemuan 1
                                    </button>
                                </h6>
                                <div id="collapse-1" className="accordion-collapse collapse show"
                                    aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body mt-3">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">

                                                    <i className="fas fa-file-pdf me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                            </div>
                                            <p className="mb-0 text-truncate"><i className="fas fa-download"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header font-base" id="heading-1">
                                    <button
                                        className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2"
                                        aria-expanded="true" aria-controls="collapse-2">
                                        Pertemuan 2
                                    </button>
                                </h6>
                                <div id="collapse-2" className="accordion-collapse collapse"
                                    aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body mt-3">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">

                                                    <i className="fas fa-file-pdf me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                            </div>
                                            <p className="mb-0 text-truncate"><i className="fas fa-download"></i>
                                            </p>
                                        </div>

                                        <hr />


                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">

                                                    <i className="fas fa-file-pdf me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                            </div>
                                            <p className="mb-0 text-truncate"><i className="fas fa-download"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header font-base" id="heading-1">
                                    <button
                                        className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3"
                                        aria-expanded="true" aria-controls="collapse-3">
                                        Pertemuan 3
                                    </button>
                                </h6>
                                <div id="collapse-3" className="accordion-collapse collapse"
                                    aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body mt-3">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">

                                                    <i className="fas fa-file-pdf me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                            </div>
                                            <p className="mb-0 text-truncate"><i className="fas fa-download"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-3">
                                <h6 className="accordion-header font-base" id="heading-1">
                                    <button
                                        className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4"
                                        aria-expanded="true" aria-controls="collapse-4">
                                        Pertemuan 4
                                    </button>
                                </h6>
                                <div id="collapse-4" className="accordion-collapse collapse"
                                    aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body mt-3">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="position-relative d-flex align-items-center">
                                                <a href=" "
                                                    className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">

                                                    <i className="fas fa-file-pdf me-0"></i>
                                                </a>
                                                <span
                                                    className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                                            </div>
                                            <p className="mb-0 text-truncate"><i className="fas fa-download"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent