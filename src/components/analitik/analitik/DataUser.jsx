import React from 'react'

const DataUser = () => {
    return (
        <section className="pt-5 pb-0">
            <div className="container">
                <div className="row g-0 g-lg-5">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="card shadow p-2 mb-4 text-center">
                                    <div className="rounded-3">
                                        <img
                                            src="assets/images/instructor/07.jpg"
                                            className="card-img img-profile-khs "
                                            alt="course image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <h1 className="mb-0">Lori Stevens</h1>
                        <p>Ilmu Komputer</p>
                        <ul className="list-group list-group-borderless mt-4">
                            <li className="list-group-item px-0">
                                <span className="h6 fw-light">
                                    <i className="fas fa-fw fa-user text-primary me-1 me-sm-3" />
                                    Nama:
                                </span>
                                <span>Lori Stevens </span>
                            </li>
                            <li className="list-group-item px-0">
                                <span className="h6 fw-light">
                                    <i className="fas fa-fw fa-house-user text-primary me-1 me-sm-3" />
                                    Semester
                                </span>
                                <span>5 </span>
                            </li>
                            <li className="list-group-item px-0">
                                <span className="h6 fw-light">
                                    <i className="fas fa-fw fa-school text-primary me-1 me-sm-3" />
                                    Program Studi:
                                </span>
                                <span>D4 Teknologi Rekayasa Perangkat Lunak</span>
                            </li>
                            <li className="list-group-item px-0">
                                <span className="h6 fw-light">
                                    <i className="fas fa-fw fa-chalkboard text-primary me-1 me-sm-3" />
                                    Jumlah SKS:
                                </span>
                                <span>100 Sks</span>
                            </li>

                            <li className="list-group-item px-0">
                                <span className="h6 fw-light">
                                    <i className="fas fa-fw fa-building text-primary me-1 me-sm-3" />
                                    Kepala Prodi:
                                </span>
                                <span>Rendy S.kom, M.Kom</span>
                            </li>

                            {/* <li className="list-group-item px-0">
                                <span className="h6 fw-light">
                                    <i className="fas fa-fw fa-graduation-cap text-primary me-1 me-sm-3" />
                                    Status
                                </span>
                                <span>Aktif </span>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataUser