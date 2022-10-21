import React from "react";

const Maps = () => {
	return (
		<section class="pt-0">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<iframe
							className="w-100 h-400px grayscale rounded"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
							height={500}
							style={{ border: "0" }}
							aria-hidden="false"
							tabIndex={0}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Maps;
