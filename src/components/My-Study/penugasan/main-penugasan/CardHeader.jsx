import React from 'react'

const CardHeader = () => {
    return (
        <div className="card-header border-bottom px-4 pt-3 pb-0">
            <ul className="nav nav-bottom-line py-0" id="course-pills-tab" role="tablist">
                <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button
                        className="nav-link mb-2 mb-md-0 active"
                        id="course-pills-tab-1"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-4"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-4"
                        aria-selected="true">
                        Semua
                    </button>
                </li>
                <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button
                        className="nav-link mb-2 mb-md-0"
                        id="course-pills-tab-1"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-1"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-1"
                        aria-selected="true">
                        Ditugaskan
                    </button>
                </li>
                <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button
                        className="nav-link mb-2 mb-md-0"
                        id="course-pills-tab-2"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-2"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-2"
                        aria-selected="false">
                        Terlambat
                    </button>
                </li>
                <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button
                        className="nav-link mb-2 mb-md-0"
                        id="course-pills-tab-3"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-5"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-5"
                        aria-selected="false">
                        Penilaian
                    </button>
                </li>
                <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button
                        className="nav-link mb-2 mb-md-0"
                        id="course-pills-tab-3"
                        data-bs-toggle="pill"
                        data-bs-target="#course-pills-3"
                        type="button"
                        role="tab"
                        aria-controls="course-pills-3"
                        aria-selected="false">
                        Selesai
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default CardHeader