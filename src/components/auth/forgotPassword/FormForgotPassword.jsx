import React from 'react'

const FormForgotPassword = ({ onFormSubmit, isLoading, setEmail }) => {
    return (
        <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="row my-5">
                <div className="col-sm-10 col-xl-12 m-auto">
                    <span className="mb-0 fs-1">🤔</span>
                    <h1 className="fs-2">Lupa Password?</h1>
                    <h5 className="fw-light mb-4">
                        Untuk menerima kata sandi baru, masukkan alamat email Anda di bawah ini.
                    </h5>

                    <form onSubmit={onFormSubmit}>
                        <div className="mb-4">
                            <label className="form-label">
                                Email address *
                            </label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                                    <i className="bi bi-envelope-fill" />
                                </span>
                                <input
                                    type="email"
                                    className="form-control border-0 bg-light rounded-end ps-1"
                                    placeholder="E-mail"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="align-items-center">
                            <div className="d-grid">
                                {isLoading ? (
                                    <button className="btn btn-primary mb-0" type="submit" disabled={isLoading}>
                                        <span className="spinner-border spinner-border-sm"></span>&nbsp;
                                        &nbsp;Loading...
                                    </button>
                                ) : (
                                    <button className="btn btn-primary mb-0" type="submit">Reset password</button>
                                )}
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default FormForgotPassword