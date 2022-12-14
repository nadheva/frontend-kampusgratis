import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/default/Footer";
import Header from "../../components/default/Header";

const Panduan = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Panduan";
	});

	const dataPertanyaan = [
		{
			id: 1,
			title: "Cara Mendaftar di kampus Gratis",
			link: "javascript:void(0);",
		},
		{
			id: 2,
			title: "Cara login website Kampus Gratis",
			link: "javascript:void(0);",
		},
		{
			id: 3,
			title: "Cara mengisi Administrasi",
			link: "javascript:void(0);",
		},
		{
			id: 4,
			title: "Cara mengakses fitur Studiku",
			link: "javascript:void(0);",
		},
		{
			id: 5,
			title: "Bagaimana cara melihat Sertifikat",
			link: "javascript:void(0);",
		},
	];

	const dataPanduan = [
		{
			id: 1,
			icon: "bi-book text-success",
			title: "Buku Panduan",
			deskripsi: "Panduan ini berisi dokumen - dokumen panduan.",
			link: "/buku-panduan",
		},
		{
			id: 2,
			icon: "bi-fast-forward text-danger",
			title: "Vidio Panduan",
			deskripsi: "Panduan ini berisi video - video panduan.",
			link: "/vidio-panduan",
		},
		{
			id: 3,
			icon: "bi-journal-bookmark text-warning",
			title: "Kamus KG",
			deskripsi: "Panduan ini berisi konten kamus kampus gratis.",
			link: "/kamus-KG",
		},
	];

	return (
		<>
			<Header />
			<main>
				<section className="bg-primary bg-opacity-10">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 mx-auto text-center">
								<h1 className="display-6">Hai, ada yang bisa kami bantu?</h1>
								<p className="mb-0">
									Cari informasi penggunaan website Kampus Gratis di sini
								</p>
								<div className="row mt-4 align-items-center">
									<div className="col-12">
										<h5 className="mb-3">Topik Populer</h5>
										<div className="list-group list-group-horizontal gap-2 justify-content-center flex-wrap mb-0 border-0">
											{dataPertanyaan.map((x) => (
												<a
													className="btn btn-white btn-sm fw-light"
													key={x.id}
													href={x.link}
												>
													{x.title}
												</a>
											))}
											<a
												className="btn btn-primary-soft btn-sm fw-light"
												href="#!"
											>
												Lihat semua
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 mt-6">
								<img
									src="assets/images/element/help-center.svg"
									className="w-100"
									alt="img"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="py-7 bg-light">
					<div className="container">
						<div className="row g-4">
							{dataPanduan.map((x) => (
								<div className="col-md-6 col-xl-4" key={x.id}>
									<Link to={x.link}>
										<div className="card shadow card-hover-border bg-light h-100">
											<div className="card-header bg-light pb-0 border-0">
												<i className={`bi fs-1 ${x.icon}`} />
												<h5 className="card-title mb-0 mt-2">{x.title}</h5>
											</div>
											<div className="card-body px-3">
												<p className="text-body">{x.deskripsi}</p>
											</div>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="pt-0 pt-md-5 bg-light">
					<div className="container">
						<div className="row g-4">
							<div className="col-lg-6 col-xl-5">
								<h2 className="fs-1">Pertanyaan yang Sering Diajukan</h2>
								<p className="mb-0">
									Di samping ini pertanyaan-pertanyaan yang sering diajukan
									kepada kami. Harap dibaca dengan baik-baik.
								</p>
							</div>
							<div className="col-lg-6 ms-xl-auto">
								<div
									className="accordion accordion-icon accordion-bg-light"
									id="accordionFaq"
								>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingOne">
											<button
												className="accordion-button h6 rounded"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												Apa itu Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											aria-labelledby="headingOne"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Kampus Gratis adalah sebuah sistem manajemen e-learning
												yang gratis, berkualitas, bisa diakses siapapun,
												kapanpun, dimanapun, dan selalu update.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingTwo">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												Berapakah biaya kuliah di Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											aria-labelledby="headingTwo"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Hampir seluruh program di kampus gratis bebas dari
												biaya, kecuali program yang melibatkan sertifikasi.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingThree">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												Bagaimana alur pendaftaran kuliah di Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											aria-labelledby="headingThree"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Sign up mobile app Kampus Gratis Setelah berhasil, sign
												in mobile app Kampus Gratis Isi data diri dan keluarga
												Submit berkas-berkas administrasi Verifikasi data-data
												dan berkas-berkas Menyetujui legal statement Kampus
												Gratis untuk pembuatan akun mobile app Kampus Gratis
												Registrasi berhasil
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingFour">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseFour"
											>
												Program studi apa saja yang ditawarkan oleh Kampus
												Gratis?
											</button>
										</h2>
										<div
											id="collapseFour"
											className="accordion-collapse collapse"
											aria-labelledby="headingFour"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Program studi manajemen kredit dan pembiayaan bagi UMKM
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingFive">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFive"
												aria-expanded="false"
												aria-controls="collapseFive"
											>
												Bolehkah mahasiswa yang kampusnya di bawah naungan
												Kementerian di luar Kemendikbud Ristek mendaftar kuliah
												di Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseFive"
											className="accordion-collapse collapse"
											aria-labelledby="headingFive"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Boleh, selama pihak kampus asal mahasiswa mengakui
												kredit transfer yang didapatkan mahasiswa pada program
												kampus gratis, maka mahasiswa diperbolehkan mengikut
												program-program pada platform kampus gratis
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingSix">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseSix"
												aria-expanded="false"
												aria-controls="collapseSix"
											>
												Jika ada kampus yang belum bermitra tetapi ingin ikut
												program Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseSix"
											className="accordion-collapse collapse"
											aria-labelledby="headingSix"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												perwakilan kampus dapat mendaftar sebagai mitra kampus
												gratis melalui form yang tersedia di laman “mitra” pada
												web dan aplikasi kampus gratis. Calon mitra juga
												menghubungi tim Kampus gratis melalui email atau telepon
												staf admin 085855407510 untuk membuat jadwal permintaan
												presentasi mengenai program kampus gratis oleh tim
												kampus gratis.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Panduan;
