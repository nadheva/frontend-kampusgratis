import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

const MainContent = () => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow rounded-2 p-0 mt-n5">

                            <div className="card-body p-sm-4">
                                <div className="tab-content" id="course-pills-tabContent">
                                    <div className="tab-pane fade show active" id="course-pills-3" role="tabpanel"
                                        aria-labelledby="course-pills-tab-3">
                                        <div className="card">
                                            <CardHeader />
                                            <CardBody />
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