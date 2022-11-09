import React from 'react';
import { Link } from 'react-router-dom';

const MajorItem = ({ major }) => {
  return <div className="col-sm-6 col-lg-4 mt-4">
    <div className="card shadow h-100">
      <div className="overflow-hidden">
        <img src={major.thumbnail_link} className="card-img-top rounded-2" style={{ height: "220px", objectFit: "cover" }} alt={major.name} onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "https://random.imagecdn.app/500/150";
        }} />
        <div className="card-img-overlay">
          <div className="ribbon"><span>S1</span></div>
        </div>
      </div>
      <div className="card-body pb-0">
        <div className="d-flex justify-content-between mb-2">
          {/* <a href=" " className="badge bg-purple bg-opacity-10 text-purple">Medium</a> */}
          {/* <a href=" " className="h6 fw-light mb-0"><i className="far fa-heart"></i></a> */}
        </div>
        <h5 className="card-title">
          <Link to={`/silabus/${major.id}`}>
            {major.name}
          </Link>
        </h5>
        <p>{major.description}</p>
      </div>
      <div className="card-footer pt-0 pb-3">
        <hr />
        <div className="d-flex justify-content-between">
          <span className="h6 fw-light mb-0">
            <i className="far fa-user text-danger me-2"></i>
            Mentor {major.Lecturer.User.full_name.split(" ")[0]}
          </span>
          <span className="h6 fw-light mb-0">
            <i className="fas fa-table text-orange me-2"></i>
            {major.number_of_subjects} Pelajaran
          </span>
        </div>
      </div>
    </div>
  </div >
}

export default MajorItem;