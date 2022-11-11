import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { register, loginWithGoogle, reset, resetDefault } from '../../features/auth/authSlice';
import { getMe } from '../../features/profile/profileSlice';
import useEffectOnce from '../../helpers/useEffectOnce';

// Component
import FormRegister from '../../components/auth/register/FormRegister';
import LeftContent from '../../components/auth/register/LeftContent';

function Register() {
	const [registerData, setRegisterData] = useState({
		full_name: '', email: '',
		password: '', confirm_password: ''
	});

	const { full_name, email, password, confirm_password } = registerData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	const onLoginWithGoogle = (e) => {
		e.preventDefault();
		dispatch(loginWithGoogle());
	}

	useEffectOnce(() => {
		if (user && token)
			return navigate('/');

		dispatch(reset());
	});

	useEffect(() => {
		if (isError) {
			dispatch(reset());
			toast.error(message);
		}

		if (isSuccess && user) {
			navigate('/login');
		}

		if (isSuccess && !user) {
			dispatch(getMe());
			dispatch(resetDefault());
		}

		if (isSuccess) {
			toast.success(message);

			setRegisterData({
				full_name: '', email: '',
				password: '', confirm_password: ''
			});
		}
	}, [isError, isSuccess, user, token, message, navigate, dispatch])

	return (
		<main>
			<section className="p-0 d-flex align-items-center position-relative overflow-hidden">
				<div className="container-fluid">
					<div className="row">
						<LeftContent />
						<FormRegister
							onFormSubmit={onFormSubmit}
							isLoading={isLoading}
							onFormChange={onFormChange}
							onLoginWithGoogle={onLoginWithGoogle}
							email={email}
							password={password}
							full_name={full_name}
							confirm_password={confirm_password}
						/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Register;