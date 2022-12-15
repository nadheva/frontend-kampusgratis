import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { getApplication, reset, resetAll } from '../../features/guide/guideSlice';
import useEffectOnce from "../../helpers/useEffectOnce";

import { Link } from 'react-router-dom'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const KamusAplikasi = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [isPageLoad, setIsPageLoad] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [results, setResults] = useState([]);

    const dispatch = useDispatch();

    const { data, isLoading } = useSelector(
        (state) => state.guide
    );

    const doFilter = (e) => {
        e.preventDefault();

        dispatch(resetAll());
        dispatch(getApplication({ currentPage, search: searchTerm }));

        setIsPageLoad(false);
    };

    const renderPage = () => {
        if (!isPageLoad) return <></>;

        let page = [];

        for (let i = 1; i <= lastPage; i++) {
            page.push(
                <li className={`page-item mb-0 ${i === currentPage ? "active" : ""}`}>
                    {i === currentPage ? (
                        <span className="page-link">{i}</span>
                    ) : (
                        <button className="page-link" onClick={() => changePage(i)}>
                            {i}
                        </button>
                    )}
                </li>
            );
        }

        return page;
    };

    const changePage = (page) => {
        setIsPageLoad(false);
        setCurrentPage(page);
        setResults([]);
        dispatch(resetAll());
        dispatch(getApplication({ currentPage: page, search: searchTerm }));
    };

    useEffectOnce(() => {
        dispatch(resetAll());
        setIsPageLoad(false);
        dispatch(getApplication({ currentPage, search: searchTerm }));
    });

    useEffect(() => {
        const { max_page: maxPage, result } = data?.application || {};
        if (maxPage !== 0) setLastPage(maxPage);
        if (result) setResults(result);

        if (maxPage && result) setIsPageLoad(true);
    }, [data, isPageLoad, results]);

    return (
        <>
            <Header />
            <main>
                <section className="bg-blue py-7">
                    <div className="container">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-12">
                                <h1 className="text-white text-center">
                                    Kamus Aplikasi
                                </h1>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow rounded-2 p-0 mt-n5">
                                    <div className="card-body p-sm-4">
                                        <div className="card">
                                            <div className="card-header p-0 pb-3">
                                                <form className="row g-4" onSubmit={doFilter}>
                                                    <div className="col-sm-12 col-lg-12">
                                                        <div className="position-relative">
                                                            <input
                                                                className="form-control pe-5 bg-transparent"
                                                                type="search"
                                                                placeholder="Search"
                                                                aria-label="Search"
                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                            />
                                                            <button
                                                                className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                                                                type="submit"
                                                            >
                                                                <i className="fas fa-search fs-6 " />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-body p-0 pt-3">
                                                <div className="vstack gap-3">
                                                    {
                                                        results.map((x) => (
                                                            <Link to={`/panduan/kamus-KG/kamus-aplikasi/${x.id}`}>
                                                                <div className="border-bottom py-2">
                                                                    <h5>{x.word}</h5>
                                                                </div>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default KamusAplikasi