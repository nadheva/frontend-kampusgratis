import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

const Categories = () => {
	const categoryList = [
		{
			id: "1",
			name: "Silabus",
			url: "/silabus",
			src: "/assets/images/element/online.svg",
			background: "bg-secondary",
			disabled: false
		},
		{
			id: "2",
			name: "Studi-Ku",
			url: "/studi-ku",
			src: "/assets/images/element/instructor-course.svg",
			background: "bg-primary",
			disabled: false
		},
		{
			id: "3",
			name: "Penugasan",
			url: "/penugasan",
			src: "/assets/images/element/home.svg",
			background: "bg-danger",
			disabled: false
		},
		{
			id: "4",
			name: "Sekilas Ilmu",
			url: "/artikel",
			src: "/assets/images/element/data-science.svg",
			background: "bg-success",
			disabled: false
		},
		{
			id: "5",
			name: "Kalender Saya",
			url: "/kalender",
			src: "/assets/images/element/account.svg",
			background: "bg-black",
			disabled: false
		},
		{
			id: "6",
			name: "Acara Kampus",
			url: "/acara-kampus",
			src: "/assets/images/element/photography.svg",
			background: "bg-black",
			disabled: false
		},
		{
			id: "7",
			name: "Nilai & Sertifikat",
			url: "/nilai",
			src: "/assets/images/element/18.svg",
			background: "bg-black",
			disabled: false
		},
		{
			id: "8",
			name: "Penyaluran Kerja",
			url: "/penyaluran-kerja",
			src: "/assets/images/element/coding.svg",
			background: "bg-black",
			disabled: false
		},
		{
			id: "9",
			name: "Analitik",
			url: "/analitik",
			src: "/assets/images/element/exam.svg",
			background: "bg-black",
			disabled: false
		},
		{
			id: "11",
			name: "Konsultasi & Layanan",
			url: "/layanan-konsultasi",
			src: "/assets/images/element/online.svg",
			background: "bg-black",
			disabled: false
		},
		{
			id: "12",
			name: "Diskusi Perkuliahan",
			url: "#",
			src: "/assets/images/element/25.svg",
			background: "bg-danger",
			disabled: true
		},
		{
			id: "13",
			name: "Panduan",
			url: "#",
			src: "/assets/images/element/help.svg",
			background: "bg-warning",
			disabled: true
		},
		{
			id: "14",
			name: "Papan Skor",
			url: "#",
			src: "/assets/images/element/music.svg",
			background: "bg-primary",
			disabled: true
		},
		{
			id: "15",
			name: "Ruang Simulasi",
			url: "#",
			src: "/assets/images/element/account.svg",
			background: "bg-light",
			disabled: true
		},
		{
			id: "16",
			name: "Perencanaan Karir",
			url: "#",
			src: "/assets/images/element/engineering.svg",
			background: "bg-success",
			disabled: true
		},
		{
			id: "17",
			name: "Absensi",
			url: "#",
			src: "/assets/images/element/marketing.svg",
			background: "bg-danger",
			disabled: true
		},
	];

	return (
		<>
			<Header />
			<section>
				<div className="container position-relative">
					<div className="row">
						<div className="col-12">
							<div className="row align-items-center">
								<div className="col-6 col-md-3 text-center order-1">
									<img
										loading="lazy"
										src="/assets/images/element/category-1.svg"
										alt="x"
									/>
								</div>
								<div className="col-md-6 px-md-5 text-center position-relative order-md-2 mb-5 mb-md-0">
									<figure className="position-absolute top-0 start-0">
										<svg width="22px" height="22px" viewBox="0 0 22 22">
											<polygon
												className="fill-orange"
												points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "
											></polygon>
										</svg>
									</figure>
									<figure className="position-absolute top-0 start-50 translate-middle mt-n6 d-none d-md-block">
										<svg width="27px" height="27px">
											<path
												className="fill-purple"
												d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"
											></path>
										</svg>
									</figure>
									<h1 className="mb-3">Apa yang ingin Kamu pelajari?</h1>
									<p className="mb-3">
										Kembangkan keterampilan Kamu dengan kursus dan sertifikasi
										online di Kampus Gratis. Berbagai macam jenis materi
										tersedia.
									</p>
								</div>
								<div className="col-6 col-md-3 text-center order-3">
									<img
										loading="lazy"
										src="/assets/images/element/category-2.svg"
										alt="x"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row mb-4">
						<div className="col-lg-8 mx-auto text-center">
							<h2>Beberapa Kategori di Kampus Gratis</h2>
						</div>
					</div>
					<div className="row g-4">
						{categoryList.map(category => <>
							<div className="col-sm-6 col-md-4 col-xl-3" key={category.id}>
								<div className={`card card-body ${category.disabled ? "bg-dark" : category.background} bg-opacity-10 text-center position-relative btn-transition p-4`}>
									<div className="icon-xl bg-body mx-auto rounded-circle mb-3">
										<img
											loading="lazy"
											src={category.src}
											alt={category.name}
											style={category.disabled ? { filter: "grayscale(100%)" } : {}}
										/>
									</div>
									<h5 className="mb-2">
										{category.disabled ? <>
											<Link to="#" onClick={(e) => e.preventDefault()} className="stretched-link" disabled style={{ "cursor": "not-allowed" }}>
												{category.name}
											</Link>
										</> : <>
											<Link to={category.url} className="stretched-link" dstyle={{ "cursor": "not-allowed" }}>
												{category.name}
											</Link>
										</>}
									</h5>
								</div>
							</div>
						</>
						)}
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-6 position-relative overflow-hidden">
							<div className="bg-primary bg-opacity-10 rounded-3 p-5 h-100">
								<div className="position-absolute bottom-0 end-0 me-3">
									<img
										loading="lazy"
										src="/assets/images/element/08.svg"
										className="h-100px h-sm-200px"
										alt="x"
									/>
								</div>
								<div className="row">
									<div className="col-sm-8 position-relative">
										<h3 className="mb-1">Dapatkan Sertifikat</h3>
										<p className="mb-3 h5 fw-light lead">
											Dapatkan program sertifikat profesional yang tepat untuk
											Anda.
										</p>
										<Link to=" " className="btn btn-primary mb-0">
											Lihat Program
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 position-relative overflow-hidden">
							<div className="bg-secondary rounded-3 bg-opacity-10 p-5 h-100">
								<div className="position-absolute bottom-0 end-0 me-3">
									<img
										loading="lazy"
										src="/assets/images/element/15.svg"
										className="h-100px h-sm-200px"
										alt="x"
									/>
								</div>
								<div className="row">
									<div className="col-sm-8 position-relative">
										<h3 className="mb-1">Kursus Terbaik</h3>
										<p className="mb-3 h5 fw-light lead">
											Daftar sekarang di kursus paling populer dan berperingkat
											terbaik.
										</p>
										<Link to=" " className="btn btn-warning mb-0">
											Lihat Kursus
										</Link>
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

export default Categories;
