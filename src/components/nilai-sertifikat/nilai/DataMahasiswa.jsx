import React from 'react'

const DataMahasiswa = () => {
    return (
        <div className="card border bg-transparent rounded-3">
            <div className="card-header bg-transparent border-bottom">
                <h3 className="mb-0">Data Mahasiswa</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                                <span>Nama:</span>
                                <span className="h6 mb-0">Mr.Zoo</span>
                            </li>
                            <li className="list-group-item">
                                <span>Nim:</span>
                                <span className="h6 mb-0">201904020</span>
                            </li>
                            <li className="list-group-item">
                                <span>Program Studi:</span>
                                <span className="h6 mb-0">TRPL</span>
                            </li>
                            <li className="list-group-item">
                                <span>IPK:</span>
                                <span className="h6 mb-0">3.4</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                                <span>Semester:</span>
                                <span className="h6 mb-0">4</span>
                            </li>
                            <li className="list-group-item">
                                <span>Total SKS Diambil:</span>
                                <span className="h6 mb-0">11</span>
                            </li>
                            <li className="list-group-item">
                                <span>Jumlah Mata Kuliah Diambil:</span>
                                <span className="h6 mb-0">21</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataMahasiswa