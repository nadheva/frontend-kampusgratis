import React from 'react'
import Footer from '../../../components/default/Footer'
import Header from '../../../components/default/Header'

const Projek = () => {
    return (
        <>
            <Header />
            <main>
                <section className="bg-light">
                    <div className="container">
                        <div className="row position-relative pb-4">
                            <div className="col-lg-8 position-relative">
                                <h1>Projek</h1>
                            </div>
                        </div>
                        <div
                            className="h-300px mb-n9 rounded-3"
                            style={{
                                backgroundImage: "url(assets/images/bg/01.jpg)",
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
                                    Pada platform Kampus Gratis, anda tidak hanya mendapatkan penjelasan materi saja. Pada akhir materi pada setiap topik pelatihan yang anda ambil akan diberikan final project yang telah dirancang dan disesuaikan dengan sedemikian rupa agar diharapkan dapat membangun keterampilan dan pemahaman anda lebih dalam.
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

export default Projek