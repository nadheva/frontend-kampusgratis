import React from 'react'

const AccordionItem = () => {
    return (
        <div className="accordion-item mb-3">
            <h6 className="accordion-header font-base" id="heading-1">
                <button className="accordion-button fw-bold rounded d-flex collapsed"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse-1" aria-expanded="true"
                    aria-controls="collapse-1">
                    Week 1 -
                    <span className="small ms-2">April 15 - 20</span>
                    <span className="small ms-0 ms-sm-2 d-none d-sm-block">(4
                        Items)</span>
                    <span className="text-secondary ms-auto pe-4"
                        data-bs-toggle="tooltip" data-bs-placement="top"
                        title="Mark as completed">
                        <i className="bi bi-check-circle-fill"></i>
                    </span>
                </button>
            </h6>

            <div id="collapse-1" className="accordion-collapse collapse "
                aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <a data-glightbox data-gallery="office-tour"
                                href=" "
                                className="icon-md position-relative">
                                <img src="assets/images/courses/4by3/01.jpg"
                                    className="rounded-1" alt="" />
                                <small
                                    className="text-white position-absolute top-50 start-50 translate-middle"><i
                                        className="fas fa-play me-0 "></i></small>
                            </a>
                            <div className="ms-3">
                                <a href="/vidio-player"
                                    className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
                                    What is Digital Marketing What is Digital
                                    Marketing</a>
                                <ul className="nav nav-divider small mb-0">
                                    <li className="nav-item">15m 10s</li>
                                    <li className="nav-item">20pts</li>
                                    <li className="nav-item"><a href=" "
                                        className="text-success">Submitted</a></li>
                                </ul>
                            </div>
                        </div>


                        <a href=" " className="p-2 mb-0 text-success"
                            data-bs-toggle="tooltip" data-bs-placement="top"
                            title="Completed">
                            <i className="bi bi-check-circle-fill"></i>
                        </a>
                    </div>

                    <hr />


                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <div className="d-flex align-items-center">

                                <a href=" "
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-fw fa-file-signature fs-5"></i>
                                </a>

                                <div className="ms-3">
                                    <a href="/penugasan"
                                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Tugas
                                        1 - Research about marketing</a>
                                    <ul className="nav nav-divider small mb-0">
                                        <li className="nav-item">20pts</li>
                                        <li className="nav-item"><a href=" ">Submit</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <a href=" " className="p-2 mb-0 text-success"
                            data-bs-toggle="tooltip" data-bs-placement="top"
                            title="Completed">
                            <i className="bi bi-check-circle-fill"></i>
                        </a>
                    </div>

                    <hr />


                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <div className="d-flex align-items-center">

                                <a href=" "
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-fw fa-file-alt fs-5"></i>
                                </a>

                                <div className="ms-3">
                                    <a href=" "
                                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"
                                        data-bs-toggle="modal"
                                        data-bs-target="#slideModal">
                                        Slide - Digital Marketing
                                    </a>
                                    <ul className="nav nav-divider small mb-0">
                                        <li className="nav-item">View</li>
                                        <li className="nav-item">05 Slide</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="hstack gap-2 align-items-center">

                            <a className="btn btn-sm btn-primary mb-0"
                                data-bs-toggle="collapse" href="#addnote-1"
                                role="button" aria-expanded="false">
                                <span className="d-none d-sm-block">Resume</span>
                                <span className="d-sm-none"><i
                                    className="bi bi-play-fill"></i></span>
                            </a>


                            <a href=" " className="p-2 mb-0 text-secondary"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Mark as Complete">
                                <i className="bi bi-check-circle-fill"></i>
                            </a>
                        </div>
                    </div>

                    <hr />


                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <div className="d-flex align-items-center">

                                <a href=" "
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i
                                        className="fas fa-question-circle fa-fw fs-5"></i>
                                </a>

                                <div className="ms-3">
                                    <a href="/Quiz"
                                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Quiz
                                        - Digital Marketing</a>
                                    <ul className="nav nav-divider small mb-0">
                                        <li className="nav-item">12 April</li>
                                        <li className="nav-item">10 pts</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <a href=" " className="p-2 mb-0 text-secondary"
                            data-bs-toggle="tooltip" data-bs-placement="top"
                            title="Mark as Complete">
                            <i className="bi bi-check-circle-fill"></i>
                        </a>
                    </div>

                    <hr />


                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <div className="d-flex align-items-center">

                                <a href=" "
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-comment fa-fw fs-5"></i>
                                </a>

                                <div className="ms-3">
                                    <a href="/forum-diskusi"
                                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Forum
                                        Diskusi</a>

                                </div>

                            </div>
                        </div>

                        <a href=" " className="p-2 mb-0 text-secondary"
                            data-bs-toggle="tooltip" data-bs-placement="top"
                            title="Mark as Complete">
                            <i className="bi bi-check-circle-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem