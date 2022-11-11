import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ItemDitugaskan from './ItemDitugaskan'

const ListDitugaskan = ({ isLoading, ongoing }) => {
    return (
        <div className="tab-pane fade"
            id="course-pills-1"
            role="tabpanel"
            aria-labelledby="course-pills-tab-1">
            {
                isLoading ? (
                    <SkeletonTheme>
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                    </SkeletonTheme>
                ) : Object.values(ongoing).length !== 0 ? (
                    ongoing.map((x) => (
                        <ItemDitugaskan
                            key={x.id}
                            ongoing={x}
                        />
                    ))
                ) : (
                    <div className="card border border-info border-2 shadow-lg rounded-2 px-4 py-2 my-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="m-0 text-info">
                                Belum ada tugas
                            </h5>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ListDitugaskan