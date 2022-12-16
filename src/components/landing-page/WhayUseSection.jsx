import React from "react";

const WhayUseSection = () => {
	const data = [
		{
			id: 1,
			color: "bg-orange text-orange",
			icon: "fas fa-user-tie fs-5",
			title: "Dibimbing oleh mentor yang ahli ",
			deskripsi:
				"Dibimbing langsung oleh mentor yang sudah ahli dibidangnya yang menbantu dalam proses belajar.",
		},
		{
			id: 2,
			color: "bg-info text-info",
			icon: "fas fa-book fs-5",
			title: "Belajar semua materi GRATIS",
			deskripsi:
				"Pembelajaran gratis dan mendapatkan sertifikat kelulusan resmi yang bisa mempermudah dalam mencari pekerjaan",
		},
		{
			id: 3,
			color: "bg-success text-success",
			icon: "bi bi-alarm-fill fs-5",
			title: "Pembelajaran yang Fleksibel",
			deskripsi:
				"Belajar dimana aja, bisa di akses melalui HP, kapanpun mau belajar bisa dilakukan, sehingga belajar bisa jadi fleksibel dan tidak terikat oleh ruang dan waktu. ",
		},
		{
			id: 4,
			color: "bg-danger text-danger",
			icon: "fas fa-university fs-5",
			title: "Dukungan untuk karir masa depan",
			deskripsi:
				"Dibimbing untuk membuat CV dan portofolio, personal branding, persiapan wawancara, hingga koneksi pekerjaan pada startup bergengsi.",
		},
	];

	return (
		<section>
			<div className="container">
				<div className="row g-4 align-items-center">
					<div className="col-lg-5" data-aos="fade-up-right">
						<h2>
							Mengapa <span className="text-warning"> Harus </span> Memilih
							Kampus Gratis
							<span className="position-relative z-index-1">
								<span className="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-sm-block">
									<svg
										className="fill-orange"
										width={180}
										height={86}
										viewBox="0 0 303 86"
									>
										<path d="M288.197 19.3999C281.599 15.6998 273.654 13.03 265.424 10.926C256.533 8.64794 247.263 6.92124 237.946 5.4267C218.461 2.249 198.384 0.406219 178.237 0.0579769C158.609 -0.275755 138.888 0.8125 119.733 3.49686C108.17 5.10748 96.8189 7.2985 85.8466 10.0264C81.4955 11.0131 77.168 12.0723 72.9115 13.2331C56.382 17.7022 40.5146 23.4192 26.3972 30.355C12.9182 36.9861 0.716203 46.0404 0.999971 57.2131C1.14185 62.2772 4.16871 67.051 9.98595 70.693C15.4721 74.1319 22.6846 76.3809 29.9679 78.0206C38.7647 80.0085 48.0345 81.3289 57.257 82.4026C67.1179 83.5489 77.0734 84.2889 87.0762 84.6807C107.413 85.4642 127.892 84.7968 148.063 83.0266C168.399 81.2418 188.429 78.3543 208.127 74.8139C227.399 71.3459 246.436 67.2976 265.141 62.8285C278.927 59.5348 294.227 55.0802 300.446 46.2435C307.091 36.812 299.949 25.973 288.197 19.3999ZM298.862 46.7804C295.48 50.9593 289.592 54.0935 283.207 56.4876C276.633 58.9543 269.468 60.7391 262.279 62.4077C252.915 64.5843 243.503 66.6737 234.044 68.6616C215.174 72.6083 196.019 76.0762 176.534 78.7171C157.191 81.3289 137.54 83.0991 117.747 83.6505C97.9304 84.2019 77.9957 83.5634 58.4866 81.3289C49.5243 80.2987 40.5146 79.0363 31.907 77.1645C24.5764 75.5829 17.3403 73.4499 11.6649 70.1126C5.49296 66.4561 2.15869 61.5226 2.22963 56.2555C2.32422 50.7417 5.72943 45.489 10.9555 41.0489C16.1106 36.6959 22.7319 33.0974 29.6842 29.8472C36.2108 26.8145 43.0213 24.0141 50.0918 21.4748C48.4601 22.1278 46.8521 22.7953 45.2678 23.4772C37.7716 26.684 30.4409 30.1664 23.9615 34.1131C17.695 37.9438 12.1615 42.3839 9.30018 47.5785C6.55709 52.5554 6.10779 58.1853 9.77313 63.0462C13.0838 67.4427 19.303 70.7655 26.279 72.8985C34.6974 75.4813 44.2036 76.2358 53.497 76.381C63.8309 76.5406 74.2357 76.1488 84.5696 75.757C95.0454 75.3652 105.497 74.7993 115.926 74.0884C136.783 72.6664 157.545 70.6204 178.071 67.9361C187.956 66.6447 197.817 65.2227 207.583 63.6411C208.269 63.525 208.718 62.3642 208.009 62.4658C188.358 65.629 168.447 68.2118 148.394 70.2142C128.435 72.202 108.312 73.624 88.1404 74.4366C78.0666 74.8429 67.9219 75.1911 57.8008 75.2056C48.3419 75.2201 38.6465 74.7558 29.8261 72.5068C22.5427 70.6785 15.8032 67.6169 11.8777 63.3509C7.33745 58.4175 7.52663 52.4393 10.6481 47.2302C13.7695 41.9776 19.7523 37.581 26.3263 33.8084C32.7583 30.1083 39.8289 26.7855 47.1359 23.7529C59.2197 18.7034 72.2257 14.4955 85.7756 11.1292C90.7889 9.99737 95.8494 8.98167 100.981 8.08205C117.96 5.07846 135.553 3.32274 153.218 2.88744C161.754 2.66979 170.315 2.78587 178.851 3.19215C179.537 3.22117 180.128 2.06037 179.277 2.01684C167.69 1.45094 156.032 1.47996 144.468 2.06037C145.745 1.97331 146.999 1.88625 148.275 1.8137C167.879 0.6674 187.696 1.04466 207.157 2.78587C226.075 4.46904 245.111 7.25497 262.894 11.608C278.714 15.4677 294.085 21.6635 299.808 32.0092C302.456 36.812 302.574 42.1662 298.862 46.7804Z" />
									</svg>
								</span>
							</span>
						</h2>
						<img
							src="assets/images/asset-kg/KGB00591-why.jpg"
							className="rounded-2"
							alt="about"
						/>
					</div>
					<div className="col-lg-7 ps-4">
						<div className="row g-4">
							{data.map((x) => (
								<div className="col-sm-6" key={x.id} data-aos="zoom-in">
									<div className={`icon-lg bg-opacity-10 rounded-2 ${x.color}`}>
										<i className={x.icon} />
									</div>
									<h5 className="mt-2">{x.title}</h5>
									<p className="mb-0">{x.deskripsi}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhayUseSection;
