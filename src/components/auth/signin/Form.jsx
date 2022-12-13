import React from "react";
import { Link } from "react-router-dom";
import BtnGoogle from "../BtnGoogle";

const Form = ({
	onFormSubmit,
	isLoading,
	email,
	isSuccess,
	onFormChange,
	password,
	passwordShown,
	togglePasswordVisiblity,
	onLoginWithGoogle,
}) => {
	return (
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
					Belum punya akun?
					<Link to="/register" style={{ color: "#5143d9 " }}>
						{" "}
						Daftar di sini
					</Link>
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
								id="rememberCheck"
							/>
							<label className="form-check-label px-2" htmlFor="rememberCheck">
								Remember me
							</label>
						</div>
						<Link to="/forgot-password" style={{ color: "#5143d9 " }}>
							Lupa password akun-mu?
						</Link>
					</div>
					<div>
						{isLoading ? (
							<button
								className="btn btn-primary w-100 mb-0"
								type="submit"
								disabled={isLoading}
							>
								<span className="spinner-border spinner-border-sm"></span>&nbsp;
								&nbsp;Loading...
							</button>
						) : (
							<button
								disabled={isSuccess}
								type="submit"
								style={{ backgroundColor: "#5143d9 " }}
								className="btn btn-primary w-100 mb-0"
							>
								Login
							</button>
						)}
					</div>
					<div className="position-relative my-4">
						<hr />
						<p className="small  position-absolute top-50 start-50 translate-middle bg-body px-5">
							Atau
						</p>
					</div>
				</form>

				<BtnGoogle
					isLoading={isLoading}
					onLoginWithGoogle={onLoginWithGoogle}
					isSuccess={isSuccess}
				/>
			</div>
		</div>
	);
};

export default Form;
