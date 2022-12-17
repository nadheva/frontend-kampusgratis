import React from 'react'

import Footer from '../../../components/default/Footer';
import Header from '../../../components/default/Header';

const Magang = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-light">
          <div className="container">
            <div className="row position-relative pb-4">
              <div className="col-lg-8 position-relative">
                <h1>Magang</h1>
              </div>
            </div>
            <div
              className="h-500px mb-n9 rounded-3"
              style={{
                backgroundImage: "url(../../assets/images/asset-kg/magang.JPG)",
                backgroundPosition: "center left",
                backgroundSize: "cover"
              }}
            ></div>
          </div>
        </section>
        <section className="pt-9">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>
                  PT. Menara Indonesia turut membuka program magang yang difokuskan untuk mahasiswa yang diharapkan dapat membantu dalam pembuatan dan pengembangan aplikasi Kampus Gratis itu sendiri. Hal ini guna mendukung sistem pembelajaran yang menarik, interaktif dan berkualitas melalui aktivitas magang.
                </p>
                <p>
                  Dengan bergabung di program ini, mahasiswa dapat langsung merasakan dan mempelajari bagaimana mengelola project, berkontribusi dalam proses pembuatan aplikasi dan pegembangan sistem pembelajaran berbasis online, serta bekerjasama dengan pihak internal dan eksternal dalam menjalin hubungan yang profesional selama program magang berlangsung.
                </p>
                <p>
                  Aktivitas magang meliputi:
                  <ol>
                    <li>
                      Pengembangan platform LMS dengan nama Kampus Gratis.
                    </li>
                    <li>
                      Mendesain alur kurikulum up-to-date yang praktis dan memiliki link-and-match dengan dunia kerja.
                    </li>
                    <li>
                      Membuat konten video, infografis dan pdf pembelajaran untuk mendukung materi Kampus Gratis
                    </li>
                    <li>
                      Membuat alat tes dan uji pembelajaran yang sesuai dengan konsep materi yang di desain.
                    </li>
                    <li>
                      Promosi Kampus Gratis pada beberapa industri pengguna dan universitas.
                    </li>
                    <li>
                      Mencari & bekerja sama dengan calon pengajar.
                    </li>
                    <li>
                      Mengembangkan mesin pencari konten otomatis berbasis AI.
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Magang