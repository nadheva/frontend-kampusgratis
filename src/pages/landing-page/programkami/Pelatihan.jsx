import React from 'react'
import Footer from '../../../components/default/Footer'
import Header from '../../../components/default/Header'

const Pelatihan = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-light">
          <div className="container">
            <div className="row position-relative pb-4">
              <div className="col-lg-8 position-relative">
                <h1>Pelatihan</h1>
              </div>
            </div>
            <div
              className="h-300px mb-n9 rounded-3"
              style={{
                backgroundImage: "url(assets/images/bg/03.jpg)",
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
                  Kampus Gratis memberikan pelatihan berupa topik - topik yang sedang populer dan sangat dibutuhkan di era ini. Materi yang diberikan dirancang agar dapat dipahami oleh pemula sekali pun, sehingga semua orang bisa mengikuti pelatihan ini. Output dari pelatihan ini diharapkan dapat melatih dan mengembangkan suatu keterampilan dan pengetahuan terhadap topik atau materi yang anda ambil.
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

export default Pelatihan