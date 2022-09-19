import React from 'react'
import AccordionItem from './AccordionItem'

const MainContent = () => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow rounded-2 p-0 mt-n5">
                            {/* Card header */}
                            <div className="card-header border-bottom px-4 pt-3 pb-0">
                                <ul className="nav nav-bottom-line py-0" id="course-pills-tab" role="tablist">
                                    <li className="nav-item me-2 me-sm-4" role="presentation">
                                        <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-1"
                                            data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button"
                                            role="tab" aria-controls="course-pills-1" aria-selected="true">Course
                                            Materials</button>
                                    </li>
                                </ul>
                            </div>

                            {/* Card body */}
                            <div className="card-body p-sm-4">
                                <div className="tab-content" id="course-pills-tabContent">
                                    <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel"
                                        aria-labelledby="course-pills-tab-1">
                                        <div className="accordion accordion-icon accordion-border" id="accordionExample2">
                                            {/* 1 */}
                                            <AccordionItem />

                                            {/* 2 */}
                                            <div className="accordion-item mb-3">
                                                <h6 className="accordion-header font-base" id="heading-2">
                                                    <button className="accordion-button fw-bold collapsed rounded d-flex"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse-2" aria-expanded="false"
                                                        aria-controls="collapse-2">
                                                        Week 2 -
                                                        <span className="small ms-2">April 22 - 24</span>
                                                        <span className="small ms-0 ms-sm-2 d-none d-sm-block">(3
                                                            Items)</span>
                                                    </button>
                                                </h6>
                                                <div id="collapse-2" className="accordion-collapse collapse"
                                                    aria-labelledby="heading-2" data-bs-parent="#accordionExample2">

                                                    <div className="accordion-body mt-3">


                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="position-relative d-flex align-items-center">
                                                                <div className="d-flex align-items-center">

                                                                    <a href=" "
                                                                        className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                                                        <i className="fas fa-fw fa-file-signature fs-5"></i>
                                                                    </a>

                                                                    <div className="ms-3">
                                                                        <a href=" "
                                                                            className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Assignments
                                                                            2 - Research about customer life cycle</a>
                                                                        <ul className="nav nav-divider small mb-0">
                                                                            <li className="nav-item">20pts</li>
                                                                            <li className="nav-item"><a href=" ">Submit</a>
                                                                            </li>
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
            </div>
        </section>
    )
}

export default MainContent