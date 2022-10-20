import React from 'react'

const Newsletter = () => {
    return (
        <section className="pt-0">
            <div className="container position-relative overflow-hidden">
                <figure className="position-absolute top-50 start-50 translate-middle ms-3">
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
                <figure className="position-absolute bottom-0 end-0 mb-5 d-none d-sm-block">
                    <svg
                        className="rotate-130"
                        width="258.7px"
                        height="86.9px"
                        viewBox="0 0 258.7 86.9"
                    >
                        <path
                            stroke="white"
                            fill="none"
                            strokeWidth={2}
                            d="M0,7.2c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5 c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5s16-25.5,31.9-25.5"
                        />
                        <path
                            stroke="white"
                            fill="none"
                            strokeWidth={2}
                            d="M0,57c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5 c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5s16-25.5,31.9-25.5"
                        />
                    </svg>
                </figure>
                <div className="bg-grad-blue p-3 p-sm-5 rounded-3">
                    <div className="row justify-content-center position-relative">
                        <figure className="position-absolute top-50 start-0 translate-middle-y">
                            <svg width="141px" height="141px">
                                <path
                                    className="fill-white opacity-1"
                                    d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"
                                />
                            </svg>
                        </figure>
                        <div className="col-12 position-relative my-2 my-sm-3">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h3 className="text-white mb-3 mb-lg-0">
                                        Kembangkan jaringan dan belajar dari dosen terbaik
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter