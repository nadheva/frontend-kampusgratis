import React, { useEffect } from "react";

const Forbidden = () => {
	useEffect(() => {
		document.title = "403 | Access Denied";
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

							<h1 className="display-1 text-danger mb-0">403</h1>

							<h2>Forbidden</h2>

							<p className="mb-4">
								Sorry, you must login first too see this page
							</p>

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

export default Forbidden;
