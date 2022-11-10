import React from 'react'
import { Link } from 'react-router-dom'

const FormLogin = ({ onFormSubmit, isLoading, onFormChange, onLoginWithGoogle, email, password, isSuccess }) => {
    return (
        <div className="col-12 col-lg-6 m-auto">
            <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                    <Link className="me-0" to="/">
                        <img
                            className="light-mode-item h-40px"
                            src="/assets/images/logo-kampus-gratis.png"
                            alt="Kampus Gratis"
                        />
                        <img
                            className="dark-mode-item h-40px"
                            src="/assets/images/logo-kampus-gratis.png"
                            alt="Kampus Gratis"
                        />
                    </Link>
                    {/* <span className="mb-0 fs-1">👋</span> */}
                    <h1 className="fs-2 mt-4">Masuk ke Kampus Gratis!</h1>
                    <p className="lead mb-4">Halooo! Login dengan Akun yang kamu daftarkan.</p>
                    <form onSubmit={onFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="input-email" className="form-label">Alamat Email *</label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                <input name="email" type="text" className="form-control border-0 bg-light rounded-end ps-1" placeholder="Alamat Email" id="input-email" value={email} disabled={isSuccess} onChange={onFormChange} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="input-password" className="form-label">Password *</label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                                <input name="password" type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="Password" id="input-password" value={password} disabled={isSuccess} onChange={onFormChange} />
                            </div>
                        </div>
                        <div className="mb-4 d-flex justify-content-between mb-4">
                            <div className="form-check">
                                {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Ingat saya</label> */}
                            </div>
                            <div className="text-primary-hover">
                                <Link to="/forgot-password" className="text-secondary">
                                    <u>Lupa password akun-mu?</u>
                                </Link>
                            </div>
                        </div>
                        <div className="align-items-center mt-0">
                            <div className="d-grid">
                                {isLoading ? (
                                    <button className="btn btn-primary mb-0" type="submit" disabled={isLoading}>
                                        <span className="spinner-border spinner-border-sm"></span>&nbsp;
                                        &nbsp;Loading...
                                    </button>
                                ) : (
                                    <button className="btn btn-primary mb-0" type="submit" disabled={isSuccess}>Login</button>
                                )}
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="position-relative my-4">
                            <hr />
                            <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">Atau</p>
                        </div>
                    </div>
                    <div className="align-items-center mt-0">
                        <div className="d-grid">
                            {isLoading ? (
                                <button className="btn bg-google mb-2 mb-xxl-0" disabled={isLoading}>
                                    <span className="spinner-border spinner-border-sm"></span>&nbsp;
                                    &nbsp;Loading...
                                </button>
                            ) : (
                                <button className="btn bg-google mb-2 mb-xxl-0" onClick={onLoginWithGoogle} disabled={isSuccess}>
                                    <i className="fab fa-fw fa-google text-white me-2"></i>
                                    Masuk dengan Google
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <span>Belum punya akun? <Link to="/register">Daftar di sini</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLogin