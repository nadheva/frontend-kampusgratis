import React from "react";

function Login() {
  return (
    <main>
      <section class="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div class="p-3 p-lg-5">
                <div class="text-center">
                  <h2 class="fw-bold">Welcome to our largest community</h2>
                  <p class="mb-0 h6 fw-light">
                    Let's learn something new today!
                  </p>
                </div>

                <img src="assets/images/element/02.svg" class="mt-5" alt="" />

                <div class="d-sm-flex mt-5 align-items-center justify-content-center">
                  <ul class="avatar-group mb-2 mb-sm-0">
                    <li class="avatar avatar-sm">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-sm">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-sm">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/03.jpg"
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-sm">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/04.jpg"
                        alt="avatar"
                      />
                    </li>
                  </ul>

                  <p class="mb-0 h6 fw-light ms-0 ms-sm-3">
                    4k+ Students joined us, now it's your turn.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6 m-auto">
              <div class="row my-5">
                <div class="col-sm-10 col-xl-8 m-auto">
                  {/* <span class="mb-0 fs-1">👋</span> */}
                  <h1 class="fs-2">Login into Kampus Gratis!</h1>
                  <p class="lead mb-4">
                    Nice to see you! Please log in with your account.
                  </p>

                  <form>
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address *
                      </label>
                      <div class="input-group input-group-lg">
                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i class="bi bi-envelope-fill"></i>
                        </span>
                        <input
                          type="email"
                          class="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="E-mail"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>

                    <div class="mb-4">
                      <label for="inputPassword5" class="form-label">
                        Password *
                      </label>
                      <div class="input-group input-group-lg">
                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i class="fas fa-lock"></i>
                        </span>
                        <input
                          type="password"
                          class="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="password"
                          id="inputPassword5"
                        />
                      </div>
                      <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8 characters at least
                      </div>
                    </div>

                    <div class="mb-4 d-flex justify-content-between mb-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Remember me
                        </label>
                      </div>
                      <div class="text-primary-hover">
                        <a href="forgot-password.html" class="text-secondary">
                          <u>Forgot password?</u>
                        </a>
                      </div>
                    </div>

                    <div class="align-items-center mt-0">
                      <div class="d-grid">
                        <button class="btn btn-primary mb-0" type="button">
                          Login
                        </button>
                      </div>
                    </div>
                  </form>

                  <div class="row">
                    <div class="position-relative my-4">
                      <hr />
                      <p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                        Or
                      </p>
                    </div>

                    <div class="col-xxl-6 d-grid">
                      <a href=" " class="btn bg-google mb-2 mb-xxl-0">
                        <i class="fab fa-fw fa-google text-white me-2"></i>Login
                        with Google
                      </a>
                    </div>

                    <div class="col-xxl-6 d-grid">
                      <a href=" " class="btn bg-facebook mb-0">
                        <i class="fab fa-fw fa-facebook-f me-2"></i>Login with
                        Facebook
                      </a>
                    </div>
                  </div>

                  <div class="mt-4 text-center">
                    <span>
                      Don't have an account?{" "}
                      <a href="sign-up.html">Signup here</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
