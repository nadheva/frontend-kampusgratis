import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify';

// Component
import VidioList from '../../components/studiku/vidioPlayer/VidioList';
import Sidebar from '../../components/studiku/vidioPlayer/Sidebar';
import Header from '../default/Header';
import Footer from '../default/Footer';

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getVideos, reset } from '../../features/video/videoSlice'
import useEffectOnce from '../../helpers/useEffectOnce';

const VidioPlayer = () => {
    // Get id
    const { videoId } = useParams()

    // Redux
    const dispatch = useDispatch()
    const { videos, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.video
    );

    useEffectOnce(() => {
        dispatch(getVideos(videoId))
    });

    useEffect(() => {
        if (isError && !isSuccess) {
            toast.error(message);
            dispatch(reset());
        }
        if (isSuccess && message && !isError) {
            toast.success(message);
            dispatch(reset());
        }

    }, [videos, isLoading, isError, isSuccess, message, dispatch])

    return (
        <>
            <Header />
            <main>
                <section className="pt-3 pt-xl-5">
                    <div className="container" data-sticky-container>
                        <div className="row g-4">
                            <VidioList
                                videos={videos}
                                isLoading={isLoading}
                            />
                            <Sidebar />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default VidioPlayer