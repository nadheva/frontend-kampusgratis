import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
    forgotPassword,
    reset,
} from "../../features/auth/authSlice";

// Component
import FormForgotPassword from '../../components/auth/forgotPassword/FormForgotPassword';
import LeftContent from '../../components/auth/forgotPassword/LeftContent';

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
                        <LeftContent />
                        <FormForgotPassword
                            onFormSubmit={onFormSubmit}
                            setEmail={setEmail}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ForgotPassword;