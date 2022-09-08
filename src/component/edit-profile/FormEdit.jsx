import React from "react";

const FormEdit = () => {
  return (
    <div className="card border rounded-3">
      <div className="card-header border-bottom">
        <h3 className="card-header-title mb-0">Edit Profile</h3>
      </div>
      <div className="card-body">
        <form className="row g-4">
          <div className="col-12 justify-content-center align-items-center">
            <label className="form-label">Profile picture</label>
            <div className="d-flex align-items-center">
              <label
                className="position-relative me-4"
                htmlFor="uploadfile-1"
                title="Replace this pic"
              >
                <span className="avatar avatar-xl">
                  <img
                    id="uploadfile-1-preview"
                    className="avatar-img rounded-circle border border-white border-3 shadow"
                    src="assets/images/avatar/07.jpg"
                    alt=""
                  />
                </span>
                <button type="button" className="uploadremove">
                  <i className="bi bi-x text-white"></i>
                </button>
              </label>
              <label className="btn btn-primary-soft mb-0" htmlFor="uploadfile-1">
                Change
              </label>
              <input
                id="uploadfile-1"
                className="form-control d-none"
                type="file"
              />
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Full name</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value="Lori"
                placeholder="First name"
              />
              <input
                type="text"
                className="form-control"
                value="Stevens"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">Eduport.com</span>
              <input type="text" className="form-control" value="loristev" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Email id</label>
            <input
              className="form-control"
              type="email"
              value="example@gmail.com"
              placeholder="Email"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone number</label>
            <input
              type="text"
              className="form-control"
              value="1234567890"
              placeholder="Phone number"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input className="form-control" type="text" value="California" />
          </div>

          <div className="col-12">
            <label className="form-label">About me</label>
            <textarea className="form-control" rows="3">
              I’ve found a way to get paid for my favorite hobby, and do so
              while following my dream of traveling the world.
            </textarea>
            <div className="form-text">Brief description for your profile.</div>
          </div>

          <div className="col-12">
            <label className="form-label">Education</label>
            <input
              className="form-control mb-2"
              type="text"
              value="Bachelor in Computer Graphics"
            />
            <input
              className="form-control mb-2"
              type="text"
              value="Masters in Computer Graphics"
            />
            <button className="btn btn-sm btn-light mb-0">
              <i className="bi bi-plus me-1"></i>Add more
            </button>
          </div>

          <div className="d-sm-flex justify-content-end">
            <button type="button" className="btn btn-primary mb-0">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdit;
