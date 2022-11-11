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
                        <h4 className="text-danger">Belum ada tugas</h4>
                        <hr />
                    </>
                ) : (
                    <>
                        <h4> {assigments?.assignment?.content}</h4>
                        <hr />
                        <p>
                            {assigments?.assignment?.description}
                        </p>
                        {
                            assigments?.assignment?.file_assignment_link?.length == 0 ? (
                                <></>
                            ) : (
                                <div className="hstack gap-3 flex-wrap">
                                    <a target="_blank" href={assigments?.assignment?.file_assignment_link}>
                                        {assigments?.assignment?.file_assignment.split("document_assignment/")}
                                        <i className="fas fa-external-link-square-alt ms-1"></i>
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