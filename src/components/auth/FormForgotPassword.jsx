import React from 'react'

const FormForgotPassword = ({ onFormSubmit, isLoading, setEmail }) => {
    return (
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
    )
}

export default FormForgotPassword