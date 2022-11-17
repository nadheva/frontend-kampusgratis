import React from "react";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/kategori/Intro";
import Banner from "../../components/kategori/Banner";
import KategoriList from "../../components/kategori/KategoriList";

const Categories = () => {

	const categoryList = [
		{
			id: "1",
			name: "Studi-Ku",
			url: "/studi-ku",
			src: "/assets/images/element/instructor-course.svg",
			background: "bg-primary",
			disabled: false
		},
		{
			id: "2",
			name: "Silabus",
			url: "/silabus",
			src: "/assets/images/element/online.svg",
			background: "bg-secondary",
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
			<Intro />
			<KategoriList
				categoryList={categoryList}
			/>
			<Banner />
			<Footer />
		</>
	);
};

export default Categories;
