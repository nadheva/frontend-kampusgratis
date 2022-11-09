import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Redux
import { login, loginWithGoogle, reset, resetDefault } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../../features/profile/profileSlice';
import useEffectOnce from '../../helpers/useEffectOnce';

// Component
import FormLogin from '../../components/auth/login/FormLogin';
import LeftContent from '../../components/auth/login/LeftContent';

function Login() {
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

	useEffectOnce(() => {
		if (user && token) {
			return navigate('/');
		}

		dispatch(reset());
	});

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
			// dispatch(resetDefault());
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
			<section className="p-0 d-flex align-items-center position-relative overflow-hidden" >
				<div className="container-fluid">
					<div className="row">
						<LeftContent />
						<FormLogin
							onFormSubmit={onFormSubmit}
							isLoading={isLoading}
							isSuccess={isSuccess}
							onFormChange={onFormChange}
							onLoginWithGoogle={onLoginWithGoogle}
							email={email}
							password={password}
						/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Login;