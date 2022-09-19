import React from 'react'
import { Link } from 'react-router-dom'

function CourseItem({ course }) {
  return (
    <div className="col-sm-6 col-xl-4">
      <div className="card shadow h-100">
        <img src="assets/images/courses/4by3/03.jpg" className="card-img-top" alt="courseimage" />
        <div className="card-body pb-0">
          <div className="d-flex justify-content-between mb-2">
            <a href=" " className="badge bg-success bg-opacity-10 text-success">{course.name}</a>
            <a href=" " className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
          </div>
          <h5 className="card-title"><Link to="/pertemuan">Create a Design System in Figma</Link></h5>
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
  )
}

export default CourseItem