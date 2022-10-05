import React, { useEffect } from 'react';
import Intro from '../../components/studiku/pertemuan/Intro';
import MainContent from '../../components/studiku/pertemuan/MainContent';

import { useParams } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getSessions, reset } from '../../features/session/sessionSlice'
import useEffectOnce from '../../helpers/useEffectOnce';

const Pertemuan = () => {
    // Get id
    const { subjectId } = useParams()

    // redux
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
                <Intro />
                <MainContent session={sessions} />
            </main>
        </>
    )
}

export default Pertemuan