import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = () => {

    const dataKonsultasi = [
        {
            title: "Konsultasi Karir dan Cita Cita",
            link: "",
        },
        {
            title: "Konsultasi Masalah Keluarga dan Keuangan",
            link: "",
        },
        {
            title: "Konsultasi Masalah Pribadi dan Cuti Kuliah",
            link: "",
        },
        {
            title: "Konsultasi Akademik",
            link: "",
        },
        {
            title: "Konsultasi Lainnya",
            link: "",
        },
    ]

    const dataLayanan = [
        {
            title: "Dokumen (Unduh dokumen untuk pengajuan Jenjang Karir, Konsentrasi Mata Kuliah, Jenis Magang)",
            link: "",
        },
        {
            title: "Proses Dokumen (Ajukan dokumen yang sudah anda download agar dapat di proses oleh pihak admin)",
            link: "",
        },
        {
            title: "Cek Status Dokumen (Cek status pengajuan dokumen kamu disini)",
            link: "",
        },
    ]
    return (
        <>
            <div className="col-md-6 col-xl-6">
                <div className="card shadow bg-light h-100 ">
                    <div className="card-header bg-light pb-0 border-0">
                        <i className="bi bi-person-workspace fs-1 text-success" />
                        <h5 className="card-title mb-0 mt-2">
                            Konsultasi
                        </h5>
                    </div>
                    <div className="card-body">
                        <ul className="nav flex-column">
                            {
                                dataKonsultasi.map((x, i) => (
                                    <li className="nav-item">
                                        <Link to={x.link} className="nav-link d-flex" >
                                            <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                            {x.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-6 col-xl-4">
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
            </div> */}
            <div className="col-md-6 col-xl-6">
                <div className="card bg-light shadow h-100">
                    <div className="card-header bg-light pb-0 border-0">
                        <i className="bi bi-file-earmark-text fs-1 text-orange" />
                        <h5 className="card-title mb-0 mt-2">Layanan</h5>
                    </div>
                    <div className="card-body">
                        <ul className="nav flex-column">
                            {
                                dataLayanan.map((x, i) => (
                                    <li className="nav-item">
                                        <Link to={x.link} className="nav-link d-flex" >
                                            <i className="fas fa-angle-right text-primary pt-1 me-2" />
                                            {x.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-6 col-xl-4">
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
            </div> */}
            {/* <div className="col-md-6 col-xl-4">
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
            </div> */}
        </>
    )
}

export default CardItem