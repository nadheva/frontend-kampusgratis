import React from 'react'
import Search from './Search'
import CardList from './CardList'
import Pagination from '../../element/Pagination'

const MainContent = ({ isLoading, results, isPageLoad, currentPage, lastPage, changePage, renderPage, setSearchTerm, doFilter }) => {
    return (
        <div className="col-xl-9">
            <div className="card bg-transparent border rounded-3">
                <div className="card-header bg-transparent border-bottom">
                    <h3 className="mb-0">Daftar Mata Kuliah</h3>
                </div>
                <div className="card-body p-3 p-md-4">
                    <Search
                        doFilter={doFilter}
                        setSearchTerm={setSearchTerm}
                    />
                    <CardList
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
    )
}

export default MainContent