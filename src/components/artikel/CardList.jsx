import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import CardItem from './CardItem';

const CardList = ({ currentPosts, isLoading }) => {
    return (
        <div className="row g-4">
            {isLoading ? (
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <SkeletonTheme>
                            <Skeleton height={189} className="mb-2" />
                            <Skeleton height={26} />
                            <Skeleton height={22} />
                        </SkeletonTheme>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <SkeletonTheme>
                            <Skeleton height={189} className="mb-2" />
                            <Skeleton height={26} />
                            <Skeleton height={22} />
                        </SkeletonTheme>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <SkeletonTheme>
                            <Skeleton height={189} className="mb-2" />
                            <Skeleton height={26} />
                            <Skeleton height={22} />
                        </SkeletonTheme>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <SkeletonTheme>
                            <Skeleton height={189} className="mb-2" />
                            <Skeleton height={26} />
                            <Skeleton height={22} />
                        </SkeletonTheme>
                    </div>
                </div>
            ) : Object.values(currentPosts).length !== 0 ? (
                currentPosts.map((artikel) => (
                    <CardItem key={artikel.id} artikel={artikel} />
                ))
            ) : (
                <span className='alert alert-danger'>Belum ada postingan</span>
            )}
        </div>
    )
}

export default CardList