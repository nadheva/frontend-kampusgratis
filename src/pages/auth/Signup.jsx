import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { register, loginWithGoogle, reset, resetDefault } from '../../features/auth/authSlice';
import { getMe } from '../../features/profile/profileSlice';
// import useEffectOnce from '../../helpers/useEffectOnce';
import VektorImage from '../../components/auth/VektorImage';
import Form from '../../components/auth/signup/Form';

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
                                                    isLoading={isLoading}
                                                    email={email}
                                                    isSuccess={isSuccess}
                                                    onFormChange={onFormChange}
                                                    full_name={full_name}
                                                    password={password}
                                                    confirm_password={confirm_password}
                                                    passwordShown={passwordShown}
                                                    togglePasswordVisiblity={togglePasswordVisiblity}
                                                    onLoginWithGoogle={onLoginWithGoogle}
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

export default Signup