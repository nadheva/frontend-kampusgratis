import React from 'react';
import { Link } from 'react-router-dom';

const DetailModul = () => {
    return (
        <main>
            {/* Intro */}
            <section className="bg-blue py-7">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-white">Modul</h1>
                            <div className="d-flex justify-content-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                                        <li className="breadcrumb-item"><Link to="/pertemuan">Pertemuan</Link></li>
                                        <li className="breadcrumb-item"><Link to="/modul">Modul</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Detail Modul</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Content */}
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="card shadow rounded-2 p-0 mt-n5">

                                <div className="card-body p-sm-4">
                                    <div className="tab-content" id="course-pills-tabContent">
                                        <div className="tab-pane fade show active" id="course-pills-3" role="tabpanel"
                                            aria-labelledby="course-pills-tab-3">
                                            <div className="card">
                                                {/* Card header */}
                                                <div className="card-header  p-0 pb-3">
                                                    <h4 className="mb-0">Modul</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illo rerum vero reiciendis omnis dolor consequatur earum. Sint eum facilis hic doloribus, excepturi nesciunt quo labore suscipit, nobis, laborum totam. adipisicing elit. Quos illo rerum vero reiciendis omnis dolor consequatur earum.</p>
                                                </div>

                                                {/* Card Body */}
                                                <div className="card-body p-0 pt-3">
                                                    <div className="row g-5">
                                                        {/* Lecture item START */}
                                                        <div className="col-12">
                                                            {/* Curriculum item */}
                                                            <h5 className="mb-4">Vidio</h5>
                                                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                                <div className="d-flex">
                                                                    <Link to="/vidio-player" className="btn btn-danger-soft btn-round mb-0">
                                                                        <i className="fas fa-play" />
                                                                    </Link>
                                                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                                                                        <h6 className="mb-0">Introduction</h6>
                                                                        <p className="mb-2 mb-sm-0 small">10m 56s</p>
                                                                    </div>
                                                                </div>
                                                                {/* Button */}
                                                                <Link to="/vidio-player" className="btn btn-sm btn-success mb-0">
                                                                    Play
                                                                </Link>
                                                            </div>
                                                            {/* Divider */}
                                                            <hr />
                                                            {/* Curriculum item */}
                                                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                                <div className="d-flex">
                                                                    <Link to="/vidio-player"
                                                                        className="btn btn-danger-soft btn-round mb-0 flex-shrink-0">
                                                                        <i className="fas fa-play" />
                                                                    </Link>
                                                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                                                                        <h6 className="mb-0">What is Digital Marketing</h6>
                                                                        <p className="mb-2 mb-sm-0 small">18m 30s</p>
                                                                    </div>
                                                                </div>
                                                                {/* Button */}
                                                                <Link to="/vidio-player" className="btn btn-sm btn-success mb-0">
                                                                    Play
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        {/* Lecture item END */}
                                                        {/* Lecture item START */}
                                                        <div className="col-12">
                                                            {/* Curriculum item */}
                                                            <h5 className="mb-4">Dokumen</h5>

                                                            {/* Curriculum item */}
                                                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                                <div className="d-flex">
                                                                    <a href=" " className="btn btn-light btn-round mb-0 flex-shrink-0">
                                                                        <i className="bi bi-file-earmark-pdf" />
                                                                    </a>
                                                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                                                                        <h6 className="mb-0">Dokumen 1</h6>
                                                                        <p className="mb-2 mb-sm-0 small">Pertemuan 1</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Divider */}
                                                            <hr />
                                                            {/* Curriculum item */}
                                                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                                <div className="d-flex">
                                                                    <a href=" " className="btn btn-light btn-round mb-0 flex-shrink-0">
                                                                        <i className="bi bi-file-earmark-pdf" />
                                                                    </a>
                                                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                                                                        <h6 className="mb-0">Dokumen 2</h6>
                                                                        <p className="mb-2 mb-sm-0 small">Pertemuan 1</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Lecture item END */}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Btn */}
                        <div className="col-lg-12 col-12 my-4">
                            <a className="btn btn-success btn-lg" href=" " data-bs-toggle="modal" data-bs-target="#modalCreatePost">
                                Saya sudah paham
                                <i className="fas fa-check ms-2" />
                            </a>
                            <a className="btn btn-secondary ms-3 btn-lg" href="/forum-diskusi">
                                Tanya forum diskusi
                                <i className="fas fa-comments ms-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Modal */}
            <div
                className="modal fade"
                id="modalCreatePost"
                tabIndex={-1}
                aria-labelledby="modalLabelCreatePost"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Title */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabelCreatePost">
                                Catatan
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            {/* Form START */}
                            <form>

                                {/* Description */}
                                <div className="mb-3">
                                    <label className="form-label">Apa pelajaran yang kamu dapat dari pertemuan ini? </label>
                                    <textarea
                                        className="form-control"
                                        rows={4}
                                        placeholder="Description here"
                                        defaultValue={""}
                                    />
                                </div>

                            </form>
                            {/* Form END */}
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success-soft">
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default DetailModul