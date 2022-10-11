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
            ) : currentPosts == null || currentPosts == 0 ? (
                <span className='alert alert-danger'>Pencarian yang kamu cari tidak ditemukan.</span>
            ) : (
                currentPosts.map((artikel) => (
                    <CardItem key={artikel.id} artikel={artikel} />
                ))
            )}
        </div>
    )
}

export default CardList