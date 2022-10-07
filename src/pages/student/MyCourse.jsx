import React from "react";
import SidebarProfile from "../../components/Profile/Sidebar";
import Banner from "../../components/Profile/Banner";
import MainContent from "../../components/student/mycourse/MainContent";

import Header from "../default/Header";
import Footer from "../default/Footer";

const MyCourse = () => {
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

export default MyCourse;
