import React from "react";

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav
        className="d-flex justify-content-center mt-5"
        aria-label="navigation"
      >
        <ul className="pagination pagination-primary-soft rounded mb-0">
          {currentPage === 1 ? null : (
            <li className="page-item mb-0">
              <a className="page-link" onClick={(e) => paginate(e, currentPage - 1)} href="!#">
                <i className="fas fa-angle-double-left" />
              </a>
            </li>
          )}

          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`currentPage === number ? "is-active" : null , page-item mb-0`}
            >
              <a onClick={(e) => paginate(e, number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}

          {currentPage === pageNumbers[pageNumbers.length - 1] ? null : (
            <li className="page-item mb-0">
              <a className="page-link" onClick={(e) => paginate(e, currentPage + 1)} href="!#">
                <i className="fas fa-angle-double-right" />
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
