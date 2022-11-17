import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from '../../helpers/useEffectOnce';
import { getMySubjects, resetAll } from '../../features/my-study/myStudySlice';

import Footer from '../../components/default/Footer';
import Header from '../../components/default/Header';
import Banner from '../../components/My-Study/subject/Banner';
import Intro from '../../components/My-Study/subject/Intro';
import SubjectList from '../../components/My-Study/subject/SubjectList';
import Pagination from '../../components/default/Pagination';
import SearchBar from '../../components/My-Study/subject/SearchBar';

const Main = () => {

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
    <Header />
    <main>
      <Intro />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SearchBar
                doFilter={doFilter}
                setSearchTerm={setSearchTerm}
              />
              <SubjectList
                isLoading={isLoading}
                results={results}
              />
              <Pagination
                isPageLoad={isPageLoad}
                currentPage={currentPage}
                lastPage={lastPage}
                changePage={changePage}
                renderPage={renderPage}
              />
            </div>
          </div>
        </div>
      </section >
      <Banner />
    </main>
    <Footer />
  </>
}

export default Main