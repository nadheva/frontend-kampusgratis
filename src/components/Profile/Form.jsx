import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	updateProfile,
	getMe,
	resetState,
} from "../../features/profile/profileSlice";
import useEffectOnce from "../../helpers/useEffectOnce";
import { toast } from "react-toastify";

const FormEdit = () => {
	const genderOptions = [
		{ value: "0", label: "Tidak ingin memberi tahu" },
		{ value: "1", label: "Laki-laki" },
		{ value: "2", label: "Perempuan" },
	];

	const [isLoaded, setIsLoaded] = useState(false);
	const [profileData, setProfileData] = useState({
		full_name: "",
		gender: 0,
		phone: "",
		display_picture: "",
	});

	const [imageData, setImageData] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		full_name,
		gender,
		phone,
		username,
		display_picture,
		display_picture_link,
	} = profileData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.profile
	);

	useEffectOnce(() => {
		dispatch(resetState());
		dispatch(getMe());
	});

	const onChangePicture = (e) => {
		if (e.target.files[0]) {
			const reader = new FileReader();

			reader.addEventListener("load", () => {
				setImageData(reader.result);
			});

			reader.readAsDataURL(e.target.files[0]);

			setProfileData((prevState) => ({
				...prevState,
				[e.target.name]: e.target.files[0],
			}));
		}
	};

	const onFormChange = (e) => {
		setProfileData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		setIsLoaded(false);
		dispatch(updateProfile(profileData));
	};

	useEffect(() => {
		setIsLoaded(true);

		if (user)
			setProfileData({
				full_name: user.full_name,
				phone: user.phone,
				gender: user.gender,
				username: user.username,
				display_picture: user.display_picture,
				display_picture_link: user.display_picture_link,
			});

		if (isError && !isSuccess) {
			toast.error(message);
			dispatch(resetState());
		}

		if (isSuccess && message && !isError) {
			toast.success(message);
			dispatch(resetState());
		}
	}, [isError, isSuccess, user, message, navigate, dispatch]);

	return (
		<div className="card border rounded-3">
			<div className="card-header border-bottom">
				<h3 className="card-header-title mb-0">Profil</h3>
			</div>
			<div className="card-body">
				<form className="row g-4" onSubmit={onFormSubmit}>
					<div className="col-12 justify-content-center align-items-center">
						<label className="form-label">Tampilan Foto</label>
						<div className="d-flex align-items-center">
							<label
								className="position-relative me-4"
								htmlFor="uploadfile-1"
								title="Replace this pic"
							>
								<span className="avatar avatar-xl">
									<img
										id="uploadfile-1-preview"
										className="avatar-img rounded-circle border border-white border-3 shadow"
										src={
											imageData
												? imageData
												: display_picture_link != null
												? display_picture_link
												: "assets/images/avatar/empty-display-picture.png"
										}
										alt=""
									/>
								</span>
							</label>
							<label
								className="btn btn-primary-soft mb-0"
								htmlFor="uploadfile-1"
							>
								Ubah
							</label>
							<input
								id="uploadfile-1"
								name="display_picture"
								className="form-control d-none"
								type="file"
								onChange={onChangePicture}
							/>
						</div>
					</div>
					<div className="col-6">
						<label className="form-label">Nama Lengkap</label>
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								name="full_name"
								value={full_name}
								onChange={onFormChange}
								placeholder="Nama Lengkap"
							/>
						</div>
					</div>
					<div className="col-md-6">
						<label className="form-label">Username</label>
						<div className="input-group">
							<span className="input-group-text">kampusgratis.com</span>
							<input
								type="text"
								className="form-control"
								value={username}
								readOnly
							/>
						</div>
					</div>
					{/* <div className="col-md-6">
				<label className="form-label">Alamat Email</label>
				<input
				  className="form-control"
				  type="text"
				  value="example@gmail.com"
				  placeholder="Alamat Email"
				  readOnly
				/>
			  </div> */}
					<div className="col-md-6">
						<label className="form-label">Nomor Handphone</label>
						<input
							type="text"
							className="form-control"
							name="phone"
							value={phone}
							onChange={onFormChange}
							placeholder="Nomor Handphone"
						/>
					</div>
					<div className="col-md-6">
						<label className="form-label">Jenis Kelamin</label>
						<select
							className="form-select"
							onChange={onFormChange}
							name="gender"
							value={gender}
						>
							{genderOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
					<div className="d-sm-flex justify-content-end">
						{isLoading && !isLoaded ? (
							<button
								type="submit"
								className="btn btn-primary mb-0"
								disabled={isLoading}
							>
								<span className="spinner-border spinner-border-sm"></span>&nbsp;
								Menyimpan Perubahan ...
							</button>
						) : (
							<button type="submit" className="btn btn-primary mb-0">
								Simpan Perubahan
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormEdit;
