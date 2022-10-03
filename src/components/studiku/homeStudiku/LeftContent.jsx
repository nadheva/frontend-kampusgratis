import React from 'react'
import CourseItem from './CourseItem'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getSubject, reset } from '../../../features/subject/subjectSlice'
import { useEffect } from 'react'

const LeftContent = () => {

    // redux
    const dispatch = useDispatch()
    const { data, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.subject
    );

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(getSubject())

        return () => {
            dispatch(reset())
        }
    }, [isLoading, isError, isSuccess, message, dispatch])



    return (
        <div className="col-lg-8 col-xl-9">
            <div className="row mb-4 align-items-center">
                <div className="col-xl-8">
                    <form className="border rounded p-2">
                        <div className="input-group input-borderless">
                            <input className="form-control me-1" type="search" placeholder="Temukan matakuliah anda" />
                            <button type="button" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="col-xl-4 mt-3 mt-xl-0">
                    <form className="border rounded p-2 input-borderless">
                        <select className="form-select form-select-sm js-choice border-0" aria-label=".form-select-sm">
                            <option value="">Most Viewed</option>
                            <option>Recently search</option>
                            <option>Most popular</option>
                            <option>Top rated</option>
                        </select>
                    </form>
                </div>
            </div>

            {/* Content */}
            <div className="row g-4">
                {data.length > 0 ? (
                    data.map((course) => (
                        <CourseItem key={course.item.id} course={course} />
                    ))
                ) : isLoading ? (
                    <>
                        <div className="col-sm-6 col-xl-4">
                            <SkeletonTheme>
                                <Skeleton height={234} />
                                <Skeleton height={100} />
                            </SkeletonTheme>
                        </div>
                        <div className="col-sm-6 col-xl-4">
                            <SkeletonTheme>
                                <Skeleton height={234} />
                                <Skeleton height={100} />
                            </SkeletonTheme>
                        </div>
                        <div className="col-sm-6 col-xl-4">
                            <SkeletonTheme>
                                <Skeleton height={234} />
                                <Skeleton height={100} />
                            </SkeletonTheme>
                        </div>
                    </>
                ) : (
                    <h1>Data Kosong</h1>
                )}
            </div>

            <div className="col-12">
                <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
                    <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                        <li className="page-item mb-0"><a className="page-link" href=" " tabIndex="-1"><i className="fas fa-angle-double-left"></i></a></li>
                        <li className="page-item mb-0 active"><a className="page-link" href=" ">1</a></li>
                        <li className="page-item mb-0" aria-current="page"><a className="page-link" href=" ">2</a></li>
                        <li className="page-item mb-0"><a className="page-link" href=" ">..</a></li>
                        <li className="page-item mb-0"><a className="page-link" href=" ">6</a></li>
                        <li className="page-item mb-0"><a className="page-link" href=" "><i className="fas fa-angle-double-right"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default LeftContent