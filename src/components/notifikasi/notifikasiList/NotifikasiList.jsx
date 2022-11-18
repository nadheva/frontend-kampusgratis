import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import NotifikasiItem from './NotifikasiItem'

const NotifikasiList = ({ notif, isLoading }) => {
    return (
        <section className="pt-0 ">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="card bg-transparent shadow h-100">
                            <div className="card-body pb-0">
                                <div className="table-responsive">
                                    <table className="table table-hover p-4 mb-0 ">
                                        <tbody>
                                            {
                                                isLoading ? (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <SkeletonTheme>
                                                                    <Skeleton height={50} />
                                                                </SkeletonTheme>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <SkeletonTheme>
                                                                    <Skeleton height={50} />
                                                                </SkeletonTheme>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ) : Object.values(notif).length !== 0 ? (
                                                    notif.map((x) => (
                                                        <NotifikasiItem
                                                            key={x.id}
                                                            notif={x}
                                                        />
                                                    ))
                                                ) : (
                                                    <tr className="pb-0">
                                                        <td colSpan={2} className="p-0 m-0">
                                                            <div className="col-md-12">
                                                                <div className="alert alert-info my-2">Notifikasi  tidak ditemukan.</div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotifikasiList