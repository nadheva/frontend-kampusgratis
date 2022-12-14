import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const BukuPanduan = () => {

    const data = [
        {
            id: "1",
            title: "Panduan Tutorial Aplikasi",
            link: "/buku-panduan"
        },
        {
            id: "2",
            title: "Panduan Pendaftaran Akun dan Mahasiswa",
            link: "/buku-panduan"
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="bg-blue py-7">
                    <div className="container">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-8">
                                <h1 className="text-white">
                                    Buku Panduan
                                </h1>
                                <p className="text-white">
                                    Berupa buku petunjuk penggunaan dan pengertian fitur-
                                    fitur yang ada di Website KG secara terperinci (isinya
                                    lebih detail jika dibandingkan video tutorial). Menjelaskan
                                    juga keunggulan dan manfaat fitur tersebut.
                                </p>
                            </div>
                            <div className="col-lg-3"> </div>
                        </div>
                    </div>
                </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow rounded-2 p-0 mt-n5">
                                    <div className="card-body p-sm-4">
                                        {
                                            data.map((x) => (
                                                <Link to={`/buku-panduan/${x.id}`} className="text-body" key={x.id}>
                                                    <div className="card border-top border-info border-4 shadow-lg rounded-2 px-4 py-4 my-4">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <h5 className="m-0">
                                                                {x.title}
                                                            </h5>
                                                            <div className="d-flex flex-column align-items-center m-0">
                                                                <i className="bi bi-book fs-5 text-info"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default BukuPanduan