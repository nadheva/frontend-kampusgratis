import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const DataMahasiswa = ({ data, isLoading }) => {
    return (
        <div className="card border bg-transparent rounded-3">
            <div className="card-header bg-transparent border-bottom">
                <h3 className="mb-0">Data Mahasiswa</h3>
            </div>
            <div className="card-body">
                <div className="row">

                    {
                        isLoading ? (
                            <SkeletonTheme>
                                <div className="col-md-6">
                                    <Skeleton height={50} />
                                </div>
                                <div className="col-md-6">
                                    <Skeleton height={50} />
                                </div>
                                <div className="col-md-6">
                                    <Skeleton height={50} />
                                </div>
                                <div className="col-md-6">
                                    <Skeleton height={50} />
                                </div>
                            </SkeletonTheme>
                        ) : (
                            <>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <span>Nama Lengkap :</span>
                                            <span className="h6 mb-0">{data?.student_information?.student_name}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>NIM :</span>
                                            <span className="h6 mb-0">{data?.student_information?.nsn}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>Program Studi :</span>
                                            <span className="h6 mb-0">{data?.student_information?.major}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>IPK :</span>
                                            <span className="h6 mb-0">{data?.student_information?.gpa ? data.student_information.gpa : '0.0'}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item">
                                            <span>Semester :</span>
                                            <span className="h6 mb-0">{data?.student_information?.semester}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>Total SKS Diambil :</span>
                                            <span className="h6 mb-0">{data?.student_information?.credit_finished}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span>Jumlah Mata Kuliah Selesai :</span>
                                            <span className="h6 mb-0">{data?.student_information?.subjects_finished}</span>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DataMahasiswa