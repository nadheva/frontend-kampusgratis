import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const ListPekerjaan = () => {

    const data = [
        {
            title: "Mitra Kami ",
            link: "/penyaluran-kerja/pilih-pekerjaan",
            img: "assets/images/element/kerja-1.svg",
            type: "sponsored"
        },
        {
            title: "Design Digital & Creative ",
            link: "/penyaluran-kerja/pilih-pekerjaan",
            img: "assets/images/element/kerja-2.svg",
            type: "design"
        },
        {
            title: "Finance & Accounting ",
            link: "/penyaluran-kerja/pilih-pekerjaan",
            img: "assets/images/element/kerja-3.svg",
            type: "finance"
        },
        {
            title: "Teknologi & Programming",
            link: "/penyaluran-kerja/pilih-pekerjaan",
            img: "assets/images/element/kerja-4.svg",
            type: "programming"
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="py-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-light p-4 text-center rounded-3">
                                    <h1 className="m-0">Penyaluran Kerja</h1>
                                    <div className="d-flex justify-content-center">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-dots mb-0">
                                                <li className="breadcrumb-item">
                                                    <Link to="/kategori" >Fitur</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    Penyaluran Kerja
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="position-relative pb-0 pb-sm-5">
                    <div className="container">
                        <div className="row g-4">
                            {
                                data.map((x) => (
                                    <div className="col-sm-6 col-md-4 col-xl-3">
                                        <div className="shadow bg-opacity-10 rounded-3 text-center p-3 position-relative btn-transition">
                                            <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                                                <img src={x.img} alt="" />
                                            </div>
                                            <h5 className="mb-0">
                                                <Link to={`/penyaluran-kerja/pilih-pekerjaan/${x.type}`} className="stretched-link">
                                                    {x.title}
                                                </Link>
                                            </h5>
                                            <div className="d-sm-flex justify-content-center align-items-center pt-3">
                                                <Link to={`/penyaluran-kerja/pilih-pekerjaan/${x.type}`} className="btn btn-link p-0 mb-0 text-body" >
                                                    Lihat Pekerjaan <i className="bi bi-arrow-right ms-2"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ListPekerjaan