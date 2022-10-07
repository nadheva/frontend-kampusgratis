import React from 'react'
import ModuleList from './ModuleList';

const MainContent = ({ dModules, isLoading }) => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="card shadow rounded-2 p-0 mt-n5">
                            <div className="card-body p-sm-4">
                                <div className="tab-content" id="course-pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="course-pills-3"
                                        role="tabpanel"
                                        aria-labelledby="course-pills-tab-3"
                                    >
                                        <div className="card">
                                            {/* Card header */}
                                            <div className="card-header  p-0 pb-3">
                                                <h4 className="mb-0">Modul</h4>
                                            </div>
                                            {/* Card Body */}
                                            <ModuleList
                                                dModules={dModules}
                                                isLoading={isLoading}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Btn */}
                    <div className="col-lg-12 col-12 my-4">
                        <a
                            className="btn btn-success btn-lg"
                            href=" "
                            data-bs-toggle="modal"
                            data-bs-target="#modalCreatePost"
                        >
                            Saya sudah paham
                            <i className="fas fa-check ms-2" />
                        </a>
                        <a
                            className="btn btn-secondary ms-3 btn-lg"
                            href="/forum-diskusi"
                        >
                            Tanya forum diskusi
                            <i className="fas fa-comments ms-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent