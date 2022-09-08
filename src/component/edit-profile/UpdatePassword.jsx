import React from "react";

const UpdatePassword = () => {
  return (
    <div className="col-lg-6">
      <div className="card border rounded-3">
        <div className="card-header border-bottom">
          <h5 className="card-header-title mb-0">Update password</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Current password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter current password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label"> Enter new password</label>
            <div className="input-group">
              <input
                className="form-control"
                type="password"
                placeholder="Enter new password"
              />
              <span className="input-group-text p-0 bg-transparent">
                <i className="far fa-eye cursor-pointer p-2 w-40px"></i>
              </span>
            </div>
            <div className="rounded mt-1" id="psw-strength"></div>
          </div>
          <div>
            <label className="form-label">Confirm new password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter new password"
            />
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button type="button" className="btn btn-primary mb-0">
              Change password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
