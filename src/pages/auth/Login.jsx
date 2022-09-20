import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, loginWithGoogle, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import useEffectOnce from "../../helpers/useEffectOnce";
import { getMe } from '../../features/profile/profileSlice';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '', password: ''
  });

  const { email, password } = loginData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { user } = useSelector(
    (state) => state.profile
  );

  useEffectOnce(() => {
    dispatch(reset());
  });

  useEffect(() => {
    if (!email || !password) {
      if (isLoading) toast.error("Invalid combination Email address and Password.");
    }

    if (token) {
      dispatch(getMe());
    }

    if (isError) {
      dispatch(reset());
      toast.error(message);
    }

    if (isSuccess && token && user) {
      navigate('/');

      toast.success(`Selamat datang di Kampus Gratis, ${user.full_name.split(" ")[0]}!`);
    }

  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onFormChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

    dispatch(login(userData));
  }

  const onLoginWithGoogle = (e) => {
    e.preventDefault();

    dispatch(loginWithGoogle());
  }

  return (
    <>
      <main>
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
          <div className="container-fluid">
            <div className="row bg-custom">
              <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-opacity-10 vh-lg-100 bg-custom bg-line">
                <div className="p-3 p-lg-5 bg-blur mx-4">
                  <div className="text-left">
                    <h1 className="fw-bold text-white">
                      Selamat Datang <br /> Di Kampus Gratis!
                    </h1>
                    <p className="mb-0 h6 fw-light text-white">
                      Mari belajar sesuatu yang baru hari ini!
                    </p>
                  </div>
                  <img
                    src="assets/images/element/02.svg"
                    className="mt-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 bg-white pt-3">
                <div className="row my-5">
                  <div className="col-sm-10 col-xl-8 m-auto text">
                    <div className="text-center">
                    <Link className="me-0" to="/">
                      <img
                        className="light-mode-item h-40px"
                        src="assets/images/logo-kampus-gratis.png"
                        alt="Kampus Gratis"
                      />
                      <img
                        className="dark-mode-item h-40px"
                        src="assets/images/logo-kampus-gratis.png"
                        alt="Kampus Gratis"
                      />
                    </Link>
                    </div>
                    <h1 className="fs-2 pt-5">Login Kampus Grastis!</h1>
                    <p className="lead mb-4">
                      Silahkan login dengan akun yang terdaftar.
                    </p>
                    <form onSubmit={onFormSubmit}>
                      <div className="mb-4">
                        <label htmlFor="input-email" className="form-label">
                          Email address *
                        </label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i className="bi bi-envelope-fill"></i>
                          </span>
                          <input
                            name="email"
                            type="text"
                            className="form-control border-0 bg-light rounded-end ps-1"
                            placeholder="Email address"
                            id="input-email"
                            value={email}
                            onChange={onFormChange}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="input-password" className="form-label">
                          Password *
                        </label>
                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                            <i className="fas fa-lock"></i>
                          </span>
                          <input
                            name="password"
                            type="password"
                            className="form-control border-0 bg-light rounded-end ps-1"
                            placeholder="Password"
                            id="input-password"
                            value={password}
                            onChange={onFormChange}
                          />
                        </div>
                        {/* <div id="passwordHelpBlock" className="form-text">
                          Your password must be 8 characters at least
                        </div> */}
                      </div>
                      <div className="mb-4 d-flex justify-content-between mb-4">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="text-primary-hover">
                          <a
                            href="forgot-password.html"
                            className="text-secondary"
                          >
                            <u>Forgot password?</u>
                          </a>
                        </div>
                      </div>
                      <div className="align-items-center mt-0">
                        <div className="d-grid">
                          {isLoading ? (
                            <button
                              className="btn btn-primary mb-0"
                              type="submit"
                              disabled={isLoading}
                            >
                              <span className="spinner-border spinner-border-sm"></span>
                              &nbsp;Loading...
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary mb-0"
                              type="submit"
                            >
                              Login
                            </button>
                          )}
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
                    </div>
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        {isLoading ? (
                          <button
                            className="btn bg-google mb-2 mb-xxl-0"
                            disabled={isLoading}
                          >
                            <span className="spinner-border spinner-border-sm"></span>
                            &nbsp;
                            <i className="fab fa-fw fa-google text-white me-2"></i>
                            &nbsp;Loading...
                          </button>
                        ) : (
                          <button
                            className="btn bg-google mb-2 mb-xxl-0"
                            onClick={onLoginWithGoogle}
                          >
                            <i className="fab fa-fw fa-google text-white me-2"></i>
                            Masuk dengan Google
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span>
                        Belum punya akun?{" "}
                        <Link to="/register">Daftar di sini</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
