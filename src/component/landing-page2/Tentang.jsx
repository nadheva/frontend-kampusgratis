import React from "react";

const Tentang = () => {
  return (
    <section className="bg-first-color">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-xl-4 order-2 order-xl-1">
            <div className="position-relative">
              <div className="bg-body shadow  p-5 rounded-3 position-relative mb-5 mb-md-0">
                <h5 className="mb-2 mb-md-4 text-center">
                  <span className="title-small">Registrasi Sekarang</span>
                  <br /> Gratis.
                </h5>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-first-color text-white"
                      placeholder="Nama"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-first-color text-white"
                      placeholder="Nomor"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-first-color text-white"
                      placeholder="Email"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-sm bg-first-color text-warning w-100"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-1 text-xl-start text-white">
            <h2 className="fs-1 text-white">Sekilas Tentang Kita</h2>
            <p>
              <span className="text-warning">Kampus Gratis </span> merupakan
              sistem manajemen E-learning yang mencantumkan laporan peningkatan
              atau progres pembelajaran mahasiswa layaknya seperti perguruan
              tinggi.
            </p>
            <p>
              Pengembangan platform pembelajaran ini merupakan salah satu
              inisiasi dari pendiri
              <span className="text-danger"> PT Menara Indonesia </span> atau
              <span className="text-info"> M-Knows Consulting</span>, yang ingin
              memberikan solusi pendidikan tinggi yang gratis, berkualitas, bisa
              diakses siapapun khususnya kaum marginal, dan selalu update
              layaknya platform Wikipedia.
            </p>
            <p> Dan berikut adalah beberapa program kami </p>

            <ul className="text-warning ps-3">
              <li>Pendidikan D1 dan S1</li>
              <li>ODP ( Hybrid Crash Program )</li>
              <li>Bootcamp & Course</li>
              <li>Project</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
