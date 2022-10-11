import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Sidebar = () => {
    // Get id
    const { moduleId } = useParams()
    console.log(moduleId)


    return (
        <div className="col-xl-4 col-lg-4 col-12">
            <div data-sticky data-margin-top="80" data-sticky-for="768">
                <div className="card card-body shadow  p-4">
                    <div className="row g-5">
                        {/* Viido */}
                        <div className="col-12">
                            <h5 className="mb-4">Vidio Lainnya</h5>
                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                <div className="d-flex">
                                    <Link to="" className="btn btn-danger-soft btn-round mb-0">
                                        <i className="fas fa-play" />
                                    </Link>
                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                                        <h6 className="mb-0">Judul 1</h6>
                                        {/* <p className="mb-2 mb-sm-0 small">{vidio.description}</p> */}
                                    </div>
                                </div>

                                <Link to="" className="btn btn-sm btn-success mb-0">
                                    Play
                                </Link>
                            </div>
                            <hr />

                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                <div className="d-flex">
                                    <Link to="" className="btn btn-danger-soft btn-round mb-0">
                                        <i className="fas fa-play" />
                                    </Link>
                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                                        <h6 className="mb-0">Judul 2</h6>
                                        {/* <p className="mb-2 mb-sm-0 small">{vidio.description}</p> */}
                                    </div>
                                </div>

                                <Link to="" className="btn btn-sm btn-success mb-0">
                                    Play
                                </Link>
                            </div>
                            <hr />

                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                <div className="d-flex">
                                    <Link to="" className="btn btn-danger-soft btn-round mb-0">
                                        <i className="fas fa-play" />
                                    </Link>
                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                                        <h6 className="mb-0">Judul 3</h6>
                                        {/* <p className="mb-2 mb-sm-0 small">{vidio.description}</p> */}
                                    </div>
                                </div>

                                <Link to="" className="btn btn-sm btn-success mb-0">
                                    Play
                                </Link>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar