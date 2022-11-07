import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
    forgotPassword,
    reset,
} from "../../features/auth/authSlice";
import FormForgotPassword from '../../components/auth/FormForgotPassword';

const ForgotPassword = () => {
    useEffect(() => {
        document.title = "Kampus Gratis | Lupa Password";
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            navigate("/login");
            toast.success(message);
            setEmail({
                email: "",
            });
        }
    }, [isError, isSuccess, message, navigate, dispatch]);

    return (
        <main>
            <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                            <div className="p-3 p-lg-5">
                                <div className="text-center">
                                    <h1 className="fw-bold ">Selamat Datang <br /> Di Kampus Gratis!</h1>
                                    <p className="mb-0 h6 fw-light ">
                                        Mari belajar sesuatu yang baru hari ini!
                                    </p>
                                </div>
                                <img src="assets/images/element/02.svg" className="mt-5" alt="x" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="row my-5">
                                <div className="col-sm-10 col-xl-12 m-auto">
                                    <span className="mb-0 fs-1">🤔</span>
                                    <h1 className="fs-2">Lupa Password?</h1>
                                    <h5 className="fw-light mb-4">
                                        Untuk menerima kata sandi baru, masukkan alamat email Anda di bawah ini.
                                    </h5>

                                    <FormForgotPassword
                                        onFormSubmit={onFormSubmit}
                                        setEmail={setEmail}
                                        isLoading={isLoading}
                                    />
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