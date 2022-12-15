import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { getGuide, resetAll, reset } from '../../features/guide/guideSlice';
import useEffectOnce from "../../helpers/useEffectOnce";

import { Link, useParams } from 'react-router-dom';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const VidioDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const [demoEvents, setDemoEvents] = useState([]);

    const { data, isLoading } = useSelector((state) => state.guide);

    const fetchAll = async () => {
        await Promise.all([
            dispatch(getGuide(id)),
        ]);
    }

    useEffectOnce(() => {
        dispatch(resetAll());
        fetchAll();
    });

    useEffect(() => {
        if (data?.guide) setDemoEvents(data?.guide);
    }, [data]);

    return (
        <>
            <Header />
            <main>
                {
                    isLoading || Object.keys(demoEvents).length === 0 ? (
                        <section className='bg-light py-0 py-sm-5'>
                            <div className='container text-center' style={{ marginTop: '173px', marginBottom: '173px' }}>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='spinner-border' role='status'>
                                            <span className='visually-hidden'>Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section className="pt-3 pt-xl-5">
                            <div className="container" data-sticky-container>
                                <div className="row g-4 justify-content-center">
                                    <div className="col-xl-9 col-lg-8 col-12">
                                        {
                                            isLoading ? (
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
                                                <>
                                                    <div className="col-12 position-relative">
                                                        <iframe src={`https://www.youtube.com/embed/${demoEvents?.content?.url?.split("?v=")[1]}`}
                                                            title={demoEvents?.title}
                                                            width="100%"
                                                            height="500px"
                                                            display="block"
                                                            position="relative" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="bg-body shadow rounded-2 p-4">
                                                            <h5 className="mb-3 ">{demoEvents?.title ? demoEvents.title : "Tidak ada judul."}</h5>
                                                            <p className="mb-0">{demoEvents?.description ? demoEvents.description : "Tidak ada deskripsi."}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </main>
            <Footer />
        </>
    )
}

export default VidioDetail;