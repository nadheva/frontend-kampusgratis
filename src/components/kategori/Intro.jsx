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
                                    src="/assets/images/asset-kg/kategori-2.png"
                                    alt="x"
                                    style={{height: "334px"}}
                                />
                            </div>
                            <div className="col-md-6 px-md-5 text-center position-relative order-md-2 mb-5 mb-md-0">
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
                                    src="/assets/images/asset-kg/kategori-1.png"
                                    alt="x"
                                    style={{height: "334px"}}
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