import React from "react";
import Banner from "../../components/Profile/Banner";
import SidebarProfile from "../../components/Profile/Sidebar";
import MainContent from "../../components/student/dashboard/MainContent";

import Header from "../default/Header";
import Footer from "../default/Footer";

const StudentDashboard = () => {
	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<SidebarProfile />
						<MainContent />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default StudentDashboard;
