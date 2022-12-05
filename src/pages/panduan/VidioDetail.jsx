import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';

const VidioDetail = () => {
    return (
        <>
            <Header />
            <main>
                <section className="pt-3 pt-xl-5">
                    <div className="container" data-sticky-container>
                        <div className="row g-4">
                            <div className="col-xl-8 col-lg-8 col-12">
                                <div className="row g-4">
                                    <div className="col-12 position-relative">
                                        <iframe src="https://www.youtube.com/embed/QB1eT6BbGW0"
                                            title="vidio"
                                            width="100%"
                                            height="443px"
                                            display="block"
                                            position="relative" />
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="bg-body shadow rounded-2 p-4">
                                            <h5 className="mb-3 ">Judul</h5>
                                            <p className="mb-0">Devices with aspect ratios greater than 16:9 are taller in relation to the width than the standard phone. 16:9, commonly known as widescreen, is the most common aspect ratio for mobile devices, TVs, and computer monitors, and is the international standard format for HDTV.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-12">
                                <div data-sticky data-margin-top="80" data-sticky-for="768">
                                    <div className="card card-body shadow  p-4">
                                        <div className="row g-5">
                                            <div className="col-12">
                                                <h5 className="mb-4">Vidio Lainnya</h5>
                                                <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                    <div className="d-flex">
                                                        <Link to="" className="btn btn-danger-soft btn-round mb-0">
                                                            <i className="fas fa-play" />
                                                        </Link>
                                                        <Link to="" className="ms-2 ms-sm-3 mt-1 mt-sm-0 d-flex align-items-center">
                                                            <h6 className="mb-0">Judul</h6>
                                                        </Link>
                                                    </div>
                                                    <Link to="" className="btn btn-sm btn-success mb-0" >
                                                        Buka
                                                    </Link>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
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

export default VidioDetail;