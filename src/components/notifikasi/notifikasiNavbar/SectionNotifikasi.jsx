import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import { getNotifications, readNotification } from '../../../features/notification/notificationSlice';
import useEffectOnce from "../../../helpers/useEffectOnce";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import NotifikasiItem from './NotifikasiItem';

const SectionNotifikasi = () => {
    const [notifications, setNotifications] = useState([]);
    const dispatch = useDispatch();

    const { data, isLoading } = useSelector(
        (state) => state.notification
    );

    const handleRead = () => {
        dispatch(readNotification());
    }

    useEffectOnce(() => {
        dispatch(getNotifications());
    });

    useEffect(() => {
        if (data?.notifications) {
            setNotifications(data?.notifications.filter(notification => notification.is_read == false));
        }
    }, [data]);

    return (
        <div className="dropdown ms-3">
            <a className="btn btn-light btn-round mb-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside">
                <i className="bi bi-bell fa-fw" />
            </a>
            {notifications?.length !== 0 ? <span className="notif-badge animation-blink" /> : ""}
            <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                <div className="card bg-transparent">
                    <div className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                        <h6 className="m-0">
                            Notifikasi
                            <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                                {notifications?.length} terbaru
                            </span>
                        </h6>
                        {notifications?.length !== 0 ? <>
                            <button onClick={handleRead} className="small btn btn-link">
                                Baca semua
                            </button>
                        </> : null}
                    </div>
                    <div className="card-body p-0">
                        <ul className="list-group list-unstyled list-group-flush">
                            {
                                isLoading ? (
                                    <>
                                        <li>
                                            <div className="list-group-item-action p-3">
                                                <SkeletonTheme>
                                                    <Skeleton height={50} />
                                                </SkeletonTheme>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list-group-item-action p-3">
                                                <SkeletonTheme>
                                                    <Skeleton height={50} />
                                                </SkeletonTheme>
                                            </div>
                                        </li>
                                    </>
                                ) : Object.values(notifications).length !== 0 ? (
                                    notifications.slice(0, 4).map((x) => (
                                        <NotifikasiItem
                                            key={x.id}
                                            notif={x}
                                        />
                                    ))
                                ) : (
                                    <div className="alert text-danger text-center my-2">Tidak ada notifikasi baru.</div>
                                )
                            }
                        </ul>
                    </div>
                    <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                        <Link to="/notifikasi" className="stretched-link">
                            Lihat semua notifikasi
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionNotifikasi