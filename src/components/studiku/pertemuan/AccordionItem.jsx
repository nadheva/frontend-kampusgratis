import React from 'react'
import { NavLink } from 'react-router-dom';

const AccordionItem = ({ session }) => {

    const dataTarget = `#data${session.id}`;
    const dataId = `data${session.id}`;

    return (
        <div className="accordion-item mb-3">
            <h6 className="accordion-header font-base" id="heading-1">
                <button className="accordion-button fw-bold rounded d-flex collapsed"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target={dataTarget} aria-expanded="true"
                    aria-controls="collapse-1">
                    Pertemuan  {session.session_no}
                    <span className="text-secondary ms-auto pe-4"
                        data-bs-toggle="tooltip" data-bs-placement="top"
                        title="Mark as completed">
                        <i className="bi bi-check-circle-fill"></i>
                    </span>
                </button>
            </h6>

            <div id={dataId} className="accordion-collapse collapse "
                aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">

                    {/* Modul */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <a href=' '
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-fw fa-file fs-5"></i>
                                </a>
                                <div className="ms-3">
                                    <NavLink to="/modul"
                                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Modul [Vidio Dokumen]</NavLink>
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

                    {/* Quiz */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <a href=" "
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i
                                        className="fas fa-question-circle fa-fw fs-5"></i>
                                </a>
                                <div className="ms-3">
                                    <NavLink to="/Quiz"
                                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Quiz</NavLink>
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

                    {/* Tugas */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <a href=" "
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-fw fa-file-signature fs-5"></i>
                                </a>
                                <div className="ms-3">
                                    <NavLink to="/penugasan"
                                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Tugas</NavLink>
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

                    {/* Forum diskusi */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <a href=" "
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-comment fa-fw fs-5"></i>
                                </a>
                                <div className="ms-3">
                                    <NavLink to="/forum-diskusi"
                                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Forum
                                        Diskusi</NavLink>
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