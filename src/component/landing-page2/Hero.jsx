import React from 'react';

const Hero = () => {
    return (
        <section className="position-relative hero-section">
            <div
                className="bg-content position-absolute text-white d-flex flex-column align-items-center justify-content-center">
                <h1 className="mb-4 mt-0 font-weight-bold text-center">Pembelajaran
                    <span className="first-color-second"> Gratis </span> dan
                    <span className="text-warning"> Tepercaya </span>
                    <br />
                    Pertama di
                    <span className="text-danger"> Indonesia </span> </h1>
                <div className="text-center mb-3 mt-2">
                    <a href="#" id="outlined" className="btn btn-hero px-5 text-white mx-1">Coba Sekarang - Gratis <i
                        className="bi bi-chevron-right pl-5"></i> </a>
                </div>
                <span className="sub-text-hero">Gratis & Akses Selamanya
                </span>
            </div>
        </section>
    )
}

export default Hero