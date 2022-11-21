import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ItemGrading from './ItemGrading'

const ListGrading = ({ grading, isLoading }) => {
    return (
        <div className="tab-pane fade"
            id="course-pills-5"
            role="tabpanel"
            aria-labelledby="course-pills-tab-5">
            {
                isLoading ? (
                    <SkeletonTheme>
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                    </SkeletonTheme>
                ) : Object.values(grading).length !== 0 ? (
                    grading.map((x) => (
                        <ItemGrading
                            key={x.id}
                            grading={x}
                        />
                    ))
                ) : (
                    <div className="card border border-info border-2 shadow-lg rounded-2 px-4 py-2 my-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="m-0 text-info">
                                Belum ada tugas yang dalam penilaian
                            </h5>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ListGrading