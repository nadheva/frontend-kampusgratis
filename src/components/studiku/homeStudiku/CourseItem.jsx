import React from 'react'
import { Link } from 'react-router-dom'

function CourseItem({ course }) {

  return (
    <div className="col-sm-6 col-xl-4">
      <div className="card shadow  h-100">
        <img src={course.item.Subject.thumbnail_link} className="card-img-top" alt="courseimage" />
        <div className="card-body pb-0">
          <div className="d-flex justify-content-between mb-2">
            <a href=" " className="badge bg-success bg-opacity-10 text-success"> {course.lecturers} </a>
          </div>
          <h5 className="card-title">
            <Link to={`/pertemuan/${course.item.id}`}>{course.item.Subject.name}</Link>
          </h5>
          {/* <p className="mb-2 text-truncate-2">{course.description.substring(0, 60)}</p> */}
        </div>
        <div className="card-footer pt-0 pb-3">
          <hr />
          <div className="d-flex justify-content-between">
            <span className="h6 fw-light mb-0"><i className="fas fa-table text-danger me-2"></i>{course.item.Subject.credit} Sks</span>
            <span className="h6 fw-light mb-0"><i className="fas fa-signal text-success me-2"></i>{course.item.Subject.level}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem