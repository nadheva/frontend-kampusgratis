import React, { useEffect } from "react";
import FormRegist from "../../component/auth/FormRegist";

const Regist = () => {
  useEffect(() => {
    document.title = "Kampus Gratis | Register";
  });
  return (
    <main>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row bg-custom">
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-opacity-10 vh-lg-100 bg-custom bg-line">
              <div className="p-3 p-lg-5 bg-blur mx-4">
                <div className="text-left">
                  <h1 className="fw-bold text-white">Selamat Datang <br /> Di Kampus Gratis!</h1>
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
            <FormRegist />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Regist;
