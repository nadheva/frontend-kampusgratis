import React from 'react'
import AccordionItem from './AccordionItem'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const AccordionList = ({ session, isLoading }) => {

    return (
        <div className="card-body p-sm-4">
            <div className="tab-content" id="course-pills-tabContent">
                <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel"
                    aria-labelledby="course-pills-tab-1">
                    <div className="accordion accordion-icon accordion-border" id="accordionExample2">
                        {
                            isLoading ? (
                                <div className='row'>
                                    <div className="col-sm-12 col-xl-12">
                                        <SkeletonTheme>
                                            <Skeleton height={50} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-sm-12 col-xl-12">
                                        <SkeletonTheme>
                                            <Skeleton height={50} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-sm-12 col-xl-12">
                                        <SkeletonTheme>
                                            <Skeleton height={50} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-sm-12 col-xl-12">
                                        <SkeletonTheme>
                                            <Skeleton height={50} />
                                        </SkeletonTheme>
                                    </div>
                                </div>
                            ) : (
                                session.map((Data) => (
                                    <AccordionItem key={Data.id} session={Data} />
                                ))
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AccordionList