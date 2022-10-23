import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from '../../helpers/useEffectOnce';

import SubjectItem from './SubjectItem';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getMySubjects, reset, resetAll } from '../../features/my-study/myStudySlice';

const SubjectsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [isPageLoad, setIsPageLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [results, setResults] = useState([]);

  const dispatch = useDispatch();

  const { data, isLoading } = useSelector(
    (state) => state.myStudy
  );

  const doFilter = (e) => {
    e.preventDefault();

    dispatch(resetAll());
    dispatch(getMySubjects({ currentPage, search: searchTerm }));

    setIsPageLoad(false);
  }

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

  const changePage = (page) => {
    setIsPageLoad(false);
    setCurrentPage(page);
    setResults([]);
    dispatch(resetAll());
    dispatch(getMySubjects({ currentPage: page, search: searchTerm }));
  }

  useEffectOnce(() => {
    dispatch(resetAll());
    setIsPageLoad(false);
    dispatch(getMySubjects({ currentPage, search: searchTerm }));
  });

  useEffect(() => {
    const { max_page: maxPage, result } = data?.subjects || {};
    if (maxPage !== 0) setLastPage(maxPage);
    if (result) setResults(result);

    if (maxPage && result) setIsPageLoad(true);
  }, [data, isPageLoad, results]);

  return <>
    <div className="col-lg-12">
      <div className="row mb-4 align-items-center">
        <div className="col-xl-8">
          <form className="border rounded p-2">
            <div className="input-group input-borderless">
              <input className="form-control me-1" type="search" placeholder="Cari Mata Kuliah" />
              <button type="button" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search"></i></button>
            </div>
          </form>
        </div>
        <div className="col-12 col-xl-4 d-flex justify-content-between align-items-center mt-3 mt-xl-0">
          <button className="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
            <i className="fas fa-sliders-h me-1"></i> Show filter
          </button>
          {results.length !== 0 && isPageLoad && <>
            <p className="mb-0 text-end">
              Memunculkan {results.length} dari {data?.subjects?.total_subject} Mata Kuliah
            </p>
          </>}
        </div>
      </div>
      <div className="row g-4">
        {isLoading ? <>
          <>
            <div className="col-sm-6 col-xl-4">
              <SkeletonTheme>
                <Skeleton height={323} />
                <Skeleton height={50} />
              </SkeletonTheme>
            </div>
            <div className="col-sm-6 col-xl-4">
              <SkeletonTheme>
                <Skeleton height={323} />
                <Skeleton height={50} />
              </SkeletonTheme>
            </div>
            <div className="col-sm-6 col-xl-4">
              <SkeletonTheme>
                <Skeleton height={323} />
                <Skeleton height={50} />
              </SkeletonTheme>
            </div>
          </>
        </> : <>
          {Object.values(results).length !== 0 ? <>
            {results.map((subject, i) => <SubjectItem key={i} subject={subject.item} student={subject.student_count} lecturers={subject.lecturers} />)}
          </> : <>
            <div className="col-md-12">
              <div className="alert alert-info">Kamu belum mengambil mata kuliah atau belum melakukan administrasi.</div>
            </div>
          </>}
        </>}
      </div>
      <div className="col-12">
        <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
          <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
            {isPageLoad && <>
              {currentPage !== 1 && lastPage > 2 && <li className="page-item mb-0">
                <button className="page-link" onClick={() => changePage(1)}>
                  <i className="fas fa-angle-double-left"></i>
                </button>
              </li>}
              {renderPage()}
              {currentPage !== lastPage && lastPage > 2 && <li className="page-item mb-0">
                <button className="page-link" onClick={() => changePage(lastPage)} >
                  <i className="fas fa-angle-double-right"></i>
                </button>
              </li>}
            </>}
          </ul>
        </nav>
      </div>
    </div>
  </>
}

export default SubjectsList;