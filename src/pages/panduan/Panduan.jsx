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
			link: "/panduan/buku-panduan",
		},
		{
			id: 2,
			icon: "bi-fast-forward text-danger",
			title: "Video Panduan",
			deskripsi: "Panduan ini berisi video - video panduan.",
			link: "/panduan/vidio-panduan",
		},
		{
			id: 3,
			icon: "bi-journal-bookmark text-warning",
			title: "Kamus KG",
			deskripsi: "Panduan ini berisi konten kamus kampus gratis.",
			link: "/panduan/kamus-KG",
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
			</main>
			<Footer />
		</>
	);
};

export default Panduan;
