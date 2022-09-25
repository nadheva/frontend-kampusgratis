import React from 'react'
import { Link } from 'react-router-dom'

function CourseItem({ course }) {
  return (
    <div className="col-sm-6 col-xl-4">
      <div className="card shadow h-100">
        <img src="assets/images/courses/4by3/03.jpg" className="card-img-top" alt="courseimage" />
        <div className="card-body pb-0">
          <div className="d-flex justify-content-between mb-2">
            <a href=" " className="badge bg-success bg-opacity-10 text-success"> {course.name}</a>
          </div>
          <h5 className="card-title"><Link to="/pertemuan">Create a Design System in Figma</Link></h5>
          <p className="mb-2 text-truncate-2">Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.</p>
        </div>
        <div className="card-footer pt-0 pb-3">
          <hr />
          <div className="d-flex justify-content-between">
            <span className="h6 fw-light mb-0"><i className="fas fa-table text-danger me-2"></i>3 Sks</span>
            <span className="h6 fw-light mb-0"><i className="fas fa-user text-orange me-2"></i>32 Mahasiswa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem