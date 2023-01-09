import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
	return (
		<section className="bg-blue py-7">
			<div className="container">
				<div className="row justify-content-lg-between">
					<div className="col-lg-8">
						<h1 className="text-white">Video Panduan</h1>
						<p className="text-white">
							Berupa video tutorial penggunaan dan fungsi fitur yang ada di
							Website KG
						</p>
					</div>
					<div className="col-lg-3"> </div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
