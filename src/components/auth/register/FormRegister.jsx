import React from 'react'
import { Link } from 'react-router-dom'

const FormRegister = ({ onFormSubmit, isLoading, onFormChange, onLoginWithGoogle, email, password, full_name, confirm_password }) => {
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
                    {/* <img src="assets/images/element/03.svg" className="h-40px mb-2" alt="Kampus Gratis" /> */}
                    <h2 className="mt-4">Daftarkan Akun Kamu!</h2>
                    <p className="lead mb-4 ">Senang bertemu dengan kamu! Silakan daftar diri-mu.</p>

                    <form onSubmit={onFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="input-email-address" className="form-label">Alamat Email *</label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i
                                    className="bi bi-envelope-fill"></i></span>
                                <input type="text" className="form-control border-0 bg-light rounded-end ps-1" placeholder="Alamat Email"
                                    id="input-email-address" name='email' value={email} onChange={onFormChange} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="input-full-name" className="form-label">Nama Lengkap *</label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i
                                    className="bi bi-person-circle"></i></span>
                                <input type="text" className="form-control border-0 bg-light rounded-end ps-1" placeholder="Nama Lengkap"
                                    id="input-full-name" name='full_name' value={full_name} onChange={onFormChange} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="input-password" className="form-label">Password *</label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i
                                    className="fas fa-lock"></i></span>
                                <input type="password" className="form-control border-0 bg-light rounded-end ps-1"
                                    placeholder="*********" id="input-password" name='password' value={password} onChange={onFormChange} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="input-confirm-password" className="form-label">Konfirmasi Password *</label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i
                                    className="fas fa-lock"></i></span>
                                <input type="password" className="form-control border-0 bg-light rounded-end ps-1"
                                    placeholder="*********" id="input-confirm-password" name='confirm_password' value={confirm_password} onChange={onFormChange} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="checkbox-1" />
                                <label className="form-check-label" htmlFor="checkbox-1">Saya setuju dengan<a href=" "> terms
                                    of service</a>.</label>
                            </div>
                        </div>
                        <div className="align-items-center mt-0">
                            <div className="d-grid">
                                {isLoading ? (
                                    <button className="btn btn-primary mb-0" type="submit" disabled={isLoading}>
                                        <span className="spinner-border spinner-border-sm"></span>
                                        &nbsp;Loading...
                                    </button>
                                ) : (
                                    <button className="btn btn-primary mb-0" type="submit">Daftar</button>
                                )}
                            </div>
                        </div>
                    </form>

                    <div className="row">
                        <div className="position-relative my-4">
                            <hr />
                            <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">atau</p>
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
                                <button className="btn bg-google mb-2 mb-xxl-0" onClick={onLoginWithGoogle}>
                                    <i className="fab fa-fw fa-google text-white me-2"></i>
                                    Daftar dengan Google
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <span>Sudah punya akun?<Link to="/login"> Login di sini</Link></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormRegister