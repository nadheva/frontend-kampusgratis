import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import DokumentItem from '../detailModule/DokumentItem';
import VidioItem from '../detailModule/VidioItem';

// redux
import { useSelector, useDispatch } from "react-redux";
import {
    getDetailModules,
    reset,
} from "../../../features/detailmodule/detailModuleSlice";
import useEffectOnce from "../../../helpers/useEffectOnce";

const Sidebar = () => {
    // Get id
    const { moduleId } = useParams()

    // Redux
    const dispatch = useDispatch();
    const { dModules, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.detailModule
    );

    useEffectOnce(() => {
        dispatch(getDetailModules(moduleId));
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

    }, [dModules, isLoading, isError, isSuccess, message, dispatch]);

    return (
        <div className="col-xl-4 col-lg-4 col-12">
            <div data-sticky data-margin-top="80" data-sticky-for="768">
                <div className="card card-body shadow  p-4">
                    <div className="row g-5">
                        {/* Vidio */}
                        <div className="col-12">
                            <h5 className="mb-4">Vidio Lainnya</h5>
                            {isLoading ? (
                                <div className="row">
                                    <div className="col-sm-12 col-xl-12">
                                        <SkeletonTheme>
                                            <Skeleton height={50} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-sm-12 col-xl-12">
                                        <SkeletonTheme>
                                            <Skeleton height={50} />
                                        </SkeletonTheme>
                                    </div>
                                </div>
                            ) : dModules == null || dModules == 0 ? (
                                <span className='alert alert-danger'>Data kosong</span>
                            ) : (
                                dModules.videos.map((vidio) => (
                                    <VidioItem
                                        key={vidio.id} vidio={vidio}
                                        dModules={dModules}
                                    />
                                ))
                            )}
                        </div>

                        {/* dokument */}
                        <div className="col-12">
                            <h5 className="mb-4">Dokument </h5>
                            {isLoading ? (
                                <div className="row">
                                    <div className="col-sm-12 col-xl-12">
                                        <SkeletonTheme>
                                            <Skeleton height={50} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-sm-12 col-xl-12">
                                        <SkeletonTheme>
                                            <Skeleton height={50} />
                                        </SkeletonTheme>
                                    </div>
                                </div>
                            ) : dModules == null || dModules == 0 ? (
                                <span className='alert alert-danger'>Data kosong</span>
                            ) : (
                                dModules.documents.map((dokument) => (
                                    <DokumentItem
                                        key={dokument.id}
                                        dokument={dokument}
                                    />
                                ))
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar