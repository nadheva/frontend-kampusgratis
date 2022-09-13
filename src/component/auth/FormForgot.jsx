import React, { useState } from 'react';

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from '../../redux/actions/AuthAction';

const FormForgot = () => {

    const [email, setEmail] = useState("");
    const { forgotPasswordLoading } = useSelector((state) => state.AuthReducer);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // add kontak
        dispatch(
            forgotPassword({
                email: email,
            })
        );
    };

    return (
        <div class="col-12 col-lg-6 d-flex justify-content-center bg-white">
            <div class="row my-5">
                <div class="col-sm-10 col-xl-12 m-auto">
                    <span class="mb-0 fs-1" role="img" aria-label="what">🤔</span>
                    <h1 class="fs-2" role="img">Lupa Password?</h1>
                    <h5 class="fw-light mb-4">Untuk menerima kata sandi baru, masukkan alamat email Anda di bawah ini</h5>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div class="mb-4">
                            <label htmlFor="exampleInputEmail1" class="form-label">Email address *</label>
                            <div class="input-group input-group-lg">
                                <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-envelope-fill"></i></span>
                                <input
                                    type="email"
                                    className="form-control border-0 bg-light rounded-end ps-1"
                                    placeholder="E-mail"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                        </div>
                        <div class="align-items-center">
                            <div class="d-grid">
                                {forgotPasswordLoading ? (
                                    <button className="btn btn-blue mb-0 text-white" type="submit">
                                        <span
                                            class="spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                        >
                                        </span>
                                        Loading...
                                    </button>
                                ) : (
                                    <button className="btn btn-blue mb-0 text-white" type="submit">
                                        Reset password
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormForgot;