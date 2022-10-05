import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useEffectOnce from '../../helpers/useEffectOnce';
import { getMajors, reset, resetAll } from '../../features/syllabus/syllabusSlice';
import { toast } from 'react-toastify';

import MajorItem from '../../components/Syllabus/MajorItem';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const [isPageLoad, setIsPageLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFirstPage, setShowFirstPage] = useState(false);
  const [showLastPage, setShowLastPage] = useState(false);
  const [lastPage, setLastPage] = useState(1);

  const dispatch = useDispatch();

  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.syllabus
  );

  const changePage = (page) => {
    setCurrentPage(page);
    dispatch(resetAll());

    if (page === 1) setShowFirstPage(false);
    else setShowFirstPage(true);

    if (page === lastPage) setShowLastPage(false);
    else setShowLastPage(true);

    dispatch(getMajors({ currentPage: page, search: searchTerm }));
  }

  const doFilter = (e) => {
    e.preventDefault();

    dispatch(resetAll());
    dispatch(getMajors({ currentPage, search: searchTerm }));

    setIsPageLoad(false);
    setShowFirstPage(false);
    setShowLastPage(false);
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    dispatch(getMajors({ currentPage, search: searchTerm }));
    setShowLastPage(true);
  });

  useEffect(() => {
    if (data && Object.keys(data).length !== 0) {
      setIsPageLoad(true);
      setLastPage(data.max_page);

      if (currentPage === 1) setShowFirstPage(false);
      else setShowFirstPage(true);

      if (currentPage === lastPage) setShowLastPage(false);
      else setShowLastPage(true);

      if (data?.result?.length === 0) {
        setShowFirstPage(false);
        setShowLastPage(false);
        setIsPageLoad(false);
      }
    } else setIsPageLoad(false);

    if (isError && !isSuccess) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess && message && !isError) {
      toast.success(message);
      dispatch(reset());
    }
  }, [currentPage, lastPage, isPageLoad, searchTerm, showFirstPage, showLastPage, data, isLoading, isError, isSuccess, message, dispatch]);

  const renderPage = () => {
    if (!isPageLoad) return <></>;

    let page = [];

    for (let i = 1; i <= lastPage; i++) {
      page.push(<li className={`page-item mb-0 ${i === currentPage ? "active" : ""}`} >
        {i === currentPage
          ? <span className="page-link">{i}</span>
          : <button className="page-link" onClick={() => changePage(i)}>{i}</button>}
      </li>);
    }

    return page;
  }

  return <>
    <Header />
    <main>
      <section className="bg-blue align-items-center d-flex" style={{ background: "url(assets/images/pattern/04.png) no-repeat center center", backgroundSize: "cover" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-white">Silabus</h1>
              <div className="d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                    <li className="breadcrumb-item"><Link to="/kategori">Kategori</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Silabus</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative" onSubmit={doFilter}>
            <div className="row g-3">
              <div className="col-xl-3">
                <input className="form-control me-1" type="search" placeholder="Masukkan Jurusan yang ingin dicari ..." onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <div className="col-xl-8">
                <div className="row g-3">
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value="">Categories</option>
                      <option>All</option>
                      <option>Development</option>
                      <option>Design</option>
                      <option>Accounting</option>
                      <option>Translation</option>
                      <option>Finance</option>
                      <option>Legal</option>
                      <option>Photography</option>
                      <option>Writing</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value="">Price level</option>
                      <option>All</option>
                      <option>Free</option>
                      <option>Paid</option>
                    </select>
                  </div>
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value="">Skill level</option>
                      <option>All levels</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value="">Language</option>
                      <option>English</option>
                      <option>Francas</option>
                      <option>Russian</option>
                      <option>Hindi</option>
                      <option>Bengali</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-1">
                <button type="submit" className="btn btn-primary mb-0 rounded z-index-1 w-100">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <div className="row mt-3">
            <div className="col-12">
              <div className="row g-4">
                {data?.result?.length === 0 && <>
                  <span className='alert alert-danger'>Pencarian yang kamu cari tidak ditemukan.</span>
                </>}
                {data?.result ? data?.result.map(major => <MajorItem key={major.id} major={major} />) : <>
                  <div className='col-sm-6 col-lg-4'>
                    <SkeletonTheme>
                      <Skeleton height={260} />
                      <Skeleton height={102} />
                      <Skeleton height={67} />
                    </SkeletonTheme>
                  </div>
                  <div className='col-sm-6 col-lg-4'>
                    <SkeletonTheme>
                      <Skeleton height={260} />
                      <Skeleton height={102} />
                      <Skeleton height={67} />
                    </SkeletonTheme>
                  </div>
                  <div className='col-sm-6 col-lg-4'>
                    <SkeletonTheme>
                      <Skeleton height={260} />
                      <Skeleton height={102} />
                      <Skeleton height={67} />
                    </SkeletonTheme>
                  </div>
                </>}
              </div>
              <div className="col-12">
                <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
                  <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    {showFirstPage && isPageLoad && <li className="page-item mb-0">
                      <button className="page-link" onClick={() => changePage(1)}>
                        <i className="fas fa-angle-double-left"></i>
                      </button>
                    </li>}
                    {renderPage()}
                    {showLastPage && isPageLoad && <li className="page-item mb-0">
                      <button className="page-link" onClick={() => changePage(lastPage)} >
                        <i className="fas fa-angle-double-right"></i>
                      </button>
                    </li>}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
    <Footer />
  </>
}

export default Main;