import React from 'react'

import Counter from './Counter'
import CoureList from './CoureList'
import Pagination from '../../element/Pagination';
import Search from '../mycourse/Search';

const MainContent = ({ isLoading, results, isPageLoad, currentPage, lastPage, changePage, renderPage, setSearchTerm, doFilter }) => {
    return (
        <div className="col-xl-9">
            <Counter />
            <div className="row mt-5">
                <div className="col-12">
                    <div className="card bg-transparent border rounded-3">
                        <div className="card-header bg-transparent border-bottom">
                            <h3 className="mb-0">Progres Belajar</h3>
                        </div>
                        <div className="card-body">
                            <Search
                                doFilter={doFilter}
                                setSearchTerm={setSearchTerm}
                            />
                            <CoureList
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
            </div>

        </div>
    )
}

export default MainContent