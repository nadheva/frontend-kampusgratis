import React from "react";

import Banner from "../../components/Account/Banner";
import Sidebar from "../../components/Account/Sidebar";
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Modal from "../../components/nilai-sertifikat/sertifikat/Modal";
import SertifikatList from "../../components/nilai-sertifikat/sertifikat/SertifikatList";

const Sertifikat = () => {
	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />
						<div className="col-xl-9">
							<div className="card border bg-transparent rounded-3">
								<div className="card-header bg-transparent border-bottom">
									<h3 className="mb-0">List Sertifikat</h3>
								</div>
								<SertifikatList />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Modal />
			<Footer />
		</>
	);
};

export default Sertifikat;
