import React, { useEffect } from "react";

const Unauthorized = () => {
	useEffect(() => {
		document.title = "401 | Unauthorize";
		window.scrollTo(0, 0);
	});
	return (
		<main>
			<section className="pt-5">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							<img
								src="/assets/images/element/error404-01.svg"
								className="h-200px h-md-400px mb-4"
								alt=""
							/>
							<h1 className="display-1 text-danger mb-0">401</h1>
							<h2>No authorization found</h2>
							<p className="mb-4">This page is not publically available</p>
							<a href="/" className="btn btn-primary mb-0">
								Go Back
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Unauthorized;
