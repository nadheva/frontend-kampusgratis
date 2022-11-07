import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from "react-toastify";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
    forgotPassword,
    reset,
} from "../../features/auth/authSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const ForgotPassword = () => {
    useEffect(() => {
        document.title = "Kampus Gratis | Lupa Password";
    });

    const [eemail, setEemail] = useState({
        email: "",
    });
    
    const { email } = eemail;
    console.log(email)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const onFormChange = (e) => {
        setEemail((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
        };

        dispatch(forgotPassword(userData));
    };

    useEffect(() => {
        if (isError) {
            dispatch(reset());
            toast.error(message);
        }

        if (isSuccess) {
            navigate("/login");
        }

        if (isSuccess) {
            toast.success(message);

            setEemail({
                email: "",
            });
        }
    }, [isError, isSuccess, token, message, navigate, dispatch]);


    return (
        <main>
            <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
                <div className="container-fluid">
                    <div className="row bg-custom">
                        <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-opacity-10 vh-lg-100 bg-custom bg-line">
                            <div className="p-3 p-lg-5 bg-blur mx-4">
                                <div className="text-left">
                                    <h1 className="fw-bold text-white">Selamat Datang <br /> Di Kampus Gratis!</h1>
                                    <p className="mb-0 h6 fw-light text-white">
                                        Mari belajar sesuatu yang baru hari ini!
                                    </p>
                                </div>
                                <img
                                    src="assets/images/element/02.svg"
                                    className="mt-5"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center bg-white">
                            <div className="row my-5">
                                <div className="col-sm-10 col-xl-12 m-auto">
                                    <Link to="/">
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
                                    <h1 className="fs-2 mt-4" role="img">Lupa Password?</h1>
                                    <h5 className="fw-light mb-4">Untuk menerima kata sandi baru, masukkan alamat email Anda di bawah ini</h5>
                                    <form onSubmit={onFormSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                                <input
                                                    type="email"
                                                    className="form-control border-0 bg-light rounded-end ps-1"
                                                    placeholder="E-mail"
                                                    id="email"
                                                    name="email"
                                                    onChange={onFormChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="align-items-center">
                                            <div className="d-grid">
                                                <button className="btn btn-blue" type="submit" >
                                                    Reset password
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ForgotPassword;