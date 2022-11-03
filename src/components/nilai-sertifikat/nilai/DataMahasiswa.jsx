import React from 'react'

const DataMahasiswa = ({ data }) => {
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
                                <span className="h6 mb-0">{data?.student_information?.student_name}</span>
                            </li>
                            <li className="list-group-item">
                                <span>Nim:</span>
                                <span className="h6 mb-0">{data?.student_information?.nsn}</span>
                            </li>
                            <li className="list-group-item">
                                <span>Program Studi:</span>
                                <span className="h6 mb-0">{data?.student_information?.major}</span>
                            </li>
                            <li className="list-group-item">
                                <span>IPK:</span>
                                <span className="h6 mb-0">{data?.student_information?.gpa}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                                <span>Semester:</span>
                                <span className="h6 mb-0">{data?.student_information?.semester}</span>
                            </li>
                            <li className="list-group-item">
                                <span>Total SKS Diambil:</span>
                                <span className="h6 mb-0">{data?.student_information?.credit_finished}</span>
                            </li>
                            <li className="list-group-item">
                                <span>Jumlah Mata Kuliah Diambil:</span>
                                <span className="h6 mb-0">{data?.student_information?.subjects_finished}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataMahasiswa