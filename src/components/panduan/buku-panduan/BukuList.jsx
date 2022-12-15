import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import BukuItem from './BukuItem'

const BukuList = ({ isLoading, buku }) => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow rounded-2 p-0 mt-n5">
                            <div className="card-body p-sm-4">
                                {
                                    isLoading ? (
                                        <SkeletonTheme>
                                            <Skeleton height={50} className="mb-2" />
                                            <Skeleton height={50} className="mb-2" />
                                            <Skeleton height={50} className="mb-2" />
                                        </SkeletonTheme>
                                    ) : Object.values(buku).length !== 0 ? (
                                        buku.map((x) => (
                                            <BukuItem key={x.id} buku={x} />
                                        ))
                                    ) : (
                                        <div className="card border border-info border-2 shadow-lg rounded-2 px-4 py-2 my-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="m-0 text-info">
                                                    Tidak ada panduan
                                                </h5>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BukuList