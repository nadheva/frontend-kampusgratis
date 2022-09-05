import React from "react";

const Fakultas = () => {
  return (
    <section>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fs-1 first-color-second">
              Fakultas <span className="title-small">Kami</span>
            </h2>
            <p className="mb-0">Ini adalah beberapa Fakultas kami</p>
          </div>
        </div>
        <div className="tab-content" id="course-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="course-pills-tabs-1"
            role="tabpanel"
            aria-labelledby="course-pills-tab-1"
          >
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4 col-xl-4">
                <div className="card shadow h-100">
                  <img
                    src="assets/images/fakultas/UMKM & Ritel 1.png"
                    className="card-img-top"
                    alt="course"
                  />

                  <div className="card-body pb-0">
                    <h5 className="card-title fw-normal">
                      <a href=" " className="first-color-second">
                        Fakultas Bisnis & Pembiayaan
                      </a>
                    </h5>
                  </div>

                  <div className="card-footer pt-0 pb-3">
                    <button
                      type="button"
                      className="btn bnt-sm bg-first-color text-white w-100"
                    >
                      Lihat Jurusan
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-4">
                <div className="card shadow h-100">
                  <img
                    src="assets/images/fakultas/UMKM & Ritel 2.png"
                    className="card-img-top"
                    alt="course"
                  />

                  <div className="card-body pb-0">
                    <h5 className="card-title fw-normal">
                      <a href=" " className="first-color-second">
                        Fakultas Desain Digital
                      </a>
                    </h5>
                  </div>

                  <div className="card-footer pt-0 pb-3">
                    <button
                      type="button"
                      className="btn bnt-sm bg-first-color text-white w-100"
                    >
                      Lihat Jurusan
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-4">
                <div className="card shadow h-100">
                  <img
                    src="assets/images/fakultas/UMKM & Ritel 3.png"
                    className="card-img-top"
                    alt="course"
                  />
                  <div className="card-body pb-0">
                    <h5 className="card-title fw-normal ">
                      <a href=" " className="first-color-second">
                        Fakultas Teknologi pendukung ekonomi digital
                      </a>
                    </h5>
                  </div>
                  <div className="card-footer pt-0 pb-3">
                    <button
                      type="button"
                      className="btn bnt-sm w-100 bg-first-color text-white "
                    >
                      Lihat Jurusan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fakultas;
