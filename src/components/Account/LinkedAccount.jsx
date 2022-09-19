import React from "react";

const LinkedAccount = () => {
  return (
    <div className="col-lg-6">
      <div className="card border rounded-3">
        <div className="card-header border-bottom">
          <h5 className="card-header-title mb-0">Linked account</h5>
        </div>
        <div className="card-body pb-0">
          <div className="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
            <h2 className="fs-1 mb-0 me-3">
              <i className="fab fa-google text-google-icon"></i>
            </h2>
            <div>
              <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
              </div>
              <h6 className="mb-1">Google</h6>
              <p className="mb-1 small">
                You are successfully connected to your Google account
              </p>

              <button type="button" className="btn btn-sm btn-danger mb-0">
                Invoke
              </button>
              <a href=" " className="btn btn-sm btn-link text-body mb-0">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedAccount;
