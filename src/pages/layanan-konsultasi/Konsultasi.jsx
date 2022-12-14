import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/default/Footer'
import Header from '../../components/default/Header'

const Konsultasi = () => {

    const data = [
        {
            title: "Admin 1",
            link: "/layanan-konsultasi/konsultasi/chat-konsultasi",
        },
        {
            title: "Admin 2",
            link: "/layanan-konsultasi/konsultasi/chat-konsultasi",
        },
        {
            title: "Admin 3",
            link: "/layanan-konsultasi/konsultasi/chat-konsultasi",
        },
    ]
    return (
        <>
            <Header />
            <main>
                <section className="mb-3">
                    <div className="container-fluid">
                        <div className="row g-4 g-md-5 align-items-center justify-content-center mb-xxl-n7">
                            <div className="col-lg-6 col-xl-4 col-xxl-5 text-center ">
                                <h1 className="display-6">Konsultasi</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="position-relative">
                    <div className="container">
                        <div className="row g-4">
                            {
                                data.map((x, i) => (
                                    <div div className="col-sm-6 col-lg-4" >
                                        <div className="card card-body bg-light p-4 h-100">
                                            <figure>
                                                <svg
                                                    className="fill-purple"
                                                    width="54.22px"
                                                    height="52.86px"
                                                    viewBox="0 0 54.22 52.86"
                                                    style={{ enableBackground: "new 0 0 54.22 52.86" }}
                                                >
                                                    <path d="M32.48,50.83H15.21c-0.45,0-0.82-0.37-0.82-0.82v-2.73c0-1.21-0.91-2.24-2.11-2.39L9.9,44.58 c-2.02-0.26-3.54-1.99-3.54-4.03V34.8l-2.94,0.02c-0.59,0-1.11-0.3-1.41-0.81C1.72,33.5,1.72,32.9,2,32.39l2.63-4.63 c1.46-2.58,2.24-5.51,2.23-8.47c0-4.95,2.25-9.62,6.02-12.49c3.77-2.87,8.47-4.09,13.22-3.44c0.67,0.09,1.35,0.22,2,0.39 c0.44,0.11,0.7,0.56,0.59,1c-0.11,0.44-0.57,0.71-1,0.59c-0.59-0.15-1.2-0.27-1.81-0.36c-4.32-0.59-8.58,0.52-12,3.12 c-3.36,2.56-5.37,6.74-5.37,11.18c0,3.25-0.85,6.46-2.45,9.28L3.44,33.2l2.94-0.03C7.28,33.17,8,33.9,8,34.8v5.76 c0,1.21,0.91,2.24,2.11,2.39l2.38,0.31c2.02,0.26,3.54,1.99,3.54,4.03v1.9h15.62l-0.02-9.33c0-2.73,1.15-5.4,3.16-7.35 c0.66-0.64,1.27-1.33,1.81-2.07c0.27-0.37,0.78-0.45,1.15-0.18c0.37,0.27,0.45,0.79,0.18,1.15c-0.6,0.81-1.27,1.58-1.99,2.28 c-1.72,1.66-2.67,3.85-2.66,6.16l0.02,10.15c0,0.22-0.09,0.43-0.24,0.58C32.91,50.75,32.7,50.83,32.48,50.83z" />
                                                    <path d="M43.22,50.83H2.18c-0.45,0-0.82-0.37-0.82-0.82c0-0.45,0.37-0.82,0.82-0.82h41.04c0.45,0,0.82,0.37,0.82,0.82 C44.05,50.47,43.68,50.83,43.22,50.83z" />
                                                    <path d="M43.81,27.69H29.1c-0.45,0-0.82-0.37-0.82-0.82c0-0.45,0.37-0.82,0.82-0.82h14.72c0.45,0,0.82,0.37,0.82,0.82 C44.64,27.32,44.27,27.69,43.81,27.69z" />
                                                    <path d="M45.79,18.58H31.84c-0.45,0-0.82-0.37-0.82-0.82c0-0.45,0.37-0.82,0.82-0.82h13.95c0.45,0,0.82,0.37,0.82,0.82 C46.61,18.21,46.24,18.58,45.79,18.58z" />
                                                    <path d="M43.81,9.46H26.68c-0.45,0-0.82-0.37-0.82-0.82c0-0.45,0.37-0.82,0.82-0.82h17.13c0.45,0,0.82,0.37,0.82,0.82 C44.64,9.09,44.27,9.46,43.81,9.46z" />
                                                    <path d="M46.59,12.23c-1.98,0-3.6-1.61-3.6-3.6s1.61-3.6,3.6-3.6s3.6,1.61,3.6,3.6S48.57,12.23,46.59,12.23z M46.59,6.69 c-1.07,0-1.95,0.87-1.95,1.95c0,1.07,0.87,1.95,1.95,1.95c1.07,0,1.95-0.87,1.95-1.95C48.54,7.56,47.66,6.69,46.59,6.69z" />
                                                    <path d="M48.56,21.35c-1.98,0-3.6-1.61-3.6-3.6s1.61-3.6,3.6-3.6s3.6,1.61,3.6,3.6S50.55,21.35,48.56,21.35z M48.56,15.8 c-1.07,0-1.95,0.87-1.95,1.95c0,1.07,0.87,1.95,1.95,1.95c1.07,0,1.95-0.87,1.95-1.95C50.51,16.68,49.64,15.8,48.56,15.8z" />
                                                    <path d="M46.59,30.46c-1.98,0-3.6-1.61-3.6-3.6s1.61-3.6,3.6-3.6s3.6,1.61,3.6,3.6S48.57,30.46,46.59,30.46z M46.59,24.92 c-1.07,0-1.95,0.87-1.95,1.95s0.87,1.95,1.95,1.95c1.07,0,1.95-0.87,1.95-1.95S47.66,24.92,46.59,24.92z" />
                                                </svg>
                                            </figure>

                                            <>
                                                <h5>{x.title}</h5>
                                                <div className="d-sm-flex justify-content-between align-items-center pt-3">
                                                    <h6 className="mb-0" />
                                                    <Link to={x.link} className="btn btn-link p-0 mb-0">
                                                        Konsultasi Sekarang
                                                        <i className="bi bi-arrow-right ms-2" />
                                                    </Link>
                                                </div>
                                            </>

                                        </div>
                                    </div >
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

export default Konsultasi