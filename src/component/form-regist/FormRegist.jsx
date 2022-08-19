import React from "react";

const FormRegist = () => {
  return (
    <div className="col-12 col-lg-6 m-auto">
      <div className="row my-5">
        <div className="col-sm-10 col-xl-8 m-auto">
          <img
            src="assets/images/element/03.svg"
            className="h-40px mb-2"
            alt=""
          />
          <h2>Registrasi Akun</h2>
          <p className="lead mb-4">
            Selamat Datang, Silahkan Registrasi Akunmu!
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="E-mail"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="inputPassword5" className="form-label">
                Password *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="*********"
                  id="inputPassword5"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="inputPassword6" className="form-label">
                Confirm Password *
              </label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control border-0 bg-light rounded-end ps-1"
                  placeholder="*********"
                  id="inputPassword6"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkbox-1"
                />
                <label className="form-check-label" htmlFor="checkbox-1">
                  Dengan Mendaftar, Anda Menyetujui
                  <a href=" "> Persyaratan Layanan</a>
                </label>
              </div>
            </div>
            <div className="align-items-center mt-0">
              <div className="d-grid">
                <button className="btn btn-primary mb-0" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="position-relative my-4">
              <hr />
              <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                Or
              </p>
            </div>
            <div className="col-xxl-12 d-grid">
              <a href=" " className="btn bg-google mb-2 mb-xxl-0">
                <i className="fab fa-fw fa-google text-white me-2"></i>Signup
                with Google
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span>
              Sudah Punya Akun?<a href="sign-in.html"> Login Disini</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegist;
