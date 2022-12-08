import React from "react";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/kategori/Intro";
import Banner from "../../components/kategori/Banner";
import KategoriList from "../../components/kategori/KategoriList";

const Categories = () => {
	const categoryList = [
		{
			name: "Administrasi",
			url: "/administrasi",
			src: "/assets/images/element/marketing.svg",
			background: "bg-success",
			disabled: false,
		},
		{
			name: "Rencana Studi",
			url: "/silabus",
			src: "/assets/images/element/online.svg",
			background: "bg-orange",
			disabled: false,
		},
		{
			name: "Studi-Ku",
			url: "/studi-ku",
			src: "/assets/images/element/instructor-course.svg",
			background: "bg-danger",
			disabled: false,
		},
		{
			name: "Nilai & Sertifikat",
			url: "/nilai",
			src: "/assets/images/element/18.svg",
			background: "bg-purple",
			disabled: false,
		},
		{
			name: "Penugasan",
			url: "/penugasan",
			src: "/assets/images/element/home.svg",
			background: "bg-danger",
			disabled: false,
		},
		{
			name: "Diskusi Perkuliahan",
			url: "#",
			src: "/assets/images/element/25.svg",
			background: "bg-primary",
			disabled: true,
		},
		{
			name: "Konsultasi & Layanan",
			url: "/layanan-konsultasi",
			src: "/assets/images/element/online.svg",
			background: "bg-success",
			disabled: false,
		},
		{
			name: "Simulasi",
			url: "#",
			src: "/assets/images/element/account.svg",
			background: "bg-info",
			disabled: true,
		},
		{
			name: "Drill & Assessment",
			url: "#",
			src: "/assets/images/element/20.svg",
			background: "bg-primary",
			disabled: true,
		},
		{
			name: "Kalender Saya",
			url: "/kalender",
			src: "/assets/images/element/account.svg",
			background: "bg-purple",
			disabled: false,
		},
		{
			name: "Papan Skor",
			url: "#",
			src: "/assets/images/element/music.svg",
			background: "bg-primary",
			disabled: true,
		},
		{
			name: "Analitik",
			url: "/analitik",
			src: "/assets/images/element/exam.svg",
			background: "bg-danger",
			disabled: false,
		},
		{
			name: "Panduan",
			url: "/panduan",
			src: "/assets/images/element/help.svg",
			background: "bg-warning",
			disabled: false,
		},
		{
			name: "Sekilas Ilmu",
			url: "/artikel",
			src: "/assets/images/element/data-science.svg",
			background: "bg-info",
			disabled: false,
		},
		{
			name: "Acara Kampus",
			url: "/acara-kampus",
			src: "/assets/images/element/photography.svg",
			background: "bg-warning",
			disabled: false,
		},
		{
			name: "Perencanaan Karir",
			url: "#",
			src: "/assets/images/element/engineering.svg",
			background: "bg-orange",
			disabled: true,
		},
		{
			name: "Penyaluran Kerja",
			url: "/penyaluran-kerja",
			src: "/assets/images/element/coding.svg",
			background: "bg-purple",
			disabled: false,
		},
	];

	return (
		<>
			<Header />
			<Intro />
			<KategoriList categoryList={categoryList} />
			<Banner />
			<Footer />
		</>
	);
};

export default Categories;
