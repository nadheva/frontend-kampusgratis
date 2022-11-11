import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ItemTerlambat from './ItemTerlambat'

const ListTerlambat = ({ late, isLoading }) => {
    return (
        <div className="tab-pane fade"
            id="course-pills-2"
            role="tabpanel"
            aria-labelledby="course-pills-tab-2">
            {
                isLoading ? (
                    <SkeletonTheme>
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                        <Skeleton height={50} className="mb-2" />
                    </SkeletonTheme>
                ) : Object.values(late).length !== 0 ? (
                    late.map((x) => (
                        <ItemTerlambat
                            key={x.id}
                            late={x}
                        />
                    ))
                ) : (
                    <div className="card border border-info border-2 shadow-lg rounded-2 px-4 py-2 my-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="m-0 text-info">
                                Tidak ada tugas yang terlambat
                            </h5>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ListTerlambat