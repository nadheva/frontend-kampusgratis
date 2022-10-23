import React from 'react';
// import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ModuleDetail = ({ module, count }) => {
  const { subjectId, sessionId } = useParams();

  // useEffect(() => {

  // }, []);

  return <>
    <div className="col-lg-12 col-xl-12 mb-4">
      <div className="card shadow p-2">
        <div className="card-body">
          <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
            <div>
              <h5 className="card-title mb-0">
                <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${module.id}`}>Modul {count + 1}</Link>
              </h5>
            </div>
            <a href=" " className="p-2 mb-0 text-success"
              data-bs-toggle="tooltip" data-bs-placement="top"
              title="Completed">
              <i className="bi bi-check-circle-fill"></i>
            </a>
          </div>
          <p className="text-truncate-2 mb-3">
            {module.description}
          </p>
          <div className="d-sm-flex align-items-center">
            <Link to={`/studi-ku/${subjectId}/pertemuan/${sessionId}/modul/${module.id}`} className='btn btn-dark'>
              <i className="fas fa-play me-2"></i> {module.content_length.number_of_video} Vidio
              <span className='mx-3'>|</span>
              <i className="fas fa-solid fa-file me-2"></i> {module.content_length.number_of_document} Dokumen
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default ModuleDetail;