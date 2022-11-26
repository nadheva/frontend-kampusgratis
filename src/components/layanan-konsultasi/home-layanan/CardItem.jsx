import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = () => {
    return (
        <>
            <div className="col-md-6 col-xl-4">
                <Link to="/chat-konsultasi">
                    <div className="card shadow bg-light h-100">
                        <div className="card-header bg-light pb-0 border-0">
                            <i className="bi bi-person-workspace fs-1 text-success" />
                            <h5 className="card-title mb-0 mt-2">
                                Konsultasi Karir Dan Cita - Cita
                            </h5>
                        </div>
                        <div className="card-body">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Jenjang Karir
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Konsentrasi Mata Kuliah
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Jenis Magang
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-xl-4">
                <Link to="/booking-konsultasi">
                    <div className="card shadow bg-light h-100">
                        <div className="card-header bg-light pb-0 border-0">
                            <i className="bi bi-layers fs-1 text-warning" />
                            <h5 className="card-title mb-0 mt-2">Konsultasi Akademik</h5>
                        </div>
                        <div className="card-body">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Skripsi
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Magang
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        penugasan
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Hal-hal terkait penilaian prestasi kampus atau kinerja di
                                        kampus
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-xl-4">
                <Link to="/pilih-dokument">
                    <div className="card bg-light shadow h-100">
                        <div className="card-header bg-light pb-0 border-0">
                            <i className="bi bi-file-earmark-text fs-1 text-orange" />
                            <h5 className="card-title mb-0 mt-2">Layanan Dokumen </h5>
                        </div>
                        <div className="card-body">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Unduh dokumen untuk pengajuan Jenjang Karir
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Konsentrasi Mata Kuliah
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Jenis Magang
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-xl-4">
                <Link to="/pengajuan-dokument">
                    <div className="card bg-light shadow h-100">
                        <div className="card-header bg-light pb-0 border-0">
                            <i className="bi bi-file-bar-graph fs-1 text-primary" />
                            <h5 className="card-title mb-0 mt-2">Layanan Proses Dokument </h5>
                        </div>
                        <div className="card-body">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Ajukan dokumen yang sudah anda download agar dapat di proses
                                        oleh pihak admin
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 col-xl-4">
                <Link to="/status-dokument">
                    <div className="card bg-light shadow h-100">
                        <div className="card-header bg-light pb-0 border-0">
                            <i className="bi bi-file-check fs-1 text-purple" />
                            <h5 className="card-title mb-0 mt-2">
                                Layanan Cek Status Dokument
                            </h5>
                        </div>
                        <div className="card-body">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href=" ">
                                        <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                        Cek status pengajuan dokumen kamu disini
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardItem