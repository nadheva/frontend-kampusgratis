import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const Instruction = ({ assigments, isLoading }) => {
    return (
        <div className="col-12">
            {
                isLoading ? (
                    <div className="col-lg-8 mb-5">
                        <SkeletonTheme >
                            <Skeleton height={50} width={400} />
                            <Skeleton height={20} width={300} />
                        </SkeletonTheme>
                    </div>
                ) : assigments == undefined || assigments.length == 0 ? (
                    <>
                        <h4>Tugas </h4>
                        <hr />
                    </>
                ) : (
                    <>
                        <h4>Tugas {assigments.assignment.content}</h4>
                        <hr />
                        <p>
                            {assigments.assignment.description}
                        </p>
                        {
                            assigments.assignment.file_assignment_link.length == 0 ? (
                                <></>
                            ) : (
                                <div className="hstack gap-3 flex-wrap">
                                    <a href={assigments.assignment.file_assignment_link} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-light">
                                        <div className="fs-4">
                                            <i className="bi bi-file-earmark-pdf" />
                                        </div>
                                        {/* <span className="fs-6 mb-0">Tugas 5 pdf</span> */}
                                    </a>
                                </div>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default Instruction