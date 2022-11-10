import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Banner from "../components/Account/Banner";
import Sidebar from "../components/Account/Sidebar";
import Header from "../components/default/Header";
import Footer from "../components/default/Footer";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
	forgotPassword,
	reset,
} from "../features/auth/authSlice";

const Setting = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Setting";
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
			setEmail({
				email: "",
			});
		}
	}, [isError, isSuccess, message, dispatch]);

	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />
						<div className="col-xl-9">
							<div className="border rounded-3">
								<div className="row">
									<div className="col-12">
										<div className="card bg-transparent">
											<div className="card-header bg-transparent border-bottom">
												<h3 className="card-header-title">Reset Password</h3>
											</div>
											<div className="card-body">
												<form onSubmit={onFormSubmit}>
													<div className="mb-3">
														<label className="form-label">
															Email
														</label>
														<input
															type="email"
															className="form-control"
															placeholder="Masukan email"
															name="email"
															onChange={(e) => setEmail(e.target.value)}
															required
														/>
														<div id="emailHelp" className="form-text">Masukan email anda agar bisa reset password</div>
													</div>
													<div className="d-sm-flex justify-content-end">
														{isLoading ? (
															<button className="btn btn-sm btn-primary me-2 mb-0" type="submit" disabled={isLoading}>
																<span className="spinner-border spinner-border-sm"></span>&nbsp;
																&nbsp;Loading...
															</button>
														) : (
															<button
																type="submit"
																className="btn btn-sm btn-primary me-2 mb-0">
																Reset Password
															</button>
														)}
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Setting;
