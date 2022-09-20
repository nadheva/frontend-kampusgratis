import React from 'react'

const Pagination = () => {
  return (
    <div className="col-12">
      <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
        <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
          <li className="page-item mb-0"><a className="page-link" href=" " tabIndex="-1"><i className="fas fa-angle-double-left"></i></a></li>
          <li className="page-item mb-0 active"><a className="page-link" href=" ">1</a></li>
          <li className="page-item mb-0" aria-current="page"><a className="page-link" href=" ">2</a></li>
          <li className="page-item mb-0"><a className="page-link" href=" ">..</a></li>
          <li className="page-item mb-0"><a className="page-link" href=" ">6</a></li>
          <li className="page-item mb-0"><a className="page-link" href=" "><i className="fas fa-angle-double-right"></i></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination