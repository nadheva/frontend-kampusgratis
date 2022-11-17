import React from 'react'

const CardHeader = () => {
    return (
        <div className="card-header border-bottom px-4 py-3">
            <ul className="nav nav-pills nav-tabs-line py-0" id="course-pills-tab" role="tablist">
                <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill"
                        data-bs-target="#studi-ku-peninjauan" type="button" role="tab" aria-controls="studi-ku-peninjauan"
                        aria-selected="true">Peninjauan</button>
                </li>
                <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill"
                        data-bs-target="#studi-ku-pertemuan-mata-kuliah" type="button" role="tab" aria-controls="studi-ku-pertemuan-mata-kuliah"
                        aria-selected="false">Pertemuan Mata Kuliah</button>
                </li>
            </ul>
        </div>
    )
}

export default CardHeader