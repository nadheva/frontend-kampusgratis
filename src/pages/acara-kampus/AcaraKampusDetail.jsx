import React from 'react'
import Footer from '../default/Footer'
import Header from '../default/Header'

const AcaraKampusDetail = () => {
    return (
        <>
            <Header />
            <main>
                {/* ======================= Main Banner START */}
                <section>
                    <div className="container">
                        <div className="row g-4 g-md-5">
                            <div className="col-md-12 text-center mx-auto">
                                <div
                                    className="card card-body shadow p-2 h-200px h-sm-400px position-relative overflow-hidden"
                                    style={{
                                        backgroundImage: "url(assets/images/about/28.jpg)",
                                        backgroundPosition: "center left",
                                        backgroundSize: "cover"
                                    }}
                                >
                                    <div className="bg-overlay bg-dark opacity-6" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h1>Webinar : Design logo using Adobe Illustrator and Photoshop.</h1>
                                <div className="d-sm-flex justify-content-between align-items-center mb-2">
                                    <div className="mt-sm-0">
                                        <a
                                            href=" "
                                            className="badge bg-primary bg-opacity-10 text-primary mb-2"
                                        >
                                            Zoom
                                        </a>
                                    </div>
                                    <div className="mt-sm-0">
                                        <div className="icon-md bg-dark rounded-circle fs-5">
                                            <a href=" " className="text-white">
                                                <i className="bi bi-share" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 mt-3">
                                    We understand that theory is important to build a solid foundation,
                                    we understand that theory alone isn't going to get the job done so
                                    that's why this course is packed with practical hands-on examples
                                    that you can follow step by step. astonished. Demesne had new
                                    manners savings staying had. Under folly balls, death own point now
                                    men. Match way these she avoids seeing death. She who drift their
                                    fat off. Ask a quick six seven offer see among.
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <div className="card card-body bg-light p-5 text-center">
                                    <h5 className="fw-normal">One-Time Payment</h5>
                                    <h2>Gratis</h2>
                                    <a href=" " className="btn btn-blue mb-2">
                                        Ikuti Kegiatan
                                    </a>
                                    <ul className="avatar-group mb-1 justify-content-center">
                                        <li className="avatar avatar-sm">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src="assets/images/avatar/01.jpg"
                                                alt="avatar"
                                            />
                                        </li>
                                        <li className="avatar avatar-sm">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src="assets/images/avatar/02.jpg"
                                                alt="avatar"
                                            />
                                        </li>
                                        <li className="avatar avatar-sm">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src="assets/images/avatar/03.jpg"
                                                alt="avatar"
                                            />
                                        </li>
                                        <li className="avatar avatar-sm">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src="assets/images/avatar/04.jpg"
                                                alt="avatar"
                                            />
                                        </li>
                                    </ul>
                                    <p className="mb-0">Bergabunglah diacara kami</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ======================= Main Banner END */}

                {/* ======================= Category START */}
                <section>
                    <div className="container">
                        <div className="row g-4">

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card card-body shadow rounded-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-lg bg-purple bg-opacity-10 rounded-circle text-purple">
                                            <i className="fas fa-users" />
                                        </div>
                                        <div className="ms-3">
                                            <h5 className="mb-0">
                                                <a href="#" className="stretched-link">
                                                    Kapasitas
                                                </a>
                                            </h5>
                                            <span>25/50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card card-body shadow rounded-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-lg bg-danger bg-opacity-10 rounded-circle text-danger">
                                            <i className="fas fa-ticket-alt" />
                                        </div>
                                        <div className="ms-3">
                                            <h5 className="mb-0">
                                                <a href="#" className="stretched-link">
                                                    Harga Tiket
                                                </a>
                                            </h5>
                                            <span>Gratis</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card card-body shadow rounded-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-lg bg-blue bg-opacity-10 rounded-circle text-blue">
                                            <i className="fas fa-building" />
                                        </div>
                                        <div className="ms-3">
                                            <h5 className="mb-0">
                                                <a href="#" className="stretched-link">
                                                    Jenis Kegiatan
                                                </a>
                                            </h5>
                                            <span>Online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="card card-body shadow rounded-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-lg bg-success bg-opacity-10 rounded-circle text-success">
                                            <i className="fas fa-clock" />
                                        </div>
                                        <div className="ms-3">
                                            <h5 className="mb-0">
                                                <a href="#" className="stretched-link">
                                                    15 Agustus 2022
                                                </a>
                                            </h5>
                                            <span>19:00 - 21.30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ======================= Category END */}

                {/* ======================= Detail START */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div>
                                    <h5 className="mt-3">Desctriprion </h5>
                                    <p>
                                        Perceived end knowledge certainly day sweetness why cordially. On
                                        forth doubt miles of child. Exercise joy man children rejoiced.
                                        Yet uncommonly his ten who diminution astonished. Demesne had new
                                        manners savings staying had. Under folly balls, death own point
                                        now men. Match way these she avoids seeing death. She who drift
                                        their fat off. Ask a quick six seven offer see among. Handsome met
                                        debating sir dwelling age material. As style lived he worse dried.
                                        Offered related so visitors we private removed.
                                    </p>
                                    <p>
                                        Yet uncommonly his ten who diminution astonished. Demesne had new
                                        manners savings staying had. Under folly balls, death own point
                                        now men. Match way these she avoids seeing death. She who drift
                                        their fat off. Ask a quick six seven offer see among. As style
                                        lived he worse dried. Offered related so visitors we private
                                        removed.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="mt-3">Notes</h5>
                                    <p>
                                        Perceived end knowledge certainly day sweetness why cordially. On
                                        forth doubt miles of child. Exercise joy man children rejoiced.
                                        Yet uncommonly his ten who diminution astonished. Demesne had new
                                        manners savings staying had. Under folly balls, death own point
                                        now men. Match way these she avoids seeing death. She who drift
                                        their fat off. Ask a quick six seven offer see among. Handsome met
                                        debating sir dwelling age material. As style lived he worse dried.
                                        Offered related so visitors we private removed.
                                    </p>
                                    <p>
                                        Yet uncommonly his ten who diminution astonished. Demesne had new
                                        manners savings staying had. Under folly balls, death own point
                                        now men. Match way these she avoids seeing death. She who drift
                                        their fat off. Ask a quick six seven offer see among. As style
                                        lived he worse dried. Offered related so visitors we private
                                        removed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ======================= Detail END */}
            </main>

            <Footer />
        </>
    )
}

export default AcaraKampusDetail