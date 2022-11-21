import React from 'react'

import CardBody from './CardBody'
import CardHeader from './CardHeader'

const MainContent = ({ assignments, ongoing, isLoading, grading, late, finished }) => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow rounded-2 p-0 mt-n5">
                            <CardHeader />
                            <CardBody
                                assignments={assignments}
                                ongoing={ongoing}
                                grading={grading}
                                late={late}
                                isLoading={isLoading}
                                finished={finished}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent