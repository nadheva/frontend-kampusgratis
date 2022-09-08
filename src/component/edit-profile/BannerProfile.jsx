import React from "react";

const BannerProfile = () => {
  return (
    <section className="pt-0">
      <div className="container-fluid px-0">
        <div
          className="bg-banner h-md-200px rounded-0"
        ></div>
      </div>
      <div className="container mt-n4">
        <div className="row">
          <div className="col-12">
            <div className="card bg-transparent card-body p-0">
              <div className="row d-flex justify-content-between">
                <div className="col-auto mt-4 mt-md-0">
                  <div className="avatar avatar-xxl mt-n3">
                    <img
                      className="avatar-img rounded-circle border border-white border-3 shadow"
                      src="assets/images/avatar/01.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col d-md-flex justify-content-between align-items-center mt-4">
                  <div>
                    <h1 className="my-1 fs-4">
                      Lori Stevens{" "}
                      <i className="bi bi-patch-check-fill text-info small"></i>
                    </h1>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                        <i className="fas fa-star text-warning me-2"></i>4.5/5.0
                      </li>
                      <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                        <i className="fas fa-user-graduate text-orange me-2"></i>12k
                        Enrolled Students
                      </li>
                      <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0">
                        <i className="fas fa-book text-purple me-2"></i>25 Courses
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center mt-2 mt-md-0">
                    <a
                      href=" "
                      className="btn btn-success mb-0"
                    >
                      Create a course
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-xl-none" />
            <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
              <a className="h6 mb-0 fw-bold d-xl-none" href=" ">
                Menu
              </a>
              <button
                className="btn btn-primary d-xl-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <i className="fas fa-sliders-h"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerProfile;
