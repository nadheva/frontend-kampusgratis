import React from 'react'

const Intro = () => {
    return (
        <section>
            <div className="container position-relative">
                <div className="row">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-6 col-md-3 text-center order-1">
                                <img
                                    loading="lazy"
                                    src="/assets/images/element/category-1.svg"
                                    alt="x"
                                />
                            </div>
                            <div className="col-md-6 px-md-5 text-center position-relative order-md-2 mb-5 mb-md-0">
                                <figure className="position-absolute top-0 start-0">
                                    <svg width="22px" height="22px" viewBox="0 0 22 22">
                                        <polygon
                                            className="fill-orange"
                                            points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "
                                        ></polygon>
                                    </svg>
                                </figure>
                                <figure className="position-absolute top-0 start-50 translate-middle mt-n6 d-none d-md-block">
                                    <svg width="27px" height="27px">
                                        <path
                                            className="fill-purple"
                                            d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"
                                        >
                                        </path>
                                    </svg>
                                </figure>
                                <h1 className="mb-3">Apa yang ingin Kamu pelajari?</h1>
                                <p className="mb-3">
                                    Kembangkan keterampilan Kamu dengan kursus dan sertifikasi
                                    online di Kampus Gratis. Berbagai macam jenis materi
                                    tersedia.
                                </p>
                            </div>
                            <div className="col-6 col-md-3 text-center order-3">
                                <img
                                    loading="lazy"
                                    src="/assets/images/element/category-2.svg"
                                    alt="x"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro