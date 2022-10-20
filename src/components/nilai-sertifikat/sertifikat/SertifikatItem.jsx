import React from 'react'

const SertifikatItem = ({ sertifikat }) => {
    return (
        <div className="col-sm-12 col-lg-12 col-xl-12">
            <div className="card card-body shadow rounded-3">
                <div className="d-flex align-items-center">
                    <div className="icon-lg bg-blue bg-opacity-10 rounded-circle text-blue">
                        <i className="fas fa-file-pdf" />
                    </div>
                    <div className="ms-3">
                        <h5 className="mb-0">
                            <a
                                href=" "
                                className="stretched-link"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                {sertifikat.title}
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SertifikatItem