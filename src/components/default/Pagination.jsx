import React from 'react'

const Pagination = ({ isPageLoad, currentPage, lastPage, changePage, renderPage }) => {
    return (
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
    )
}

export default Pagination