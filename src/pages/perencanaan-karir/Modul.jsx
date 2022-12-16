import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const Modul = () => {

    const data = [
        {
            title: "Modul 1",
            img: "../../assets/images/courses/4by3/08.jpg",
            vidio: "3",
            pdf: "8",
        },
        {
            title: "Modul 2",
            img: "../../assets/images/courses/4by3/07.jpg",
            vidio: "4",
            pdf: "1",
        },
        {
            title: "Modul 3",
            img: "../../assets/images/courses/4by3/06.jpg",
            vidio: "3",
            pdf: "2",
        },
        {
            title: "Modul 4",
            img: "../../assets/images/courses/4by3/05.jpg",
            vidio: "3",
            pdf: "2",
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className="py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-light p-4 text-center rounded-3">
                                    <h1 className="m-0">Modul Karir</h1>
                                    {/* <div className="d-flex justify-content-center">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb breadcrumb-dots mb-0">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    Course minimal
                                                </li>
                                            </ol>
                                        </nav>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="row g-4">
                                    {
                                        data.map((x, i) => (
                                            <div className="col-sm-6 col-lg-4 col-xl-3" key={i}>
                                                <div className="card shadow h-100">
                                                    <img
                                                        src={x.img}
                                                        className="card-img-top"
                                                        alt="course image"
                                                    />
                                                    <div className="card-body pb-0">
                                                        <h5 className="card-title">
                                                            <Link to="" >{x.title}</Link>
                                                        </h5>
                                                    </div>
                                                    <div className="card-footer pt-0 pb-3">
                                                        <hr />
                                                        <div className="d-flex justify-content-between">
                                                            <span className="h6 fw-light mb-0">
                                                                {x.vidio} Vidio
                                                            </span>
                                                            <span className="h6 fw-light mb-0">
                                                                {x.pdf} Pdf
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
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

export default Modul