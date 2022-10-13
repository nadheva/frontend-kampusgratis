import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SubjectItem = ({ subject }) => {
  useEffect(() => {

  }, [])

  return <>
    <div className="col-sm-6 col-xl-4">
      <div className="card shadow h-100">
        <Link to={subject.Subject.id}>
          <img src={subject.Subject.thumbnail_link} style={{ height: "180px", objectFit: "cover" }} className="card-img-top" alt={subject.Subject.name} />
        </Link>
        <div className="card-body pb-0">
          <h5 className="card-title d-flex align-items-center">
            <Link to={subject.Subject.id}>
              {subject.Subject.name}
            </Link>
            <span className='badge bg-dark ms-2 rounded-pill' style={{ fontSize: "0.9rem" }}>Hendra</span>
          </h5>
          <p className="mb-2 text-truncate-2">Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.</p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
          </ul>
        </div>
        <div className="card-footer pt-0 pb-3">
          <hr />
          <div className="d-flex justify-content-between">
            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>5h 56m</span>
            <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>32 lectures</span>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SubjectItem;