import React from "react";

import Banner from "../components/Account/Banner";
import Sidebar from "../components/Account/Sidebar";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";

const Dashboard = () => {
	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />
						<div className="col-xl-9"></div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Dashboard;
