import React from 'react'

const Rightsidebar = () => {
    return (
        <div className="col-lg-4 pt-5 pt-lg-0">
            <div className="row mb-5 mb-lg-0">
                <div className="col-md-6 col-lg-12">


                    <div className="card card-body card-body-right border p-4">

                        <div className="mt-3 d-grid">
                            <a href=" " className="btn btn-light rounded-4 fs-4 py-2 fw-bold">TUGAS </a>
                            <a href=" " className="btn btn-light rounded-4 mt-2">Qrizz </a>
                        </div>

                        <hr />


                        <h5 className="mb-3">This course includes</h5>
                        <ul className="list-group list-group-borderless border-0">
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="h6 fw-light mb-0"><i
                                    className="fas fa-fw fa-book-open "></i>Lectures</span>
                                <span className="text-white">30</span>
                            </li>
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="h6 fw-light mb-0"><i
                                    className="fas fa-fw fa-clock "></i>Duration</span>
                                <span className="text-white">4h 50m</span>
                            </li>
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="h6 fw-light mb-0"><i
                                    className="fas fa-fw fa-signal "></i>Skills</span>
                                <span className="text-white">Beginner</span>
                            </li>
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="h6 fw-light mb-0"><i
                                    className="fas fa-fw fa-user-clock"></i>Deadline</span>
                                <span className="text-white">Nov 30 2021</span>
                            </li>
                        </ul>

                        <hr />


                        <div className="d-sm-flex align-items-center">

                            <div className="avatar avatar-xl">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg"
                                    alt="avatar" />
                            </div>
                            <div className="ms-sm-3 mt-2 mt-sm-0">
                                <h5 className="mb-0 "><a href=" " className="text-white">By Jacqueline Miller</a>
                                </h5>
                                <p className="mb-0 small">Founder Eduport company</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Rightsidebar