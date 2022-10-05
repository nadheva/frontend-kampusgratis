import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModulItem from '../../components/studiku/modul/ModulItem';
// import DataModul from '../../json/Modul';

import { useParams } from 'react-router-dom';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getModules, reset } from '../../features/module/moduleSlice'
import useEffectOnce from '../../helpers/useEffectOnce';

const Modul = () => {
    // Get id
    const { sessionId } = useParams();

    // redux session
    const dispatch = useDispatch()
    const { modules, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.module
    );

    useEffectOnce(() => {
        dispatch(getModules(sessionId))
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

    }, [modules, isLoading, isError, isSuccess, message, dispatch])

    return (
        <main>
            {/* Intro */}
            <section className="bg-blue py-7">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-white">Modul</h1>
                            <div className="d-flex justify-content-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                                        <li className="breadcrumb-item"><Link to="/pertemuan">Pertemuan</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Modul</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Content */}
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow rounded-2 p-0 mt-n5">

                                <div className="card-body p-sm-4">
                                    <div className="tab-content" id="course-pills-tabContent">
                                        <div className="tab-pane fade show active" id="course-pills-3" role="tabpanel"
                                            aria-labelledby="course-pills-tab-3">
                                            <div className="card">

                                                {/* Card header */}
                                                <div className="card-header  p-0 pb-3">
                                                    <h4 className="mb-3">Modul</h4>
                                                </div>
                                                {/* card Body */}
                                                <div className="card-body p-0 pt-3">
                                                    <div className="row g-4 justify-content-center">
                                                        {
                                                            isLoading ? (
                                                                <>
                                                                    <div className="col-sm-12 col-xl-12">
                                                                        <SkeletonTheme>
                                                                            <Skeleton height={100} />
                                                                        </SkeletonTheme>
                                                                    </div>
                                                                    <div className="col-sm-12 col-xl-12">
                                                                        <SkeletonTheme>
                                                                            <Skeleton height={100} />
                                                                        </SkeletonTheme>
                                                                    </div>
                                                                    <div className="col-sm-12 col-xl-12">
                                                                        <SkeletonTheme>
                                                                            <Skeleton height={100} />
                                                                        </SkeletonTheme>
                                                                    </div>
                                                                    <div className="col-sm-12 col-xl-12">
                                                                        <SkeletonTheme>
                                                                            <Skeleton height={100} />
                                                                        </SkeletonTheme>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                modules.map((modul, i) => (
                                                                    <ModulItem key={modul.modul.id} modul={modul} i={i + 1} />
                                                                ))
                                                            )
                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Modul