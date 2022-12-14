import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { getGuideBooks } from '../../features/guide/guideSlice';
import useEffectOnce from "../../helpers/useEffectOnce";

import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'
import Intro from '../../components/panduan/buku-panduan/Intro';
import BukuList from '../../components/panduan/buku-panduan/BukuList';

const BukuPanduan = () => {

    const [demoEvents, setDemoEvents] = useState([]);
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector((state) => state.guide);

    useEffectOnce(() => {
        dispatch(getGuideBooks());
    });

    useEffect(() => {
        if (data?.book) setDemoEvents(data?.book);
    }, [data]);

    return (
        <>
            <Header />
            <main>
                <Intro />
                <BukuList
                    buku={demoEvents}
                    isLoading={isLoading}
                />
            </main>
            <Footer />
        </>
    )
}

export default BukuPanduan