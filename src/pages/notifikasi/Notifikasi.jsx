import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { getNotifications, readNotification, reset } from '../../features/notification/notificationSlice';
import useEffectOnce from "../../helpers/useEffectOnce";

import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'
import Intro from '../../components/notifikasi/notifikasiList/Intro'
import NotifikasiList from '../../components/notifikasi/notifikasiList/NotifikasiList'

export const Notifikasi = () => {
    const dispatch = useDispatch();
    const [notif, setNotif] = useState({});

    const { data, isLoading } = useSelector(
        (state) => state.notification
    );

    useEffect(() => {
        if (data?.notifications) setNotif(data?.notifications);
    }, [data]);

    const handleRead = () => {
        dispatch(readNotification());
    }

    return (
        <>
            <Header />
            <main>
                <Intro
                    handleRead={handleRead}
                />
                <NotifikasiList
                    notif={notif}
                    isLoading={isLoading}
                />
            </main>
            <Footer />
        </>
    )
}
