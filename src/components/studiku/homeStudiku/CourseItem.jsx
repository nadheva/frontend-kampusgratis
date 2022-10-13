import React from 'react'
import { Link } from 'react-router-dom'

function CourseItem({ course }) {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="card shadow  h-100 ">
        <img src={course.item.Subject.thumbnail_link} className="card-img-top card-img-artikel" alt="courseimage" />
        <div className="card-body pb-0">
          <div className="d-flex justify-content-between mb-2">
            <p className="badge bg-success bg-opacity-10 text-success"> {course.item.Subject.level}</p>
            <p className="badge bg-purple bg-opacity-10 text-purple">{course.progress}%</p>
          </div>
          <h5 className="card-title">
            <Link to={`/studi-ku/pertemuan/${course.item.subject_id}`}>{course.item.Subject.name}</Link>
          </h5>
          <p className="mb-2 text-truncate-2">
            <b>Dosen : </b>
            {course.lecturers}
          </p>
        </div>
        <div className="card-footer pt-0 pb-3">
          <hr />
          <div className="d-flex justify-content-between">
            <span className="h6 fw-light mb-0">
              <i className="fas fa-table text-danger me-2"></i>{course.item.Subject.credit} Sks
            </span>
            <span className="h6 fw-light mb-0">
              <i className="fas fa-user text-success me-2"></i>{course.student_count} Mahasiswa
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem