import React from "react";

const Counter = () => {
  return (
    <section className="py-0 py-xl-5 counter-section">
      <div className="container pt-4">
        <div className="row g-4">
          <div className="col-sm-6 col-xl-3 py-4">
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="assets/images/icon-cunter/movie.png"
                alt="logo"
              />
              <div className="ms-4 h6 fw-normal">
                <h6 className="mb-2">Konten Menarik</h6>
                <p className="mb-0">
                  Video, Web,Presentasi, Dokumen - Tonton di perangkat apa pun!
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3 py-4">
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="assets/images/icon-cunter/reading.png "
                alt="logo"
              />
              <div className="ms-4 h6 fw-normal">
                <h6 className="mb-2">Belajar Mudah</h6>
                <p className="mb-0">
                  Pembelajaran yang terstruktur membuat belajar menjadi mudah
                  dan cepat
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3 py-4">
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="assets/images/icon-cunter/quiz.png"
                alt="logo"
              />
              <div className="ms-4 h6 fw-normal">
                <h6 className="mb-2">Kuis dan Ulasan</h6>
                <p className="mb-0">
                  Test kemampuan anda & apa pendapat mereka tentang konten.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3 py-4">
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="assets/images/icon-cunter/certificate.png"
                alt="logo"
              />
              <div className="ms-4 h6 fw-normal">
                <h6 className="mb-2">Sertifikat</h6>
                <p className="mb-0">
                  Setelah selesai akan mendapatkan sertifikat yang menunjukkan
                  pencapaian anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
