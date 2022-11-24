import React from 'react'

const BtnGoogle = ({ isLoading, onLoginWithGoogle, isSuccess }) => {
    return (
        <div className="vstack gap-3">
            {isLoading ? (
                <button
                    className="btn bg-light mb-0"
                    disabled={isLoading}
                >
                    <span className="spinner-border spinner-border-sm"></span>&nbsp;
                    &nbsp;Loading...
                </button>
            ) : (
                <button
                    className="btn bg-light mb-0"
                    onClick={onLoginWithGoogle}
                    disabled={isSuccess}
                >
                    <i className="fab fa-fw fa-google text-google-icon me-2" />
                    Masuk dengan Google
                </button>
            )}
        </div>
    )
}

export default BtnGoogle