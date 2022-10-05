import React, { useEffect } from 'react';
import Intro from '../../components/studiku/pertemuan/Intro';
import MainContent from '../../components/studiku/pertemuan/MainContent';

import Header from '../default/Header';
import Footer from '../default/Footer';

import { useParams } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getSessions, reset } from '../../features/session/sessionSlice'
import useEffectOnce from '../../helpers/useEffectOnce';

const Pertemuan = () => {
    // Get id
    const { subjectId } = useParams()

    // redux session
    const dispatch = useDispatch()
    const { sessions, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.session
    );

    useEffectOnce(() => {
        dispatch(getSessions(subjectId))
    });

    useEffect(() => {

        if (isError && !isSuccess) {
            // toast.error(message);
            dispatch(reset());
        }

        if (isSuccess && message && !isError) {
            // toast.success(message);
            dispatch(reset());
        }

    }, [sessions, isLoading, isError, isSuccess, message, dispatch])

    return (
        <>
            <main>
                <Header />
                <Intro subjectId={subjectId} />
                <MainContent session={sessions} isLoading={isLoading} />
                <Footer />
            </main>
        </>
    )
}

export default Pertemuan;
