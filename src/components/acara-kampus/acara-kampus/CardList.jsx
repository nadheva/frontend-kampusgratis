import React from "react";

import CardItem from "./CardItem";

const CardList = () => {
	let data = [
		{
			id: "1",
			title: "Webinar : Design and Build Websites (Paperback)",
			img: "assets/images/book/01.jpg",
			zoom: "zoom",
			date: "Selasa, 20 September 2022",
			harga: "Gratis",
		},
		{
			id: "2",
			title: "Webinar : Belajar HTML & CSS",
			img: "assets/images/book/02.jpg",
			zoom: "zoom",
			date: "Senin, 21 September 2022",
			harga: "Gratis",
		},
		{
			id: "3",
			title: "Webinar : Cara cari kerja",
			img: "assets/images/book/03.jpg",
			zoom: "zoom",
			date: "Senin, 22 September 2022",
			harga: "Gratis",
		},
		{
			id: "4",
			title: "Webinar : Cara belajar ngoding",
			img: "assets/images/book/04.jpg",
			zoom: "zoom",
			date: "Kamis, 25 September 2022",
			harga: "Gratis",
		},
		{
			id: "5",
			title: "Webinar : Cara belajar ngoding di jakarta",
			img: "assets/images/book/05.jpg",
			zoom: "zoom",
			date: "Jumat, 29 September 2022",
			harga: "Gratis",
		},
		{
			id: "6",
			title: "Webinar : Cara membuat web",
			img: "assets/images/book/06.jpg",
			zoom: "meet",
			date: "Jumat, 29 September 2022",
			harga: "Gratis",
		},
	];

	return (
		<div className="row mt-3 g-4">
			{data.map((data) => (
				<CardItem key={data.id} data={data} />
			))}
		</div>
	);
};

export default CardList;
