import React from 'react'
import { Link } from "react-router-dom";

const Quiz = () => {
    return (
        <>
            <main>
                <section className="bg-blue align-items-center d-flex" style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="text-white">Quiz</h1>
                                <div className="d-flex justify-content-center">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                                            <li className="breadcrumb-item"><Link to="/pertemuan">Pertemuan</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Quiz</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-3 pt-xl-5">
                    <div className="container" data-sticky-container>
                        <div className="row g-4">
                            <div className="card shadow rounded-2 p-0 ">
                                <div className="card-body p-sm-4">
                                    {/* 1 */}
                                    <div className="col-12">
                                        <h2>Aturan</h2>
                                        <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant
                                            private blushes removed an in equally totally if. Delivered dejection necessary
                                            objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
                                        <p>If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced digital marketing course syllabus, let’s look at the scope of digital marketing and what the future holds.</p>
                                        <ul>
                                            <li>Syarat Nilai kelulusan : 80%</li>
                                            <li>Durasi Ujian : 30 Menit</li>
                                        </ul>
                                        <p>
                                            As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.
                                        </p>
                                        <p>Selamat mengerjakan</p>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Link to="/start-quiz" >
                                                <button className="btn btn-primary next-btn mb-0 btn-studiku px-4">Mulai</button>
                                            </Link>
                                        </div>

                                    </div>
                                    {/* 2 */}
                                    <div className="col-12">
                                        <h2>Riwayat</h2>
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Tanggal </th>
                                                        <th>Persentase </th>
                                                        <th>Status </th>
                                                        <th>Action </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>06 Jun 2022 16:15</td>
                                                        <td>80%</td>
                                                        <td>
                                                            <div className="badge bg-success bg-opacity-10 text-success p-2">Lulus</div>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-secondary-soft btn-sm">Lihat Detail</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>06 Jun 2022 16:15</td>
                                                        <td>80%</td>
                                                        <td>
                                                            <div className="badge bg-danger bg-opacity-10 text-danger p-2">Tidak lulus</div>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-secondary-soft btn-sm">Lihat Detail</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Quiz