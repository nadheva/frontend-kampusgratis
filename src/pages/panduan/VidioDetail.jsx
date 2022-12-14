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
                                                <iframe src={`https://www.youtube.com/embed/${demoEvents?.content?.url.split("?v=")[1]}`}
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
                            {/* <div className="col-xl-4 col-lg-4 col-12">
                                <div data-sticky data-margin-top="80" data-sticky-for="768">
                                    <div className="card card-body shadow  p-4">
                                        <div className="row g-5">
                                            <div className="col-12">
                                                <h5 className="mb-4">Vidio Lainnya</h5>
                                                <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                    <div className="d-flex">
                                                        <Link to="" className="btn btn-danger-soft btn-round mb-0">
                                                            <i className="fas fa-play" />
                                                        </Link>
                                                        <Link to="" className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center">
                                                            <h6 className="mb-0">Judul</h6>
                                                        </Link>
                                                    </div>
                                                    <Link to="" className="btn btn-sm btn-success mb-0" >
                                                        Buka
                                                    </Link>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default VidioDetail;