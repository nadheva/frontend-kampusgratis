import React from "react";

import Banner from "../components/Profile/Banner";
import Sidebar from "../components/Profile/Sidebar";
import Header from "./default/Header";
import Footer from "./default/Footer";

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
