import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
	return (
		<section className="bg-light">
			<div className="container">
				{/* Title */}
				<div className="row position-relative pb-4">
					<div className="col-lg-8 position-relative">
						{/* Title */}
						<h1>M-Knows Consulting</h1>
					</div>
					<div className="col-lg-4 position-relative text-end">
						<Link to="/form-penyaluran-kerja" className="btn btn-primary">
							Lamar Sekarang
						</Link>
					</div>
				</div>
				<div className="row position-relative pb-4">
					<p>
						M-Knows Consulting berdiri sejak tahun 2003, melalui cabang Jakarta
						& Surabaya, M-Knows Consulting telah sukses melayani beragam
						perusahaan dengan kualitas kerja yang memuaskan, sesuai keahliannya
						dan pendekatan konsultasi yang didasarkan pada : Applicative,
						Contemporary, High Impact Fun, & Motivational
					</p>
				</div>
				{/* Image */}
				<div
					className="h-300px mb-n9 rounded-3"
					style={{
						backgroundImage: "url(assets/images/bg/05.jpg)",
						backgroundPosition: "center left",
						backgroundSize: "cover",
					}}
				></div>
			</div>
		</section>
	);
};

export default Intro;
