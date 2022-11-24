import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import {
    forgotPassword,
    reset,
} from "../../features/auth/authSlice";
import VektorImage from '../../components/auth/forgotPassword/VektorImage';
import Form from '../../components/auth/forgotPassword/Form';

const ForgotPassword = () => {

    useEffect(() => {
        document.title = "Kampus Gratis | Lupa Password";
    });

    const dispatch = useDispatch();
    const [email, setEmail] = useState();

    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const { user } = useSelector(
        (state) => state.profile
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
    }, [isError, isSuccess, message, dispatch]);

    return (
        <>
            {
                user ? (
                    <Navigate to="/" />
                ) : (
                    <main>
                        <section className="vh-xxl-100">
                            <div className="container h-100 d-flex px-0 px-sm-4">
                                <div className="row justify-content-center align-items-center m-auto">
                                    <div className="col-12">
                                        <div className="bg-mode shadow rounded-3 overflow-hidden">
                                            <div className="row g-0">
                                                <VektorImage />
                                                <Form
                                                    onFormSubmit={onFormSubmit}
                                                    setEmail={setEmail}
                                                    email={email}
                                                    isLoading={isLoading}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section >
                    </main >
                )
            }
        </>
    )
}

export default ForgotPassword