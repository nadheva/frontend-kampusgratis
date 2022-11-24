import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { register, loginWithGoogle, reset, resetDefault } from '../../features/auth/authSlice';
import { getMe } from '../../features/profile/profileSlice';
import useEffectOnce from '../../helpers/useEffectOnce';

const Signup = () => {
    useEffect(() => {
        document.title = "Kampus Gratis | Register";
    });

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        full_name: '', email: '',
        password: '', confirm_password: ''
    });

    const { full_name, email, password, confirm_password } = registerData;

    const { token, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const { user } = useSelector(
        (state) => state.profile
    );

    const onFormChange = (e) => {
        setRegisterData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (password !== confirm_password && password.length !== confirm_password.length) {
            return toast.error("Password harus sama dengan Konfirmasi Password.");
        }

        const userData = {
            full_name,
            email,
            password,
            gender: 1
        };

        dispatch(register(userData));
    }

    useEffect(() => {
        if (isError) {
            dispatch(reset());
            toast.error(message);
        }

        if (isSuccess && !user) {
            dispatch(getMe());
            dispatch(resetDefault());
        }

        if (isSuccess && user) {
            navigate('/login');
        }

        if (isSuccess) {
            toast.success(message);

            setRegisterData({
                full_name: '', email: '',
                password: '', confirm_password: ''
            });
        }

        if (token && user) {
            navigate('/');
            dispatch(reset());
        }

    }, [isError, isSuccess, user, token, message, navigate, dispatch])

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
                                            <h1 className="mb-2 h2">Buat akun baru</h1>
                                            <p className="mb-0">
                                                Sudah punya akun? <Link to="/login" style={{ color: "#5143d9 " }}> Login</Link>
                                            </p>
                                            <form onSubmit={onFormSubmit} className="mt-4 text-start">
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        value={email}
                                                        onChange={onFormChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Nama Lengkap</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="full_name"
                                                        value={full_name}
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
                                                <div className="mb-3 position-relative">
                                                    <label className="form-label">Konfirmasi Password</label>
                                                    <input
                                                        className="form-control fakepassword"
                                                        type="password"
                                                        name="confirm_password"
                                                        value={confirm_password}
                                                        onChange={onFormChange}
                                                    />
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
                                                            Saya setuju dengan terms of service.
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>
                                                    {isLoading ? (
                                                        <button
                                                            style={{ backgroundColor: "#5143d9 " }}
                                                            className="btn btn-primary w-100 mb-0" type="submit"
                                                            disabled={isLoading}
                                                        >
                                                            <span className="spinner-border spinner-border-sm"></span>
                                                            &nbsp;Loading...
                                                        </button>
                                                    ) : (
                                                        <button
                                                            type="submit"
                                                            style={{ backgroundColor: "#5143d9 " }}
                                                            className="btn btn-primary w-100 mb-0">
                                                            Daftar
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
                                                    <button className="btn bg-light mb-0" disabled={isLoading}>
                                                        <span className="spinner-border spinner-border-sm"></span>
                                                        &nbsp;Loading...
                                                    </button>
                                                ) : (
                                                    <button className="btn bg-light mb-0" onClick={onLoginWithGoogle}>
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

export default Signup