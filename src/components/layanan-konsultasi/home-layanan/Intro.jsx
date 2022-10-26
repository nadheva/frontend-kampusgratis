import React from 'react'

const Intro = () => {
    return (
        <section className="bg-primary bg-opacity-10">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h1 className="display-6">Konsultasi &amp; Layanan</h1>
                        <p className="mb-0">
                            Layanan konseling yang dilaksanakan Kampus Gratis
                        </p>
                    </div>
                    <div className="col-12 mt-6">
                        <img
                            src="assets/images/element/help-center.svg"
                            className="w-100"
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro