import React from 'react'

const DataUser = () => {
    return (
        <div className="row py-3">
            <div className="col-md-6">
                <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                        <span>Nama:</span>
                        <span className="h6 mb-0">Louis Ferguson</span>
                    </li>
                    <li className="list-group-item">
                        <span>Nim:</span>
                        <span className="h6 mb-0">201904020</span>
                    </li>
                    <li className="list-group-item">
                        <span>Dosen PA:</span>
                        <span className="h6 mb-0">Naruto</span>
                    </li>
                </ul>
            </div>
            <div className="col-md-6">
                <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                        <span>Tahun Akademik:</span>
                        <span className="h6 mb-0">2020/2021 Genap</span>
                    </li>
                    <li className="list-group-item">
                        <span>Program Studi:</span>
                        <span className="h6 mb-0">TRPL</span>
                    </li>
                    <li className="list-group-item">
                        <span>Semester:</span>
                        <span className="h6 mb-0">4</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DataUser