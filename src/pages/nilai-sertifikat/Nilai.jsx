import React from "react";

import Banner from "../../components/Account/Banner";
import Sidebar from "../../components/Account/Sidebar";
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import DataMahasiswa from "../../components/nilai-sertifikat/nilai/DataMahasiswa";
import TableNilai from "../../components/nilai-sertifikat/nilai/TableNilai";

const Nilai = () => {
	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />
						<div className="col-xl-9">
							<DataMahasiswa />
							<TableNilai />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Nilai;
