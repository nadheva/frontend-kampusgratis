import React from 'react';

const Regist = () => {
  return (
    <main>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div className="p-3 p-lg-5">
                <div className="text-center">
                  <h2 className="fw-bold">Welcome to our largest community</h2>
                  <p className="mb-0 h6 fw-light">Let's learn something new today!</p>
                </div>
                <img src="assets/images/element/02.svg" className="mt-5" alt=""/>
                <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar"/></li>
                    <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar"/></li>
                    <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar"/></li>
                    <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar"/></li>
                  </ul>
                  <p className="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  <img src="assets/images/element/03.svg" className="h-40px mb-2" alt=""/>
                  <h2>Sign up for your account!</h2>
                  <p className="lead mb-4">Nice to see you! Please Sign up with your account.</p>
                
                  <form>
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">Email address *</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                        <input type="email" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail" id="exampleInputEmail1"/>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label for="inputPassword5" className="form-label">Password *</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                        <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="inputPassword5"/>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label for="inputPassword6" className="form-label">Confirm Password *</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                        <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="inputPassword6"/>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox-1"/>
                        <label className="form-check-label" for="checkbox-1">By signing up, you agree to the<a href=" "> terms of service</a></label>
                      </div>
                    </div>
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button className="btn btn-primary mb-0" type="button">Sign Up</button>
                      </div>
                    </div>
                  </form>

                  <div className="row">
                    <div className="position-relative my-4">
                      <hr/>
                      <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                    </div>
                    <div className="col-xxl-6 d-grid">
                      <a href=" " className="btn bg-google mb-2 mb-xxl-0"><i className="fab fa-fw fa-google text-white me-2"></i>Signup with Google</a>
                    </div>
                    <div className="col-xxl-6 d-grid">
                      <a href=" " className="btn bg-facebook mb-0"><i className="fab fa-fw fa-facebook-f me-2"></i>Signup with Facebook</a>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span>Already have an account?<a href="sign-in.html"> Sign in here</a></span>
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

export default Regist;