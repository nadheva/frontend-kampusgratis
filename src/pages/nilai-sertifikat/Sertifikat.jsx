import React from "react";

import Banner from "../../components/Account/Banner";
import Sidebar from "../../components/Account/Sidebar";
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import MainContent from "../../components/nilai-sertifikat/sertifikat/MainContent";

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
								<MainContent />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Sertifikat;
