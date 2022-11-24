import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
    forgotPassword,
    reset,
} from "../../features/auth/authSlice";

const ForgotPassword = () => {

    useEffect(() => {
        document.title = "Kampus Gratis | Lupa Password";
    });

    const dispatch = useDispatch();
    const [email, setEmail] = useState();

    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const onFormSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: email
        }
        dispatch(forgotPassword(user));
    };

    useEffect(() => {
        if (isError) {
            dispatch(reset());
            toast.error(message);
        }
        if (isSuccess) {
            toast.success(message);
            dispatch(reset());
            setEmail("");
        }
    }, [isError, isSuccess, message, dispatch, reset]);

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
                                            <img src="assets/images/element/forgot-pass.svg" alt="" />
                                        </div>
                                        <div className="vr opacity-1 d-none d-lg-block" />
                                    </div>
                                    <div className="col-lg-6 order-1">
                                        <div className="p-4 p-sm-7 p-xl-6">
                                            <Link className="me-0" to="/">
                                                <img
                                                    className="h-40px mb-4"
                                                    src="/assets/images/logo-kampus-gratis.png"
                                                    alt="Kampus Gratis"
                                                />
                                            </Link>
                                            <h1 className="mb-2 h2">Lupa Password?</h1>
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
                                                <div className="mb-3 text-center">
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="rememberCheck">
                                                        Kembali ke
                                                    </label>
                                                    <Link to="/login" style={{ color: "#5143d9 " }}> Login</Link>
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
                                                {/* <div className="position-relative my-4">
                                                    <hr />
                                                    <p className="small  position-absolute top-50 start-50 translate-middle bg-body px-5">Atau</p>
                                                </div>
                                                <div className="vstack gap-3">
                                                    <a href=" " className="btn bg-light mb-0">
                                                        <i className="fab fa-fw fa-google text-google-icon me-2" />
                                                        Masuk dengan Google
                                                    </a>
                                                </div> */}
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

export default ForgotPassword