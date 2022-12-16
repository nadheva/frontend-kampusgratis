import React from 'react'

import Footer from '../../../components/default/Footer';
import Header from '../../../components/default/Header';

const PendidikanS1 = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-light">
          <div className="container">
            <div className="row position-relative pb-4">
              <div className="col-lg-8 position-relative">
                <h1>Pendidikan S1</h1>
              </div>
            </div>
            <div
              className="h-300px mb-n9 rounded-3"
              style={{
                backgroundImage: "url(assets/images/bg/04.jpg)",
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
                  Kampus Gratis merupakan salah satu sistem manajemen e-learning yang mencantumkan laporan peningkatan atau progres pembelajaran mahasiswa layaknya seperti perguruan tinggi. Pengembangan platform pembelajaran ini merupakan salah satu inisiasi dari pendiri PT. Menara Indonesia atau M-Knows Consulting, yang ingin memberikan solusi pendidikan tinggi yang gratis, berkualitas, bisa diakses siapapun khususnya kaum marginal, dan selalu update layaknya platform Wikipedia.
                </p>
                <p>
                  Berbagai fitur yang tersedia, dapat digunakan oleh siapapun untuk menambah wawasan pengetahuan layaknya sedang berkuliah namun bisa diakses kapanpun dan dimanapun.
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

export default PendidikanS1