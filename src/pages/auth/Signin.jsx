import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

// Redux
import { login, loginWithGoogle, reset, resetDefault } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../../features/profile/profileSlice';
import useEffectOnce from '../../helpers/useEffectOnce';

const Signin = () => {
    useEffect(() => {
        document.title = "Kampus Gratis | Login";
    });

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [loginData, setLoginData] = useState({
        email: '', password: ''
    });

    const { email, password } = loginData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { token, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const { user } = useSelector(
        (state) => state.profile
    );

    useEffect(() => {
        if (token && !user) {
            dispatch(getMe());
        }

        if (isError) {
            dispatch(reset());
            toast.error(message);
        }

        if (isSuccess && token && user) {
            navigate('/');
            toast.success(`Selamat datang di Kampus Gratis, ${user.full_name.split(" ")[0]}!`);
            dispatch(reset());
        }

    }, [isError, isSuccess, token, user, message, navigate, dispatch]);

    const onFormChange = (e) => {
        setLoginData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) return toast.error("Invalid combination Email address and Password.");

        const userData = {
            email,
            password
        };

        dispatch(login(userData));
    }

    const onLoginWithGoogle = (e) => {
        e.preventDefault();
        dispatch(loginWithGoogle());
    }

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
                                                    className="h-40px mb-4"
                                                    src="/assets/images/logo-kampus-gratis.png"
                                                    alt="Kampus Gratis"
                                                />
                                            </Link>
                                            <h1 className="mb-2 h2">Selamat datang</h1>
                                            <p className="mb-0">
                                                Belum punya akun?<Link to="/signup" style={{ color: "#5143d9 " }}> Daftar di sini</Link>
                                            </p>
                                            <form onSubmit={onFormSubmit} className="mt-4 text-start">
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        value={email}
                                                        disabled={isSuccess}
                                                        onChange={onFormChange}
                                                    />
                                                </div>
                                                <div className="mb-3 position-relative">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        className="form-control fakepassword"
                                                        type={passwordShown ? "text" : "password"}
                                                        name="password"
                                                        value={password}
                                                        disabled={isSuccess}
                                                        onChange={onFormChange}
                                                    />
                                                    <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                                                        <i
                                                            className={
                                                                passwordShown
                                                                    ? "fakepasswordicon fas fa-eye cursor-pointer p-2"
                                                                    : "fakepasswordicon fas fa-eye-slash cursor-pointer p-2"
                                                            }
                                                            onClick={togglePasswordVisiblity}
                                                        ></i>
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
                                                    <Link to="/forgot-password" style={{ color: "#5143d9 " }}>Lupa password akun-mu?</Link>
                                                </div>
                                                <div>
                                                    {isLoading ? (
                                                        <button className="btn btn-primary w-100 mb-0" type="submit" disabled={isLoading}>
                                                            <span className="spinner-border spinner-border-sm"></span>&nbsp;
                                                            &nbsp;Loading...
                                                        </button>
                                                    ) : (
                                                        <button
                                                            disabled={isSuccess}
                                                            type="submit"
                                                            style={{ backgroundColor: "#5143d9 " }}
                                                            className="btn btn-primary w-100 mb-0">
                                                            Login
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="position-relative my-4">
                                                    <hr />
                                                    <p className="small  position-absolute top-50 start-50 translate-middle bg-body px-5">Atau</p>
                                                </div>
                                            </form>
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