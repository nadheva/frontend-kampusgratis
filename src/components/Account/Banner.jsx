import React from "react";
import { useSelector } from 'react-redux';

const BannerProfile = () => {
  const { user, token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  return (
    <section className="pt-0">
      <div className="container-fluid px-0">
        <div className="bg-blue h-100px h-md-200px rounded-0" style={{ background: "url(assets/images/pattern/04.png) no-repeat center center", backgroundSize: 'cover' }}>
        </div>
      </div>
      <div className="container mt-n4">
        <div className="row">
          <div className="col-12">
            <div className="card bg-transparent card-body pb-0 ps-0 mt-2 mt-sm-0">
              <div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
                <div className="col-auto">
                  <div className="avatar avatar-xxl position-relative mt-n3">
                    <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/09.jpg" alt="" />
                    <span className="badge bg-success text-white rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">
                      Guest
                    </span>
                  </div>
                </div>
                <div className="col d-sm-flex justify-content-between align-items-center">
                  <div>
                    <h1 className="my-1 fs-4">{user.full_name}</h1>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-3 mb-1 mb-sm-0">
                        <span className="h6">255</span>
                        <span className="text-body fw-light"> Points</span>
                      </li>
                      <li className="list-inline-item me-3 mb-1 mb-sm-0">
                        <span className="h6">7</span>
                        <span className="text-body fw-light"> Completed courses</span>
                      </li>
                      <li className="list-inline-item me-3 mb-1 mb-sm-0">
                        <span className="h6">52</span>
                        <span className="text-body fw-light"> Completed lessons</span>
                      </li>
                    </ul>
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