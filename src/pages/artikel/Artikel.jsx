import React, { useEffect } from 'react'
import CardItem from '../../components/artikel/CardItem'


import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';


// redux
import { useSelector, useDispatch } from 'react-redux'
import { artikelAll, reset } from '../../features/artikel/artikelSlice'


const Artikel = () => {

    // redux
    const dispatch = useDispatch()
    const { artikels, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.artikel
    );

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(artikelAll())

        return () => {
            dispatch(reset())
        }
    }, [artikels, isLoading, isError, isSuccess, message, dispatch])


    return (
        <main>
            {/* ======================= Page Banner START */}
            <section className="py-5">
                <div className="container">
                    <div className="row position-relative">
                        {/* Title and breadcrumb */}
                        <div className="col-lg-10 mx-auto text-center position-relative">
                            {/* Search bar */}
                            <form className="bg-body shadow rounded p-2 mt-4">
                                <div className="input-group">
                                    <input
                                        className="form-control border-0 me-1"
                                        type="search"
                                        placeholder="Search ..."

                                    />
                                    <button type="button" className="btn btn-dark mb-0 rounded">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= Page Banner END */}

            {/* =======================  Page content START */}
            <section className="position-relative pt-0 pt-lg-5">
                <div className="container">

                    {/* Row */}
                    <div className="row g-4">
                        {artikels.length > 0 ? (
                            artikels.map((artikel) => (
                                <CardItem key={artikel.id} artikel={artikel} />
                            ))
                        ) : isLoading ? (
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
                        ) : (
                            <h1>Data Kosong</h1>
                        )}
                    </div>
                    {/* Row end */}

                    {/* Pagination START */}
                    <nav
                        className="d-flex justify-content-center mt-5"
                        aria-label="navigation"
                    >
                        <ul className="pagination pagination-primary-soft rounded mb-0">
                            <li className="page-item mb-0">
                                <a className="page-link" href=" " tabIndex={-1}>
                                    <i className="fas fa-angle-double-left" />
                                </a>
                            </li>
                            <li className="page-item mb-0">
                                <a className="page-link" href=" ">
                                    1
                                </a>
                            </li>
                            <li className="page-item mb-0 active">
                                <a className="page-link" href=" ">
                                    2
                                </a>
                            </li>
                            <li className="page-item mb-0">
                                <a className="page-link" href=" ">
                                    ..
                                </a>
                            </li>
                            <li className="page-item mb-0">
                                <a className="page-link" href=" ">
                                    6
                                </a>
                            </li>
                            <li className="page-item mb-0">
                                <a className="page-link" href=" ">
                                    <i className="fas fa-angle-double-right" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* Pagination END */}
                </div>
            </section>
            {/* ======================= Page content END */}

        </main>

    )
}

export default Artikel