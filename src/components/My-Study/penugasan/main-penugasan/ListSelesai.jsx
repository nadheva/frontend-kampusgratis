import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ItemSelesai from './ItemSelesai'

const ListSelesai = ({ finished, isLoading }) => {
    return (
        <div className="tab-pane fade"
            id="course-pills-3"
            role="tabpanel"
            aria-labelledby="course-pills-tab-3">
            {
                isLoading ? (
                    <SkeletonTheme>
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                    </SkeletonTheme>
                ) : Object.values(finished).length !== 0 ? (
                    finished.map((x) => (
                        <ItemSelesai
                            key={x.id}
                            finished={x}
                        />
                    ))
                ) : (
                    <div className="card border border-info border-2 shadow-lg rounded-2 px-4 py-2 my-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="m-0 text-info">
                                Belum ada tugas yang selesai
                            </h5>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ListSelesai