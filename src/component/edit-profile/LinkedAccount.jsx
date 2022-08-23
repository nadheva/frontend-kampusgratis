import React from "react";

const LinkedAccount = () => {
  return (
    <div class="col-lg-6">
      <div class="card border rounded-3">
        <div class="card-header border-bottom">
          <h5 class="card-header-title mb-0">Linked account</h5>
        </div>
        <div class="card-body pb-0">
          <div class="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
            <h2 class="fs-1 mb-0 me-3">
              <i class="fab fa-google text-google-icon"></i>
            </h2>
            <div>
              <div class="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                <i class="bi bi-check-circle-fill text-success fs-5"></i>
              </div>
              <h6 class="mb-1">Google</h6>
              <p class="mb-1 small">
                You are successfully connected to your Google account
              </p>

              <button type="button" class="btn btn-sm btn-danger mb-0">
                Invoke
              </button>
              <a href="#" class="btn btn-sm btn-link text-body mb-0">
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
