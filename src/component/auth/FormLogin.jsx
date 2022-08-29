import React from "react";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <div className="col-12 col-lg-6 bg-white">
      <div className="row my-8">
        <div className="col-sm-10 col-xl-8 m-auto">
          <h1 className="fs-2 mb-4">Login Kampus Gratis!</h1>

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
                  placeholder="password"
                  id="inputPassword5"
                />
              </div>
            </div>

            <div className="mb-4 d-flex justify-content-between mb-4">
              <div className="form-check"></div>
              <div className="text-primary-hover">
                <a href=" " className="text-secondary">
                  <Link to={"/forgot-password"}>
                    <u>Lupa Password?</u>
                  </Link>
                </a>
              </div>
            </div>

            <div className="align-items-center mt-0">
              <div className="d-grid">
                <button className="btn btn-kg mb-0 text-white" type="button">
                  Login
                </button>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="position-relative my-4">
              <hr />
              <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                Atau
              </p>
            </div>

            <div className="col-xxl-12 d-grid">
              <a href=" " className="btn btn-outline-secondary mb-2 mb-xxl-0">
                <i className="fab fa-fw fa-google me-2"></i>
                Login dengan Google
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span>
              Tidak punya akun? <Link to="/registration"> Daftar</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
