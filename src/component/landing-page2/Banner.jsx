import React from "react";

const Banner = () => {
  return (
    <section className="pt-0 pt-lg-5 ">
      <div className="container position-relative">
        <figure className="position-absolute top-50 start-50 translate-middle ms-2">
          <svg>
            <path
              className="fill-white opacity-4"
              d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"
            />
            <path
              className="fill-white opacity-4"
              d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"
            />
            <path
              className="fill-white opacity-4"
              d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"
            />
            <path
              className="fill-white opacity-4"
              d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"
            />
          </svg>
        </figure>

        <div className="row">
          <div className="col-12">
            <div className="bg-first-color p-4 p-sm-5 rounded-3">
              <div className="row position-relative">
                <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
                  <svg width="141px" height="141px">
                    <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
                  </svg>
                </figure>
                <div className="col-lg-8 col-11 mx-auto position-relative">
                  <div className="text-center">
                    <h3 className="text-white mb-3">
                      Tujuan pendidikan adalah mengganti pikiran kosong dengan
                      pikiran terbuka.
                    </h3>
                    <p className="text-info">Malcolm Forbes</p>
                    <p className="text-white mb-3">
                      <span className="text-warning font-weight-bold"> KAMPUS GRATIS </span>
                        adalah Manajemen Pembelajaran yang sempurna untuk
                      memungkinkan pembelajaran Komunitas, berbagi pengetahuan,
                      dan menginspirasi orang lain!
                    </p>
                    <a href=" " className="btn btn-warning btn-sm mb-0">
                      Coba di Kampus Gratis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
