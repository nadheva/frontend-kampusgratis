import React from 'react';
import { Link } from 'react-router-dom';

const SubjectDetail = ({ subject, sessions }) => {
  return <>
    <img className='img-thumbnail p-2' src={subject.thumbnail_link} alt={subject.name} style={{ height: '360px', objectFit: 'cover' }} />
    <div className="col-lg-12 mt-4">
      <div className="card shadow rounded-2 p-0">
        <div className="card-header border-bottom px-4 py-3">
          <ul className="nav nav-pills nav-tabs-line py-0" id="course-pills-tab" role="tablist">
            <li className="nav-item me-2 me-sm-4" role="presentation">
              <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill"
                data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1"
                aria-selected="true">Peninjauan</button>
            </li>
            <li className="nav-item me-2 me-sm-4" role="presentation">
              <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill"
                data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2"
                aria-selected="false">Pertemuan Mata Kuliah</button>
            </li>
          </ul>
        </div>
        <div className="card-body p-4">
          <div className="tab-content pt-2" id="course-pills-tabContent">
            <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel"
              aria-labelledby="course-pills-tab-1">
              <h5 className="mb-3">Deskripsi Mata Kuliah</h5>
              {subject.description ? subject.description : <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos placeat odio blanditiis est autem dolorem esse accusantium nesciunt debitis amet obcaecati magni molestias, sit soluta dolores corrupti alias totam.
              </>}
            </div>
            <div className="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
              <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
                {sessions.map((session, i) => <>
                  {i === 0
                    ? <></>
                    : <>
                      <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-1">
                          <button className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
                            type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-session-${i}`} aria-expanded='false'
                            aria-controls={`collapse-session-${i}`}>
                            Pertemuan {session.session_no}
                          </button>
                        </h6>
                        <div id={`collapse-session-${i}`} className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample2">
                          <div className="accordion-body mt-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <a href=' '
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-fw fa-file fs-5"></i>
                                  </a>
                                  <div className="ms-3">
                                    <Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/modul`}
                                      className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Modul
                                      <span className="small mb-2 ms-3 mb-sm-0">Dokumen dan Vidio</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <Link to={`/studi-ku/${subject.id}/pertemuan/${session.id}/modul`} className="p-2 mb-0 text-secondary"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Tandai Sebagai Selesai">
                                <i className="bi bi-check-circle-fill"></i>
                              </Link>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <a href=""
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i
                                      className="fas fa-question-circle fa-fw fs-5"></i>
                                  </a>
                                  <div className="ms-3">
                                    <Link to={`/studi-ku/${subject.id}/quiz/${session.id}`}
                                      className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
                                      Quiz
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <Link to={`/studi-ku/${subject.id}/quiz/${session.id}`} className="p-2 mb-0 text-secondary"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Tandai Sebagai Selesai">
                                <i className="bi bi-check-circle-fill"></i>
                              </Link>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <a href=""
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-fw fa-file-signature fs-5"></i>
                                  </a>
                                  <div className="ms-3">
                                    <Link to={`/studi-ku/${subject.id}/penugasan/${session.id}`}
                                      className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
                                      Penugasan
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <Link to={`/studi-ku/${subject.id}/penugasan/${session.id}`} className="p-2 mb-0 text-secondary"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Tandai Sebagai Selesai">
                                <i className="bi bi-check-circle-fill"></i>
                              </Link>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <a href=""
                                    className="icon-md mb-0 position-static flex-shrink-0 text-body">
                                    <i className="fas fa-comment fa-fw fs-5"></i>
                                  </a>
                                  <div className="ms-3">
                                    <Link to={`/studi-ku/${subject.id}/forum/${session.id}`}
                                      className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
                                      Forum Diskusi
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <Link to={`/studi-ku/${subject.id}/forum/${session.id}`} className="p-2 mb-0 text-secondary"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Tandai Sebagai Tandai Sebagai Selesai">
                                <i className="bi bi-check-circle-fill"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                </>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SubjectDetail;