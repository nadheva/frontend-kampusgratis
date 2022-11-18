import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { getNotifications } from '../../features/notification/notificationSlice';
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

    useEffectOnce(() => {
        dispatch(getNotifications());
    });

    useEffect(() => {
        if (data?.notifications) setNotif(data?.notifications);

    }, [data]);

    return (
        <>
            <Header />
            <main>
                <Intro />
                <NotifikasiList
                    notif={notif}
                    isLoading={isLoading}
                />
            </main>
            <Footer />
        </>
    )
}
