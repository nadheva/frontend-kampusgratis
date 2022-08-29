import React from "react";

const FormEdit = () => {
  return (
    <div class="card border rounded-3">
      <div class="card-header border-bottom">
        <h3 class="card-header-title mb-0">Edit Profile</h3>
      </div>
      <div class="card-body">
        <form class="row g-4">
          <div class="col-12 justify-content-center align-items-center">
            <label class="form-label">Profile picture</label>
            <div class="d-flex align-items-center">
              <label
                class="position-relative me-4"
                htmlFor="uploadfile-1"
                title="Replace this pic"
              >
                <span class="avatar avatar-xl">
                  <img
                    id="uploadfile-1-preview"
                    class="avatar-img rounded-circle border border-white border-3 shadow"
                    src="assets/images/avatar/07.jpg"
                    alt=""
                  />
                </span>
                <button type="button" class="uploadremove">
                  <i class="bi bi-x text-white"></i>
                </button>
              </label>
              <label class="btn btn-primary-soft mb-0" htmlFor="uploadfile-1">
                Change
              </label>
              <input
                id="uploadfile-1"
                class="form-control d-none"
                type="file"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="form-label">Full name</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                value="Lori"
                placeholder="First name"
              />
              <input
                type="text"
                class="form-control"
                value="Stevens"
                placeholder="Last name"
              />
            </div>
          </div>

          <div class="col-md-6">
            <label class="form-label">Username</label>
            <div class="input-group">
              <span class="input-group-text">Eduport.com</span>
              <input type="text" class="form-control" value="loristev" />
            </div>
          </div>

          <div class="col-md-6">
            <label class="form-label">Email id</label>
            <input
              class="form-control"
              type="email"
              value="example@gmail.com"
              placeholder="Email"
            />
          </div>

          <div class="col-md-6">
            <label class="form-label">Phone number</label>
            <input
              type="text"
              class="form-control"
              value="1234567890"
              placeholder="Phone number"
            />
          </div>

          <div class="col-md-6">
            <label class="form-label">Location</label>
            <input class="form-control" type="text" value="California" />
          </div>

          <div class="col-12">
            <label class="form-label">About me</label>
            <textarea class="form-control" rows="3">
              I’ve found a way to get paid for my favorite hobby, and do so
              while following my dream of traveling the world.
            </textarea>
            <div class="form-text">Brief description for your profile.</div>
          </div>

          <div class="col-12">
            <label class="form-label">Education</label>
            <input
              class="form-control mb-2"
              type="text"
              value="Bachelor in Computer Graphics"
            />
            <input
              class="form-control mb-2"
              type="text"
              value="Masters in Computer Graphics"
            />
            <button class="btn btn-sm btn-light mb-0">
              <i class="bi bi-plus me-1"></i>Add more
            </button>
          </div>

          <div class="d-sm-flex justify-content-end">
            <button type="button" class="btn btn-primary mb-0">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdit;
