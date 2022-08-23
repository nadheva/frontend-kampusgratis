import React from "react";

const UpdatePassword = () => {
  return (
    <div class="col-lg-6">
      <div class="card border rounded-3">
        <div class="card-header border-bottom">
          <h5 class="card-header-title mb-0">Update password</h5>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Current password</label>
            <input
              class="form-control"
              type="password"
              placeholder="Enter current password"
            />
          </div>
          <div class="mb-3">
            <label class="form-label"> Enter new password</label>
            <div class="input-group">
              <input
                class="form-control"
                type="password"
                placeholder="Enter new password"
              />
              <span class="input-group-text p-0 bg-transparent">
                <i class="far fa-eye cursor-pointer p-2 w-40px"></i>
              </span>
            </div>
            <div class="rounded mt-1" id="psw-strength"></div>
          </div>
          <div>
            <label class="form-label">Confirm new password</label>
            <input
              class="form-control"
              type="password"
              placeholder="Enter new password"
            />
          </div>
          <div class="d-flex justify-content-end mt-4">
            <button type="button" class="btn btn-primary mb-0">
              Change password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
