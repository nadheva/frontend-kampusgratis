import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({ onFormSubmit, setEmail, email, isLoading }) => {
    return (
        <div className="col-lg-6 order-1">
            <div className="p-4 p-sm-7 p-xl-6">
                <Link className="me-0" to="/">
                    <img
                        className="h-40px mb-4"
                        src="/assets/images/1.png"
                        alt="Kampus Gratis"
                    />
                </Link>
                <h1 className="mb-2 h2">
                    Lupa Password?
                </h1>
                <p className="mb-0">
                    Masukkan alamat email yang terkait dengan akun.
                </p>
                <form onSubmit={onFormSubmit} className="mt-4 text-start">
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        {isLoading ? (
                            <button
                                className="btn btn-primary w-100 mb-0"
                                type="submit"
                                disabled={isLoading}
                                style={{ backgroundColor: "#5143d9 " }}
                            >
                                <span className="spinner-border spinner-border-sm"></span>&nbsp;
                                &nbsp;Loading...
                            </button>
                        ) : (
                            <button
                                type="submit"
                                style={{ backgroundColor: "#5143d9 " }}
                                className="btn btn-primary w-100 mb-0">
                                Reset Password
                            </button>
                        )}
                    </div>
                    <div class="position-relative my-4"><hr />
                        <p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">Atau</p>
                    </div>
                    <div className="mb-3 text-center">
                        <label
                            className="form-check-label"
                            htmlFor="rememberCheck">
                            Kembali ke
                        </label>
                        <Link to="/login" style={{ color: "#5143d9" }}> Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form