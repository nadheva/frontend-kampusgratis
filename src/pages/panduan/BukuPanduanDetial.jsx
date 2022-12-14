import React from 'react'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const BukuPanduanDetial = () => {
    return (
        <>
            <Header />
            <main>
                <section className="bg-light">
                    <div className="container">
                        <div className="row position-relative pb-4">
                            <div className="col-lg-8 position-relative">
                                <h1>Panduan Tutorial Aplikasi</h1>
                            </div>
                        </div>
                        <div
                            className="h-400px mb-n9 rounded-3"
                            style={{
                                backgroundImage: "url(../assets/images/bg/03.jpg)",
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
                                    Desain web itu rumit. Kita harus mempertimbangkan banyak hal saat merancang sebuah situs web, dari tampilan visual (bagaimana tampilan situs web) ke desain fungsional (bagaimana situs web bekerja).
                                    Saat ini, website sudah makin menjadi kompleks. Sama seperti fashion, desain website pun selalu berubah-ubah mengikuti tren.
                                </p>
                                <p>
                                    Tentu saja dengan semakin kompleks desain web di jaman sekarang, semakin sulit juga bagi Anda para web developer untuk membangun sebuah website dari nol. Ide-ide klien sendiri pun sudah semakin rumit dan bermacam-macam.
                                </p>
                                <p>
                                    Maka dari itu, Anda memerlukan cara perencanaan dan langkah-langkah kerja yang bisa membantu Anda untuk mengerjakan proyek desain web dengan lebih efisien.
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

export default BukuPanduanDetial