import React from "react";

const Fakultas1 = () => {
  return (
    <>
      <section className="fakultas-section-kg1 bg-abu py-5 pt-8">
        <div className="container">
          <div className="mb-5">
            <h2 className="title-kg1">FAKULTAS & JURUSAN</h2>
          </div>
          <div className="fakultas-body">
            <div className="row align-items-center ">
              <div className="col-lg-2 col-4">
                <img
                  src="assets/images/fakultas-kg1/business 1.png"
                  alt="bisnis"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-8 col-4 ">
                <h3>Fakultas Bisnis & Pembiayaan </h3>
              </div>
              <div className="col-lg-2 col-4 text-lg-end">
                <button className="btn btn-sm btn-outline-warning py-1">
                  Klik disini
                </button>
              </div>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="row align-items-center ">
              <div className="col-lg-2 col-4">
                <img
                  src="assets/images/fakultas-kg1/tablet-pen 1.png"
                  alt="desain"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-8 col-4 ">
                <h3>Fakultas Desain Digital </h3>
              </div>
              <div className="col-lg-2 col-4 text-lg-end">
                <button className="btn btn-sm btn-outline-warning py-1">
                  Klik disini
                </button>
              </div>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="row align-items-center ">
              <div className="col-lg-2 col-4">
                <img
                  src="assets/images/fakultas-kg1/nanomachine 1.png"
                  alt="ekonomi"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-8 col-4 ">
                <h3>Fakultas Teknologi Pendukung Ekonomi Digital </h3>
              </div>
              <div className="col-lg-2 col-4 text-lg-end">
                <button className="btn btn-sm btn-outline-warning py-1">
                  Klik disini
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E2ECF0"
          fillOpacity="1"
          d="M0,224L30,202.7C60,181,120,139,180,138.7C240,139,300,181,360,181.3C420,181,480,139,540,144C600,149,660,203,720,197.3C780,192,840,128,900,101.3C960,75,1020,85,1080,112C1140,139,1200,181,1260,181.3C1320,181,1380,139,1410,117.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Fakultas1;
