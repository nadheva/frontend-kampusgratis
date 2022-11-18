import React, { useEffect } from 'react'
import { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import NotifikasiItem from './NotifikasiItem'
import { toast } from 'react-toastify';
import { reset } from '../../../features/notification/notificationSlice';

const NotifikasiList = ({ notif, isLoading }) => {
    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);

    const { message, isSuccess } = useSelector(
        (state) => state.notification
    );

    useEffect(() => {
        if (Object.values(notif).length !== 0) setIsLoaded(true);

        if (message === "SUCCESS_READ" && isSuccess) {
            toast.success("Notifikasi telah dibaca semua.");
            dispatch(reset());
        }
    }, [message, isSuccess, isLoaded, notif]);

    return (
        <section className="pt-0 ">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="card bg-transparent shadow h-100">
                            <div className="card-body py-4">
                                <div className="table-responsive">
                                    <table className={`table ${isLoading ? "" : "table-hover"} p-4 mb-0`}>
                                        <tbody>
                                            {
                                                isLoading && !isLoaded ? (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <SkeletonTheme>
                                                                    <Skeleton height={92} />
                                                                </SkeletonTheme>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <SkeletonTheme>
                                                                    <Skeleton height={94} />
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
                                                                <div className="alert alert-info my-2">Notifikasi tidak ditemukan.</div>
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