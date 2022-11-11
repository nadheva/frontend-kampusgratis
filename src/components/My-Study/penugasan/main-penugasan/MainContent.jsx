import React from 'react'

import CardBody from './CardBody'
import CardHeader from './CardHeader'

const MainContent = ({ assigments, ongoing, isLoading, grading, late }) => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow rounded-2 p-0 mt-n5">
                            <CardHeader />
                            <CardBody
                                assigments={assigments}
                                ongoing={ongoing}
                                grading={grading}
                                late={late}
                                isLoading={isLoading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent