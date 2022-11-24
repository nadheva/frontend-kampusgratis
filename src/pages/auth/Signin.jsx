import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <main>
            <section className="vh-xxl-100">
                <div className="container h-100 d-flex px-0 px-sm-4">
                    <div className="row justify-content-center align-items-center m-auto">
                        <div className="col-12">
                            <div className="bg-mode shadow rounded-3 overflow-hidden">
                                <div className="row g-0">
                                    <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                                        <div className="p-3 p-lg-5">
                                            <img src="assets/images/element/signin.svg" alt="" />
                                        </div>
                                        <div className="vr opacity-1 d-none d-lg-block" />
                                    </div>
                                    <div className="col-lg-6 order-1">
                                        <div className="p-4 p-sm-7 p-xl-6">
                                            <Link className="me-0" to="/">
                                                <img
                                                    className="h-30px mb-4"
                                                    src="/assets/images/logo-kampus-gratis.png"
                                                    alt="Kampus Gratis"
                                                />
                                            </Link>
                                            <h1 className="mb-2 h3-title">Selamat datang</h1>
                                            <p className="mb-0">
                                                Belum punya akun?<Link to="" style={{ color: "#5143d9 " }}> Daftar di sini</Link>
                                            </p>
                                            <form className="mt-4 text-start">
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                                <div className="mb-3 position-relative">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        className="form-control fakepassword"
                                                        type="password"
                                                        id="psw-input"
                                                    />
                                                    <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                                                        <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2" />
                                                    </span>
                                                </div>
                                                <div className="mb-3 d-sm-flex justify-content-between">
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input "
                                                            id="rememberCheck" />
                                                        <label
                                                            className="form-check-label px-2"
                                                            htmlFor="rememberCheck">
                                                            Remember me?
                                                        </label>
                                                    </div>
                                                    <Link to="" style={{ color: "#5143d9 " }}>Lupa password akun-mu?</Link>
                                                </div>
                                                <div>
                                                    <button
                                                        type="submit"
                                                        style={{ backgroundColor: "#5143d9 " }}
                                                        className="btn btn-primary w-100 mb-0">
                                                        Login
                                                    </button>
                                                </div>
                                                <div className="position-relative my-4">
                                                    <hr />
                                                    <p className="small  position-absolute top-50 start-50 translate-middle bg-body px-5">Atau</p>
                                                </div>
                                                <div className="vstack gap-3">
                                                    <a href=" " className="btn bg-light mb-0">
                                                        <i className="fab fa-fw fa-google text-google-icon me-2" />
                                                        Masuk dengan Google
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    )
}

export default Signin