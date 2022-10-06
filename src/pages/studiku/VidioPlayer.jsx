import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import MainContent from '../../components/studiku/vidioPlayer/MainContent'
import RightSidebar from '../../components/studiku/vidioPlayer/RightSidebar'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getVideos, reset } from '../../features/video/videoSlice'
import useEffectOnce from '../../helpers/useEffectOnce';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const VidioPlayer = () => {
    // Get id
    const { videoId } = useParams()

    const dispatch = useDispatch()
    const { videos, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.video
    );

    useEffectOnce(() => {
        dispatch(getVideos(videoId))
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

    }, [videos, isLoading, isError, isSuccess, message, dispatch])


    return (
        <>
            <main>
                <section className="pt-3 pt-xl-5">
                    <div className="container" data-sticky-container>
                        <div className="row g-4">
                            <div className="col-xl-8">
                                <div className="row g-4">
                                    {
                                        videos != null ? (
                                            <MainContent videos={videos} />
                                        ) : isLoading ? (
                                            <div className='row'>
                                                <div className="col-sm-12 col-xl-12">
                                                    <SkeletonTheme>
                                                        <Skeleton height={300} />
                                                    </SkeletonTheme>
                                                </div>
                                                <div className="col-sm-12 col-xl-12">
                                                    <SkeletonTheme>
                                                        <Skeleton height={100} />
                                                    </SkeletonTheme>
                                                </div>
                                            </div>
                                        ) : (
                                            <h2>Data kosong</h2>
                                        )
                                    }

                                </div>
                            </div>
                            <RightSidebar />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default VidioPlayer