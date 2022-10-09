import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

import VidioItem from './VidioItem'

const VidioList = ({ videos, isLoading }) => {
    return (
        <div className="col-xl-8 col-lg-8 col-12">
            <div className="row g-4">
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
                    ) : videos == null || videos == 0 ? (
                        <span className='alert alert-danger'>Data kosong</span>
                    ) : (
                        <VidioItem videos={videos} />
                    )
                }
            </div>
        </div>
    )
}

export default VidioList