import React from 'react'
import AccordionItem from './AccordionItem'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const AccordionList = ({ session, isLoading }) => {
    return (
        <div className="card-body p-sm-4">
            <div className="tab-content" id="session-pills-tabContent">
                <div className="tab-pane fade show active" id="session-pills-1" role="tabpanel"
                    aria-labelledby="session-pills-tab-1">
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
                            ) : session == null || session == 0 ? (
                                <span className='alert alert-danger'>Data kosong</span>
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