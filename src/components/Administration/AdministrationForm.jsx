import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useEffectOnce from "../../helpers/useEffectOnce";
import {
	sendAdministrationBiodata,
	reset,
	resetState,
	sendAdministrationFamilial,
	sendAdministrationFiles,
	sendAdministrationDegree,
} from "../../features/administration/administrationSlice";
import { toast } from "react-toastify";

const AdministrationForm = () => {
	const genderOptions = [
		{ value: "0", label: "Tidak ingin memberi tahu" },
		{ value: "1", label: "Laki-laki" },
		{ value: "2", label: "Perempuan" },
	];

	const [isLoaded, setIsLoaded] = useState(false);

	const [administrationBiodata, setAdministrationBiodata] = useState({
		full_name: "",
		nin: "",
		nin_address: "",
		email: "",
		residence_address: "",
		phone: "",
		study_program: "",
		semester: "",
		birth_place: "",
		birth_date: "",
		university_of_origin: "",
		gender: "",
		nsn: "",
	});

	const {
		full_name,
		nin,
		nin_address,
		email,
		residence_address,
		phone,
		study_program,
		semester,
		birth_place,
		birth_date,
		university_of_origin,
		gender,
		nsn,
	} = administrationBiodata;

	const [administrationFamilial, setAdministrationFamilial] = useState({
		father_name: "",
		father_occupation: "",
		father_income: "",
		mother_name: "",
		mother_occupation: "",
		mother_income: "",
		occupation: "",
		income: "",
		living_partner: "",
		financier: "",
	});

	const {
		father_name,
		father_occupation,
		father_income,
		mother_name,
		mother_occupation,
		mother_income,
		occupation,
		income,
		living_partner,
		financier,
	} = administrationFamilial;

	const [administrationFiles, setAdministrationFiles] = useState({
		photo: null,
		nin_card: null,
		family_card: null,
		certificate: null,
		transcript: null,
		recommendation_letter: null,
		integrity_pact: null,
	});

	const {
		photo,
		nin_card,
		family_card,
		certificate,
		transcript,
		recommendation_letter,
		integrity_pact,
	} = administrationFiles;

	const [administrationDegree, setAdministrationDegree] = useState({
		degree: "",
	});

	const { degree } = administrationDegree;

	const onChangeFile = (e) => {
		if (e.target.files[0]) {
			setAdministrationFiles((prevState) => ({
				...prevState,
				[e.target.name]: e.target.files[0],
			}));
		}
	};

	const { user } = useSelector((state) => state.profile);

	const { data, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.administration
	);

	const { administration_id } = data;

	const dispatch = useDispatch();

	const onFormChangeAdministrationBiodata = (e) => {
		setAdministrationBiodata((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onFormChangeAdministrationFamilial = (e) => {
		setAdministrationFamilial((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onFormChangeAdministrationDegree = (e) => {
		setAdministrationDegree((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onFormSubmitBiodata = (e) => {
		e.preventDefault();
		dispatch(
			sendAdministrationBiodata({ ...administrationBiodata, administration_id })
		);
	};

	const onFormSubmitFamilial = (e) => {
		e.preventDefault();
		dispatch(
			sendAdministrationFamilial({
				...administrationFamilial,
				administration_id,
			})
		);
	};

	const onFormSubmitFiles = (e) => {
		e.preventDefault();

		dispatch(
			sendAdministrationFiles({ ...administrationFiles, administration_id })
		);
	};

	const onFormSubmitDegree = (e) => {
		e.preventDefault();
		dispatch(
			sendAdministrationDegree({ ...administrationDegree, administration_id })
		);
	};

	useEffectOnce(() => {
		setIsLoaded(false);
		dispatch(resetState());
	});

	useEffect(() => {
		let appendData = {};
		if (data?.biodata?.full_name == null) appendData.full_name = user.full_name;
		if (data?.biodata?.email == null) appendData.email = user.email;
		if (data?.biodata?.phone == null) appendData.phone = user.phone;
		if (data?.biodata?.gender == null) appendData.gender = user.gender;

		// setAdministrationBiodata(appendData);

		if (data?.biodata)
			setAdministrationBiodata({ ...data?.biodata, ...appendData });
		if (data?.familial) setAdministrationFamilial(data.familial);
		if (data?.files) {
			for (const [key, value] of Object.entries(data.files)) {
				if (value?.startsWith("documents/administrations/")) {
					setAdministrationFiles((prevState) => ({
						...prevState,
						[key]: {
							name: value,
						},
					}));
				}
			}
		}
		if (data?.degree) setAdministrationDegree({ degree: data.degree });

		if (isError && !isSuccess) {
			toast.error(message);
			dispatch(reset());
		}

		if (isSuccess && Object.keys(data).length > 0) {
			setIsLoaded(true);
		}

		if (isSuccess && message && !isError) {
			toast.success(message);
			dispatch(reset());
		}
	}, [data, isLoaded, isLoading, isSuccess, isError, message]);

	return (
		<>
			<div
				className="accordion accordion-icon accordion-bg-light"
				id="accordionExample"
			>
				{isLoading && !isLoaded ? (
					<span className="d-block bg-light text-center py-1 mt-1 mb-3 border">
						<div className="spinner-border">
							<span className="visually-hidden">Loading...</span>
						</div>
					</span>
				) : (
					<>
						<div className="accordion-item mb-3">
							<h6 className="accordion-header" id="headingOne">
								<button
									className="accordion-button rounded collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="false"
									aria-controls="collapseOne"
								>
									<span className="text-secondary fw-bold me-3">01</span>
									<span className="fw-bold">Biodata Kamu</span>
									{/* &nbsp;<span className="badge text-bg-danger">5 data belum terverifikasi</span> */}
									{/* &nbsp;<span className="badge text-bg-info">3 data sudah terverifikasi</span> */}
								</button>
							</h6>
							<div
								id="collapseOne"
								className="accordion-collapse collapse"
								aria-labelledby="headingOne"
							>
								<div className="accordion-body mt-3">
									<form onSubmit={onFormSubmitBiodata}>
										<div className="row">
											<div className="col-md-12">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Nama Lengkap
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="full_name"
													value={full_name}
													placeholder="Nama Lengkap"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													NIK
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="nin"
													value={nin}
													placeholder="NIK"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Alamat Email
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="email"
													value={email}
													placeholder="Alamat Email"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Program Studi
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="study_program"
													value={study_program}
													placeholder="Program Studi"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Semester
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="semester"
													value={semester}
													placeholder="Semester"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Alamat Lengkap
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="nin_address"
													value={nin_address}
													placeholder="Alamat Lengkap"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Alamat Domisili
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="residence_address"
													value={residence_address}
													placeholder="Alamat Domisili"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Tempat Lahir
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="birth_place"
													value={birth_place}
													placeholder="Tempat Lahir"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Tanggal Lahir
												</label>
												<input
													type="date"
													className="form-control mb-3"
													name="birth_date"
													value={birth_date}
													placeholder="dd/mm/yy"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Jenis Kelamin
												</label>
												<select
													className="form-select"
													onChange={onFormChangeAdministrationBiodata}
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
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Nomor Handphone
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="phone"
													value={phone}
													placeholder="Nomor Handphone"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Universitas Asal
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="university_of_origin"
													value={university_of_origin}
													placeholder="Universitas Asal"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													NIM atau NPM
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="nsn"
													value={nsn}
													placeholder="NIM atau NPM"
													onChange={onFormChangeAdministrationBiodata}
												/>
											</div>
										</div>
										<div className="d-sm-flex justify-content-end mt-2">
											{isLoading ? (
												<button
													className="btn btn-primary mb-0"
													type="submit"
													disabled={isLoading}
												>
													<span className="spinner-border spinner-border-sm"></span>
													&nbsp;Loading...
												</button>
											) : (
												<button type="submit" className="btn btn-primary mb-0">
													Simpan Biodata
												</button>
											)}
										</div>
									</form>
								</div>
							</div>
						</div>
					</>
				)}
				{isLoading && !isLoaded ? (
					<span className="d-block bg-light text-center py-1 mt-1 mb-3 border">
						<div className="spinner-border">
							<span className="visually-hidden">Loading...</span>
						</div>
					</span>
				) : (
					<>
						<div className="accordion-item mb-3">
							<h6 className="accordion-header" id="headingTwo">
								<button
									className="accordion-button rounded collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									<span className="text-secondary fw-bold me-3">02</span>
									<span className="fw-bold">Data Keluarga Kamu</span>
									{/* &nbsp;<span className="badge text-bg-danger">5 data belum terverifikasi</span> */}
									{/* &nbsp;<span className="badge text-bg-info">3 data sudah terverifikasi</span> */}
								</button>
							</h6>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="headingTwo"
							>
								<div className="accordion-body mt-3">
									<form onSubmit={onFormSubmitFamilial}>
										<div className="row">
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Nama Ayah
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="father_name"
													value={father_name}
													placeholder="Nama Ayah"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Pekerjaan Ayah
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="father_occupation"
													value={father_occupation}
													placeholder="Pekerjaan Ayah"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Penghasilan Ayah Perbulan
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="father_income"
													value={father_income}
													placeholder="Pekerjaan Ayah"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Nama Ibu
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="mother_name"
													value={mother_name}
													placeholder="Nama Ibu"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Pekerjaan Ibu
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="mother_occupation"
													value={mother_occupation}
													placeholder="Pekerjaan Ibu"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Penghasilan Ibu Perbulan
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="mother_income"
													value={mother_income}
													placeholder="Penghasilan Ibu Perbulan"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Pekerjaan Sendiri
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="occupation"
													value={occupation}
													placeholder="Pekerjaan Sendiri"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Penghasilan Sendiri
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="income"
													value={income}
													placeholder="Penghasilan Sendiri"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Tinggal Dengan
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="living_partner"
													value={living_partner}
													placeholder="Tinggal Dengan"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													<span className="text-danger">
														<sup>*</sup>
													</span>{" "}
													Biaya Kuliah Ditanggung Oleh
												</label>
												<input
													type="text"
													className="form-control mb-3"
													name="financier"
													value={financier}
													placeholder="Biaya Kuliah Ditanggung Oleh"
													onChange={onFormChangeAdministrationFamilial}
												/>
											</div>
										</div>
										<div className="d-sm-flex justify-content-end mt-2">
											{isLoading ? (
												<button
													className="btn btn-primary mb-0"
													type="submit"
													disabled={isLoading}
												>
													<span className="spinner-border spinner-border-sm"></span>
													&nbsp;Loading...
												</button>
											) : (
												<button type="submit" className="btn btn-primary mb-0">
													Simpan Data Keluarga
												</button>
											)}
										</div>
									</form>
								</div>
							</div>
						</div>
					</>
				)}
				{isLoading && !isLoaded ? (
					<span className="d-block bg-light text-center py-1 mt-2 mb-3 border">
						<div className="spinner-border">
							<span className="visually-hidden">Loading...</span>
						</div>
					</span>
				) : (
					<>
						<div className="accordion-item mb-3">
							<h6 className="accordion-header" id="headingThree">
								<button
									className="accordion-button rounded collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									<span className="text-secondary fw-bold me-3">03</span>
									<span className="fw-bold">Berkas Kamu</span>
									{/* &nbsp;<span className="badge text-bg-danger">5 data belum terverifikasi</span> */}
									{/* &nbsp;<span className="badge text-bg-info">3 data sudah terverifikasi</span> */}
								</button>
							</h6>
							<div
								id="collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="headingThree"
							>
								<div className="accordion-body mt-3">
									<form onSubmit={onFormSubmitFiles}>
										<div className="row">
											<div className="col-12">
												<label className="form-label">
													<span className="text-danger">*</span> Pakta
													Integritas
												</label>
												{integrity_pact?.name && (
													<div className="bg-light mb-3 p-3">
														{integrity_pact?.name}
													</div>
												)}
												<div className="input-group mb-3">
													<input
														name="integrity_pact"
														type="file"
														className="form-control"
														onChange={onChangeFile}
													/>
													<label className="input-group-text">
														.jpg, .jpeg, .png
													</label>
												</div>
											</div>
											<div className="col-12">
												<label className="form-label">
													<span className="text-danger">*</span> Pas Foto
												</label>
												{photo?.name && (
													<div className="bg-light mb-3 p-3">{photo?.name}</div>
												)}
												<div className="input-group mb-3">
													<input
														name="photo"
														type="file"
														className="form-control"
														onChange={onChangeFile}
													/>
													<label className="input-group-text">
														.jpg, .jpeg, .png
													</label>
												</div>
											</div>
											<div className="col-12">
												<label className="form-label">
													<span className="text-danger">*</span> Kartu Tanda
													Penduduk (KTP)
												</label>
												{nin_card?.name && (
													<div className="bg-light mb-3 p-3">
														{nin_card?.name}
													</div>
												)}
												<div className="input-group mb-3">
													<input
														name="nin_card"
														type="file"
														className="form-control"
														onChange={onChangeFile}
													/>
													<label className="input-group-text">
														.jpg, .jpeg, .png
													</label>
												</div>
											</div>
											<div className="col-12">
												<label className="form-label">
													<span className="text-danger">*</span> Kartu Keluarga
													(KK)
												</label>
												{family_card?.name && (
													<div className="bg-light mb-3 p-3">
														{family_card?.name}
													</div>
												)}
												<div className="input-group mb-3">
													<input
														name="family_card"
														type="file"
														className="form-control"
														onChange={onChangeFile}
													/>
													<label className="input-group-text">
														.jpg, .jpeg, .png
													</label>
												</div>
											</div>
											<div className="col-12">
												<label className="form-label">
													<span className="text-danger">*</span> Sertifikat
												</label>
												{certificate?.name && (
													<div className="bg-light mb-3 p-3">
														{certificate?.name}
													</div>
												)}
												<div className="input-group mb-3">
													<input
														name="certificate"
														type="file"
														className="form-control"
														onChange={onChangeFile}
													/>
													<label className="input-group-text">.pdf</label>
												</div>
											</div>
											<div className="col-12">
												<label className="form-label">
													<span className="text-danger">*</span> Transkrip Nilai
													Terbaru
												</label>
												{transcript?.name && (
													<div className="bg-light mb-3 p-3">
														{transcript?.name}
													</div>
												)}
												<div className="input-group mb-3">
													<input
														name="transcript"
														type="file"
														className="form-control"
														onChange={onChangeFile}
													/>
													<label className="input-group-text">.pdf</label>
												</div>
											</div>
											<div className="col-12">
												<label className="form-label">
													<span className="text-danger">*</span> Surat
													Rekomendasi
												</label>
												{recommendation_letter?.name && (
													<div className="bg-light mb-3 p-3">
														{recommendation_letter?.name}
													</div>
												)}
												<div className="input-group mb-3">
													<input
														name="recommendation_letter"
														type="file"
														className="form-control"
														onChange={onChangeFile}
													/>
													<label className="input-group-text">.pdf</label>
												</div>
											</div>
										</div>
										<div className="d-sm-flex justify-content-end mt-2">
											{isLoading ? (
												<button
													className="btn btn-primary mb-0"
													type="submit"
													disabled={isLoading}
												>
													<span className="spinner-border spinner-border-sm"></span>
													&nbsp;Loading...
												</button>
											) : (
												<button type="submit" className="btn btn-primary mb-0">
													Simpan Berkas
												</button>
											)}
										</div>
									</form>
								</div>
							</div>
						</div>
					</>
				)}
				{isLoading && !isLoaded ? (
					<span className="d-block bg-light text-center py-1 mt-2 mb-3 border">
						<div className="spinner-border">
							<span className="visually-hidden">Loading...</span>
						</div>
					</span>
				) : (
					<>
						<div className="accordion-item">
							<h6 className="accordion-header" id="headingFour">
								<button
									className="accordion-button rounded collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									<span className="text-secondary fw-bold me-3">04</span>
									<span className="fw-bold">Jenjang Pendidikan Kamu</span>
									{/* &nbsp;<span className="badge text-bg-danger">5 data belum terverifikasi</span> */}
									{/* &nbsp;<span className="badge text-bg-info">3 data sudah terverifikasi</span> */}
								</button>
							</h6>
							<div
								id="collapseFour"
								className="accordion-collapse collapse"
								aria-labelledby="headingFour"
							>
								<div className="accordion-body mt-3">
									<form onSubmit={onFormSubmitDegree}>
										<div className="col-md-6">
											<label className="form-label">
												<span className="text-danger">
													<sup>*</sup>
												</span>{" "}
												Jenjang Pendidikan
											</label>
											<input
												type="text"
												className="form-control mb-3"
												name="degree"
												value={degree}
												placeholder="Jenjang Pendidikan"
												onChange={onFormChangeAdministrationDegree}
											/>
										</div>
										<div className="d-sm-flex justify-content-end mt-2">
											{isLoading ? (
												<button
													className="btn btn-primary mb-0"
													type="submit"
													disabled={isLoading}
												>
													<span className="spinner-border spinner-border-sm"></span>
													&nbsp;Loading...
												</button>
											) : (
												<button type="submit" className="btn btn-primary mb-0">
													Simpan Jenjang
												</button>
											)}{" "}
										</div>
									</form>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default AdministrationForm;
