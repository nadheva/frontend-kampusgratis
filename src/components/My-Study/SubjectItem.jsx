import React from 'react'
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

const SubjectItem = ({ subject, student, lecturers }) => {
  return <>
    <div className="col-sm-6 col-xl-4">
      <div className="card shadow h-100">
        <Link to={subject.Subject.id}>
          <img src={subject.Subject.thumbnail_link} style={{ height: "180px", objectFit: "cover" }} className="card-img-top" alt={subject.Subject.name} />
        </Link>
        <div className="card-body pb-0">
          <h5 className="card-title d-flex align-items-center mb-0">
            <Link to={subject.Subject.id}>
              {subject.Subject.name}
            </Link>
            <span className='badge bg-dark ms-2 rounded-pill' style={{ fontSize: "0.9rem" }}>
              {subject.Subject.credit} SKS
            </span>
          </h5>
        </div>
        <div className="card-footer pt-0 pb-3">
          <hr />
          <div className="d-flex justify-content-between">
            <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>{subject.Subject.number_of_sessions} Pertemuan</span>
            <span className="h6 fw-light mb-0"><i className="fas fa-user text-orange me-2"></i>{student} Mahasiswa</span>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SubjectItem;