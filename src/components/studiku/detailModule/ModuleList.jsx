import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import DokumentItem from './DokumentItem';
import VidioItem from './VidioItem';

const ModuleList = ({ dModules, isLoading }) => {
    return (
        <div className="card-body p-0 pt-3">
            <div className="row g-5">
                {/* Vidio */}
                <div className="col-12">
                    <h5 className="mb-4">Vidio</h5>
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
                            <VidioItem key={vidio.id} vidio={vidio} dModules={dModules} />
                        ))
                    )}
                </div>

                {/* Dokument */}
                <div className="col-12">
                    <h5 className="mb-4">Dokumen</h5>
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
    )
}

export default ModuleList