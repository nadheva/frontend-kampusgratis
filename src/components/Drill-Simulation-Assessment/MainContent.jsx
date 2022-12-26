import React from 'react';

const MainContent = () => {
  return <>
    <section class="bg-light position-relative overflow-hidden">
      <figure class="position-absolute bottom-0 end-0 mb-n5">
        <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
          <path class="fill-warning" d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"></path>
        </svg>
      </figure>
      <figure class="position-absolute top-0 start-0 mt-n8 me-5 d-none d-lg-block">
        <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
          <path class="fill-purple opacity-3" d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"></path>
        </svg>
      </figure>

      <div class="container position-relative">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="fs-1 fw-bold">
              <span class="position-relative z-index-9">Latihan Simulasi dan </span>
              <span class="position-relative z-index-1">Penilaian
                <span class="position-absolute top-50 start-50 translate-middle z-index-n1">
                  <svg width="163.9px" height="48.6px">
                    <path class="fill-warning" d="M162.5,19.9c-0.1-0.4-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-0.5-0.4-0.7c-0.3-0.4-0.7-0.7-1.2-0.9l0.1,0l-0.1,0 c0.1-0.4-0.2-0.5-0.5-0.6c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.3-0.3c0-0.3,0-0.6-0.2-0.7c-0.1-0.1-0.3-0.2-0.6-0.2 c0-0.3-0.1-0.5-0.3-0.6c-0.1-0.1-0.3-0.2-0.5-0.2c-0.1,0-0.1,0-0.2,0c-0.5-0.4-1-0.8-1.4-1.1c0,0,0-0.1,0-0.1c0-0.1-0.1-0.1-0.3-0.2 c-0.9-0.5-1.8-1-2.6-1.5c-6-3.6-13.2-4.3-19.8-6.2c-4.1-1.2-8.4-1.4-12.6-2c-5.6-0.8-11.3-0.6-16.9-1.1c-2.3-0.2-4.6-0.3-6.8-0.3 c-1.2,0-2.4-0.2-3.5-0.1c-2.4,0.4-4.9,0.6-7.4,0.7c-0.8,0-1.7,0.1-2.5,0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0 c-0.9,0-1.8,0.1-2.7,0.1c-0.9,0-1.8,0-2.7,0c-5.5-0.3-10.7,0.7-16,1.5c-2.5,0.4-5.1,1-7.6,1.5c-2.8,0.6-5.6,0.7-8.4,1.4 c-4.1,1-8.2,1.9-12.3,2.6c-4,0.7-8,1.6-11.9,2.7c-3.6,1-6.9,2.5-10.1,4.1c-1.9,0.9-3.8,1.7-5.2,3.2c-1.7,1.8-2.8,4-4.2,6 c-1,1.3-0.7,2.5,0.2,3.9c2,3.1,5.5,4.4,9,5.7c1.8,0.7,3.6,1,5.3,1.8c2.3,1.1,4.6,2.3,7.1,3.2c5.2,2,10.6,3.4,16.2,4.4 c3,0.6,6.2,0.9,9.2,1.1c4.8,0.3,9.5,1.1,14.3,0.8c0.3,0.3,0.6,0.3,0.9-0.1c0.7-0.3,1.4,0.1,2.1-0.1c3.7-0.6,7.6-0.3,11.3-0.3 c2.1,0,4.3,0.3,6.4,0.2c4-0.2,8-0.4,11.9-0.8c5.4-0.5,10.9-1,16.2-2.2c0.1,0.2,0.2,0.1,0.2,0c0.5-0.1,1-0.2,1.4-0.3 c0.1,0.1,0.2,0.1,0.3,0c0.5-0.1,1-0.3,1.6-0.3c3.3-0.3,6.7-0.6,10-1c2.1-0.3,4.1-0.8,6.2-1.2c0.2,0.1,0.3,0.1,0.4,0.1 c0.1,0,0.1,0,0.2-0.1c0,0,0.1,0,0.1-0.1c0,0,0-0.1,0.1-0.1c0.2-0.1,0.4-0.1,0.6-0.2c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.2 c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.2,0,0.4-0.1,0.5-0.1c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0.2,0,0.3-0.1,0.3-0.3c0.5-0.2,0.9-0.4,1.4-0.5 c0.1,0,0.2,0,0.2,0c0,0,0.1,0,0.1,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.2,0.1,0.4,0.1,0.6,0 c0.1,0,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.3c0.5-0.2,1-0.4,1.6-0.7c1.5-0.7,3.1-1.4,4.7-1.9c4.8-1.5,9.1-3.4,12.8-6.3 c0.8-0.2,1.2-0.5,1.6-1c0.2-0.3,0.4-0.6,0.5-0.9c0.5-0.1,0.7-0.2,0.9-0.5c0.2-0.2,0.2-0.5,0.3-0.9c0-0.1,0-0.1,0.1-0.1 c0.5,0,0.6-0.3,0.8-0.5C162.3,24,163,22,162.5,19.9z M4.4,28.7c-0.2-0.4-0.3-0.9-0.1-1.2c1.8-2.9,3.4-6,6.8-8 c2.8-1.7,5.9-2.9,8.9-4.2c4.3-1.8,9-2.5,13.6-3.4c0,0.1,0,0.2,0,0.2l0,0c-1.1,0.4-2.2,0.7-3.2,1.1c-3.3,1.1-6.5,2.1-9.7,3.4 c-4.2,1.6-7.6,4.2-10.1,7.5c-0.5,0.7-1,1.3-1.6,2c-2.2,2.7-1,4.7,1.2,6.9c0.1,0.1,0.3,0.3,0.4,0.5C7.8,32.5,5.5,31.2,4.4,28.7z  M158.2,23.8c-1.7,2.8-4.1,5.1-7,6.8c-2,1.2-4.5,2.1-6.9,2.9c-3.3,1-6.4,2.4-9.5,3.7c-3.9,1.6-8.1,2.5-12.4,2.9 c-6,0.5-11.8,1.5-17.6,2.5c-4.8,0.8-9.8,1-14.7,1.5c-5.6,0.6-11.2,0.2-16.8,0.1c-3.1-0.1-6.3,0.3-9.4,0.5c-2.6,0.2-5.2,0.1-7.8-0.1 c-3.9-0.3-7.8-0.5-11.7-0.9c-2.8-0.3-5.5-0.7-8.2-1.4c-3.2-0.8-6.3-1.7-9.5-2.5c-0.5-0.1-1-0.3-1.4-0.5c-0.2-0.1-0.4-0.1-0.6-0.2 c0,0,0.1,0,0.1,0c0.3-0.1,0.5,0,0.7,0.1c0,0,0,0,0,0c3.4,0.5,6.9,1.2,10.3,1.4c0.5,0,1,0,1.5,0c0.5,0,1.3,0.2,1.3-0.3 c0-0.6-0.7-0.9-1.4-0.9c-2.1,0-4.2-0.2-6.3-0.5c-4.6-0.7-9.1-1.5-13.4-3c-2.9-1.1-5.4-2.7-6.9-5.2c-0.5-0.8-0.5-1.6-0.1-2.4 c3.2-6.2,9-9.8,16.3-12.2c6.7-2.2,13.2-4.5,20.2-6c5-1.1,10-1.8,15-2.9c8.5-1.9,17.2-2.4,26-2.7c3.6-0.1,7.1-0.8,10.8-0.6 c8.4,0.7,16.7,1.2,25,2.3c4.5,0.6,9,1.2,13.6,1.7c3.6,0.4,7.1,1.4,10.5,2.8c3.1,1.3,6,2.9,8.5,5C159.1,17.7,159.8,21.1,158.2,23.8z"></path>
                  </svg>
                </span>
              </span>
            </h2>
            <p class="mb-0">Kamu dapat mengambil jadwal simulasi dan penilaian serta melihat riwayat penilaian kamu sebelumnya.</p>
          </div>
        </div>

        <ul class="nav nav-pills nav-pill-soft mb-3" id="course-pills-tab" role="tablist">
          <li class="nav-item me-2 me-sm-5" role="presentation">
            <button class="nav-link active" id="jadwal-simulasi-drill-assessment-body" data-bs-toggle="pill" data-bs-target="#jadwal-simulasi-drill-assessment" type="button" role="tab" aria-controls="jadwal-simulasi-drill-assessment" aria-selected="true">Jadwal Simulasi</button>
          </li>

          <li class="nav-item me-2 me-sm-5" role="presentation">
            <button class="nav-link" id="riwayat-simulasi-drill-assessment-body" data-bs-toggle="pill" data-bs-target="#riwayat-simulasi-drill-assessment" type="button" role="tab" aria-controls="riwayat-simulasi-drill-assessment" aria-selected="false" tabindex="-1">Riwayat Penilaian</button>
          </li>
        </ul>

        <div class="tab-content mb-0" id="course-pills-tabContent">
          <div class="tab-pane fade active show" id="jadwal-simulasi-drill-assessment" role="tabpanel" aria-labelledby="jadwal-simulasi-drill-assessment-body">
            <div class="row">
              <div class="col-12">
                <div class="row justify-content-between">
                  <div className="col-md-6">
                    <div class="card p-2 shadow h-100">
                      <div class="rounded-top overflow-hidden">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="80" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                        </svg>
                      </div>
                      <div class="card-body px-2 mt-0">
                        <h6 class="card-title"><a href="#">penjelasan tentang conflict brain</a></h6>
                        <div class="d-flex justify-content-between align-items-center mb-0">
                          <div>
                            <a href="#" class="badge bg-info bg-opacity-10 text-info me-2 p-2">
                              <i class="fas fa-circle small fw-bold me-1"></i> conflict my brain
                            </a>
                            <a href="#" class="badge bg-primary bg-opacity-10 text-primary me-2 p-2">
                              <i class="fas fa-forward small fw-bold me-1"></i> consultacion
                            </a>
                            <a href="#" class="badge bg-secondary bg-opacity-10 text-secondary me-2 p-2">
                              <i class="fas fa-clock small fw-bold me-1"></i> 3 waktu pilihan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
<<<<<<< Updated upstream
                  <div className="col-md-6">
                    <div class="card p-2 shadow h-100">
                      <div class="rounded-top overflow-hidden">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="80" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                        </svg>
                      </div>
                      <div class="card-body px-2 mt-0">
                        <h6 class="card-title"><a href="#">penjelasan tentang conflict brain</a></h6>
                        <div class="d-flex justify-content-between align-items-center mb-0">
                          <div>
                            <a href="#" class="badge bg-info bg-opacity-10 text-info me-2 p-2">
                              <i class="fas fa-circle small fw-bold me-1"></i> conflict my brain
                            </a>
                            <a href="#" class="badge bg-primary bg-opacity-10 text-primary me-2 p-2">
                              <i class="fas fa-forward small fw-bold me-1"></i> consultacion
                            </a>
                            <a href="#" class="badge bg-secondary bg-opacity-10 text-secondary me-2 p-2">
                              <i class="fas fa-clock small fw-bold me-1"></i> 3 waktu pilihan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
=======
>>>>>>> Stashed changes
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="riwayat-simulasi-drill-assessment" role="tabpanel" aria-labelledby="riwayat-simulasi-drill-assessment-body">
            <div class="row">
<<<<<<< Updated upstream
              <div className="col-md-6">
                <div class="card p-2 shadow h-100">
                  <div class="rounded-top overflow-hidden">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="80" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                    </svg>
                  </div>
                  <div class="card-body px-2 mt-0">
                    <h6 class="card-title"><a href="#">penjelasan tentang conflict brain</a></h6>
                    <div class="d-flex justify-content-between align-items-center mb-0">
                      <div>
                        <a href="#" class="badge bg-info bg-opacity-10 text-info me-2 p-2">
                          <i class="fas fa-circle small fw-bold me-1"></i> conflict my brain
                        </a>
                        <a href="#" class="badge bg-primary bg-opacity-10 text-primary me-2 p-2">
                          <i class="fas fa-forward small fw-bold me-1"></i> consultacion
                        </a>
                        <a href="#" class="badge bg-secondary bg-opacity-10 text-secondary me-2 p-2">
                          <i class="fas fa-clock small fw-bold me-1"></i> 3 waktu pilihan
                        </a>
                      </div>
                      <div>
                        <h6 class="bg-danger bg-opacity-10 text-danger me-2 p-2 h4 mb-0">D</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card p-2 shadow h-100">
                  <div class="rounded-top overflow-hidden">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="80" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                    </svg>
                  </div>
                  <div class="card-body px-2 mt-0">
                    <h6 class="card-title"><a href="#">penjelasan tentang conflict brain</a></h6>
                    <div class="d-flex justify-content-between align-items-center mb-0">
                      <div>
                        <a href="#" class="badge bg-info bg-opacity-10 text-info me-2 p-2">
                          <i class="fas fa-circle small fw-bold me-1"></i> conflict my brain
                        </a>
                        <a href="#" class="badge bg-primary bg-opacity-10 text-primary me-2 p-2">
                          <i class="fas fa-forward small fw-bold me-1"></i> consultacion
                        </a>
                        <a href="#" class="badge bg-secondary bg-opacity-10 text-secondary me-2 p-2">
                          <i class="fas fa-clock small fw-bold me-1"></i> 3 waktu pilihan
                        </a>
                      </div>
                      <div>
                        <h6 class="bg-info bg-opacity-10 text-primary me-2 p-2 h4 mb-0">A</h6>
=======
              <div class="col-lg-6">
                <h3>Development</h3>
                <p class="mb-3">Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed.</p>
                <h6 class="mt-4">What you’ll learn</h6>
                <ul class="list-group list-group-borderless mb-3">
                  <li class="list-group-item h6 fw-light d-flex mb-0"><i class="bi bi-patch-check-fill text-success me-2"></i>Create responsive, accessible, and beautiful layouts</li>
                  <li class="list-group-item h6 fw-light d-flex mb-0"><i class="bi bi-patch-check-fill text-success me-2"></i>Course Videos &amp; Readings</li>
                  <li class="list-group-item h6 fw-light d-flex mb-0"><i class="bi bi-patch-check-fill text-success me-2"></i>Manipulate the DOM with vanilla JS</li>
                  <li class="list-group-item h6 fw-light d-flex mb-0"><i class="bi bi-patch-check-fill text-success me-2"></i>Master the command line interface</li>
                  <li class="list-group-item h6 fw-light d-flex mb-0"><i class="bi bi-patch-check-fill text-success me-2"></i>Create your own Node modules</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <div class="card p-2 pb-0 shadow">
                  <div class="overflow-hidden h-xl-200px">
                    <img src="/assets/images/about/14.jpg" class="card-img-top" alt="course image" />
                    <div class="card-img-overlay d-flex p-3">
                      <div class="m-auto">
                        <a href="https://www.youtube.com/embed/tXHviS-4ygo" class="btn btn-lg text-danger btn-round btn-white-shadow mb-0" data-glightbox="" data-gallery="course-video">
                          <i class="fas fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="row g-3">
                      <div class="col-sm-4 col-lg-6 col-xl-4">
                        <div class="d-flex align-items-center">
                          <a href="#" class="btn btn-orange rounded-2 me-3 mb-0"><i class="bi bi-cart3 fs-5"></i></a>
                          <div>
                            <span class="badge text-bg-info mb-1">6 month</span>
                            <h5 class="mb-0">$134</h5>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-4 col-lg-6 col-xl-4">
                        <div class="d-flex align-items-center">
                          <a href="#" class="btn btn-orange rounded-2 me-3 mb-0"><i class="bi bi-cart3 fs-5"></i></a>
                          <div>
                            <span class="badge text-bg-info mb-1">12 month</span>
                            <h5 class="mb-0">$355</h5>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-4 col-lg-6 col-xl-4">
                        <div class="d-flex align-items-center">
                          <a href="#" class="btn btn-orange rounded-2 me-3 mb-0"><i class="bi bi-cart3 fs-5"></i></a>
                          <div>
                            <span class="badge text-bg-info mb-1">18 month</span>
                            <h5 class="mb-0">$654</h5>
                          </div>
                        </div>
>>>>>>> Stashed changes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default MainContent;