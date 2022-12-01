import React from 'react'
import { Link } from 'react-router-dom'

const ActionBoxSection = () => {
    return (
        <section className="py-0 pt-lg-5" data-aos="fade-right">
            <div className="container">
                <div className="row">
                    <div className="col-12 position-relative z-index-1">
                        <div className="d-none d-lg-block position-absolute bottom-0 start-0 ms-3 ms-xl-5">
                            <img src="assets/images/element/01.png" alt="" />
                        </div>
                        <div className="position-absolute top-0 end-0 mt-n4 me-5">
                            <img src="assets/images/client/pencil.svg" alt="" />
                        </div>
                        <div className="position-absolute bottom-0 start-50 mb-n4">
                            <img
                                src="assets/images/client/graduated.svg"
                                className="rotate-74"
                                alt=""
                            />
                        </div>
                        <div className="bg-grad-pink p-4 p-sm-5 rounded position-relative z-index-n1 overflow-hidden">
                            <figure className="position-absolute top-0 start-0 mt-3 ms-n3 opacity-5">
                                <svg width="818.6px" height="235.1px" viewBox="0 0 818.6 235.1">
                                    <path
                                        className="fill-white"
                                        d="M735,226.3c-5.7,0.6-11.5,1.1-17.2,1.7c-66.2,6.8-134.7,13.7-192.6-16.6c-34.6-18.1-61.4-47.9-87.3-76.7 c-21.4-23.8-43.6-48.5-70.2-66.7c-53.2-36.4-121.6-44.8-175.1-48c-13.6-0.8-27.5-1.4-40.9-1.9c-46.9-1.9-95.4-3.9-141.2-16.5 C8.3,1.2,6.2,0.6,4.2,0H0c3.3,1,6.6,2,10,3c46,12.5,94.5,14.6,141.5,16.5c13.4,0.6,27.3,1.1,40.8,1.9 c53.4,3.2,121.5,11.5,174.5,47.7c26.5,18.1,48.6,42.7,70,66.5c26,28.9,52.9,58.8,87.7,76.9c58.3,30.5,127,23.5,193.3,16.7 c5.8-0.6,11.5-1.2,17.2-1.7c26.2-2.6,55-4.2,83.5-2.2v-1.2C790,222,761.2,223.7,735,226.3z"
                                    />
                                </svg>
                            </figure>
                            <figure className="position-absolute top-50 start-0 translate-middle-y ms-5">
                                <svg width="473px" height="234px">
                                    <path
                                        fillRule="evenodd"
                                        opacity="0.051"
                                        fill="rgb(255, 255, 255)"
                                        d="M0.004,222.303 L364.497,-0.004 L472.998,32.563 L100.551,233.991 L0.004,222.303 Z"
                                    />
                                </svg>
                            </figure>
                            <figure className="position-absolute top-50 end-0 translate-middle-y">
                                <svg width="355.6px" height="396.1px">
                                    <path
                                        className="fill-danger rotate-10"
                                        d="M32.8,364.1c16.1-14.7,36-21.5,56.8-26.7c20-5.1,40.5-9.7,57.8-21.4c35.7-24.3,51.1-68.5,57.2-109.4 c6.8-45.7,4.6-93.7,21.6-137.5c8.3-21.4,22.3-41.4,43.3-51.9c17.4-8.7,36.2-7.9,54.2-1.5c10.2,3.6,19.8,8.5,29.4,13.5l2.5-4.3 c-2.7-1.4-5.4-2.8-8.2-4.2c-15.8-8-32.9-15.3-50.9-15.2C276,5.6,256.9,16,243.3,31c-16.6,18.3-25.3,42.2-30.5,66 c-5,22.9-6.8,46.3-8.8,69.6c-3.9,44.4-9.7,92.8-40.1,128c-7.1,8.2-15.4,15.4-24.9,20.8c-9.3,5.4-19.5,8.9-29.8,11.8 c-20.2,5.7-41.3,9.1-59.9,19.2c-19.3,10.4-35.1,27.2-44.2,47.1c0,0,0,0.1,0,0.1l4.4,2.6C15,384,22.9,373.1,32.8,364.1z"
                                    />
                                </svg>
                            </figure>
                            <div className="row g-3 align-items-center justify-content-lg-end position-relative py-4">
                                <div className="col-md-6">
                                    <h2 className="text-white">Tunggu apa lagi?</h2>
                                    <p className="text-white mb-0">
                                        Tingkatkan pengetahuan Anda kembangkan keterampilan dengan kursus paling andal
                                    </p>
                                </div>
                                <div className="col-md-6 col-lg-3 text-md-end">
                                    <Link to="/register" className="btn btn-white mb-0">
                                        Mulai sekarang
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActionBoxSection