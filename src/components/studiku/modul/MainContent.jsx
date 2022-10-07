import React from 'react'
import ModulList from './ModulList';

const MainContent = ({ modules, isLoading }) => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
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
                                                <h4 className="mb-3">Modul</h4>
                                            </div>
                                            {/* card Body */}
                                            <ModulList
                                                modules={modules}
                                                isLoading={isLoading}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent