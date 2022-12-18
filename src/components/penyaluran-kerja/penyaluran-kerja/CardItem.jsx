import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({ kerja }) => {
    return (
        <div className="col-lg-10 col-xl-6">
            <div className="card shadow p-2">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={kerja?.Company?.company_logo}
                            className="rounded-3"
                            alt="kerja"
                            style={{ height: "175px", objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                                <div>
                                    <h5 className="card-title mb-0">
                                        <Link to={`/penyaluran-kerja/pilih-pekerjaan/${kerja?.id}`}>{kerja?.position}</Link>
                                    </h5>
                                    <p className="small mb-2 mb-sm-0">
                                        {kerja?.Company?.company_name}
                                    </p>
                                </div>
                            </div>
                            <p className="text-truncate-2 mb-3">
                                {kerja?.Company?.location}
                            </p>
                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                <h6 className="text-orange mb-0">{kerja?.salary}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem