import React from 'react'
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import CourseItem from "./CourseItem";

const CourseList = ({ course, isLoading }) => {
    return (
        <div className="row g-4">
            {isLoading ? (
                <>
                    <div className="col-sm-6 col-xl-4">
                        <SkeletonTheme>
                            <Skeleton height={234} />
                            <Skeleton height={50} />
                        </SkeletonTheme>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                        <SkeletonTheme>
                            <Skeleton height={234} />
                            <Skeleton height={50} />
                        </SkeletonTheme>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                        <SkeletonTheme>
                            <Skeleton height={234} />
                            <Skeleton height={50} />
                        </SkeletonTheme>
                    </div>
                </>
            ) : course == null || course == 0 || course.length == undefined ? (
                <span className='alert alert-danger'>Pencarian yang kamu cari tidak ditemukan.</span>
            ) : (
                course.map((course) => (
                    <CourseItem key={course.item.id} course={course} />
                ))
            )}
        </div >
    )
}

export default CourseList