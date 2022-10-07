import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ModulItem from './ModulItem'

const ModulList = ({ modules, isLoading }) => {
    return (
        <div className="card-body p-0 pt-3">
            <div className="row g-4 justify-content-center">
                {isLoading ? (
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
                ) : modules == null || modules == 0 ? (
                    <span className='alert alert-danger'>Data Kosong</span>
                ) : (
                    modules.map((modul, i) => (
                        <ModulItem
                            key={modul.id}
                            modul={modul}
                            i={i + 1}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default ModulList