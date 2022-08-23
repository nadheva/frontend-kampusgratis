import React from "react";

const SidebarProfile = () => {
  return (
    <div className="col-xl-3">
      <nav className="navbar navbar-light navbar-expand-xl mx-0">
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header bg-light">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              My profile
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-3 p-xl-0">
            <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
              <div className="list-group list-group-dark list-group-borderless">
                <a className="list-group-item" href="instructor-dashboard.html">
                  <i className="bi bi-ui-checks-grid fa-fw me-2"></i>Dashboard
                </a>
                <a className="list-group-item" href="instructor-manage-course.html">
                  <i className="bi bi-basket fa-fw me-2"></i>My Courses
                </a>
                <a className="list-group-item" href="instructor-earning.html">
                  <i className="bi bi-graph-up fa-fw me-2"></i>Earnings
                </a>
                <a className="list-group-item" href="instructor-studentlist.html">
                  <i className="bi bi-people fa-fw me-2"></i>Students
                </a>
                <a className="list-group-item" href="instructor-order.html">
                  <i className="bi bi-folder-check fa-fw me-2"></i>Orders
                </a>
                <a className="list-group-item" href="instructor-review.html">
                  <i className="bi bi-star fa-fw me-2"></i>Reviews
                </a>
                <a
                  className="list-group-item active"
                  href="instructor-edit-profile.html"
                >
                  <i className="bi bi-pencil-square fa-fw me-2"></i>Edit Profile
                </a>
                <a className="list-group-item" href="instructor-payout.html">
                  <i className="bi bi-wallet2 fa-fw me-2"></i>Payouts
                </a>
                <a className="list-group-item" href="instructor-setting.html">
                  <i className="bi bi-gear fa-fw me-2"></i>Settings
                </a>
                <a
                  className="list-group-item"
                  href="instructor-delete-account.html"
                >
                  <i className="bi bi-trash fa-fw me-2"></i>Delete Profile
                </a>
                <a
                  className="list-group-item text-danger bg-danger-soft-hover"
                  href="sign-in.html"
                >
                  <i className="fas fa-sign-out-alt fa-fw me-2"></i>Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SidebarProfile;
