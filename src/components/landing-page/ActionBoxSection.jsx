import React from 'react'

const ActionBoxSection = () => {
    return (
        <section className="py-5">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-12">
                        {/* SVG decoration START */}
                        <figure className="position-absolute top-50 start-50 translate-middle ms-2">
                            <svg>
                                <path
                                    className="fill-white opacity-2"
                                    d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"
                                />
                                <path
                                    className="fill-white opacity-2"
                                    d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"
                                />
                                <path
                                    className="fill-white opacity-2"
                                    d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"
                                />
                                <path
                                    className="fill-white opacity-2"
                                    d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"
                                />
                            </svg>
                        </figure>
                        {/* SVG decoration END */}
                        <div className="bg-dark p-4 p-sm-5 rounded-3">
                            <div className="row justify-content-center position-relative">
                                {/* Svg decoration START */}
                                <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
                                    <svg width="141px" height="141px">
                                        <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
                                    </svg>
                                </figure>
                                {/* SVG decoration END */}
                                {/* Action box */}
                                <div className="col-11 position-relative">
                                    <div className="row align-items-center">
                                        {/* Title */}
                                        <div className="col-lg-7">
                                            <h3 className="text-white mb-0">Tunggu apa lagi?</h3>
                                            <p className="text-white small">
                                                Tingkatkan pengetahuan Anda, kembangkan keterampilan
                                                dengan kursus dan sertifikasi paling andal
                                            </p>
                                            {/* List */}
                                            <ul className="list-inline mb-0 justify-content-center justify-content-lg-start">
                                                <li className="list-inline-item text-white me-2">
                                                    <i className="bi bi-check-circle-fill text-success me-2" />
                                                    Free registration
                                                </li>
                                                <li className="list-inline-item text-white me-2">
                                                    <i className="bi bi-check-circle-fill text-success me-2" />
                                                    Powerful features
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Content and input */}
                                        <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
                                            <a href=" " className="btn btn-warning mb-0">
                                                Buat Akun
                                            </a>
                                        </div>
                                    </div>
                                    {/* Row END */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row END */}
            </div>
        </section>
    )
}

export default ActionBoxSection