import React from 'react'
import Pagination from '../../default/Pagination'
import Search from './Search'
import SertifikatList from './SertifikatList'

const MainContent = ({ isLoading, results, isPageLoad, currentPage, lastPage, changePage, renderPage, setSearchTerm, doFilter }) => {
    return (
        <div className="card-body">
            <Search
                setSearchTerm={setSearchTerm}
                doFilter={doFilter}
            />
            <SertifikatList
                data={results}
                isLoading={isLoading}
            />
            <Pagination
                isPageLoad={isPageLoad}
                currentPage={currentPage}
                lastPage={lastPage}
                changePage={changePage}
                renderPage={renderPage}
            />
        </div>
    )
}

export default MainContent