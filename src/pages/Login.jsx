import React, { useEffect } from "react";
import FormLogin from "../component/auth/FormLogin";
// import "../assets/user/css-custon/style.css"

const Login = () => {
  useEffect(() => {
    document.title = "Kampus Gratis | Login";
  });

  return (
    <main>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div className="p-3 p-lg-5">
                <div className="text-center">
                  <h2 className="fw-bold">Selamat Datang Di Kampus Gratis!</h2>
                  <p className="mb-0 h6 fw-light">
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
            <FormLogin />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
