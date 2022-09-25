import React from 'react'
import { Link } from 'react-router-dom'

const ModulItem = ({ modul }) => {
    return (
        <div className="col-lg-12 col-xl-12">
            <div className="card shadow p-2">
                <div className="card-body">
                    {/* Title */}
                    <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                        <div>
                            <h5 className="card-title mb-0">
                                <Link to="/vidio-player" >{modul.title}</Link>
                            </h5>
                        </div>

                        <a href=" " className="p-2 mb-0 text-success"
                            data-bs-toggle="tooltip" data-bs-placement="top"
                            title="Completed">
                            <i className="bi bi-check-circle-fill"></i>
                        </a>

                    </div>
                    {/* Content */}
                    <p className="text-truncate-2 mb-3">
                        {modul.body}
                    </p>
                    {/* Info */}
                    <div className="d-sm-flex justify-content-sm-between align-items-center">
                        {/* Title */}
                        <p className="text-small mb-0">{modul.vidio} Vidio {modul.dokumen} Dokumen</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModulItem