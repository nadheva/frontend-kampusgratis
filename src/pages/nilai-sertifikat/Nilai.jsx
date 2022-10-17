import React from 'react'

import Banner from '../../components/Profile/Banner';
import Sidebar from "../../components/Profile/Sidebar";
import Header from "../default/Header";
import Footer from "../default/Footer";


const Nilai = () => {
    return (
        <>
            <Header />
            <Banner />
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <div className="col-xl-9">

                            {/* Data mahasiswa*/}
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
                            {/* Data mahasiswa*/}

                            {/* Card START */}
                            <div className="card border bg-transparent rounded-3 mt-4">
                                <div className="card-header bg-transparent border-bottom px-3">
                                    <h3 className="card-title mb-0">Rangkuman Nilai</h3>
                                </div>

                                <div className="card-body p-4">
                                    <div className="tab-content" id="course-pills-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="course-pills-1"
                                            role="tabpanel"
                                            aria-labelledby="course-pills-tab-1">
                                            <div
                                                className="accordion accordion-icon accordion-border"
                                                id="accordionExample2">
                                                {/* Item */}
                                                <div className="accordion-item mb-3">
                                                    <h6 className="accordion-header font-base" id="heading-1">
                                                        <button
                                                            className="accordion-button fw-bold rounded d-flex collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapse-1"
                                                            aria-expanded="true"
                                                            aria-controls="collapse-1">
                                                            Semester 1
                                                            <span
                                                                className="text-secondary ms-auto pe-4"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                title="Mark as completed">
                                                                3.90
                                                            </span>
                                                        </button>
                                                    </h6>
                                                    <div
                                                        id="collapse-1"
                                                        className="accordion-collapse collapse show"
                                                        aria-labelledby="heading-1"
                                                        data-bs-parent="#accordionExample2">
                                                        <div className="accordion-body mt-3">
                                                            <div className="table-responsive border-0">

                                                                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col" className="border-0 rounded-start">
                                                                                Nama Matakuliah
                                                                            </th>
                                                                            <th scope="col" className="border-0">
                                                                                Nilai
                                                                            </th>
                                                                            <th scope="col" className="border-0">
                                                                                Grade
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Logika pemograman 1</td>
                                                                            <td>90</td>
                                                                            <td>A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Logika pemograman 2</td>
                                                                            <td>80</td>
                                                                            <td>B</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Logika pemograman 3</td>
                                                                            <td>70</td>
                                                                            <td>C</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Item */}
                                                <div className="accordion-item mb-3">
                                                    <h6 className="accordion-header font-base" id="heading-2">
                                                        <button
                                                            className="accordion-button fw-bold collapsed rounded d-flex"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapse-2"
                                                            aria-expanded="false"
                                                            aria-controls="collapse-2">
                                                            Semester 2
                                                            <span
                                                                className="text-secondary ms-auto pe-4"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                title="Mark as completed">
                                                                3.00
                                                            </span>
                                                        </button>
                                                    </h6>
                                                    <div
                                                        id="collapse-2"
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby="heading-2"
                                                        data-bs-parent="#accordionExample2">

                                                        <div className="accordion-body mt-3">
                                                            <div className="table-responsive border-0">

                                                                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col" className="border-0 rounded-start">
                                                                                Nama Matakuliah
                                                                            </th>
                                                                            <th scope="col" className="border-0">
                                                                                Nilai
                                                                            </th>
                                                                            <th scope="col" className="border-0">
                                                                                Grade
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Logika pemograman 1</td>
                                                                            <td>90</td>
                                                                            <td>A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Logika pemograman 2</td>
                                                                            <td>80</td>
                                                                            <td>B</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Logika pemograman 3</td>
                                                                            <td>70</td>
                                                                            <td>C</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card END */}

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Nilai