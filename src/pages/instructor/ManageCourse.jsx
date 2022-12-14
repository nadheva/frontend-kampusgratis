import React from "react";

import Banner from "../../components/Profile/Banner";
import Sidebar from "../../components/Profile/Sidebar";
import ListCourse from "../../components/course/ListCourse";

import Header from "../default/Header";
import Footer from "../default/Footer";

const ManageCourse = () => {
	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />
						<div className="col-xl-9">
							<ListCourse />
							<div className="row g-4 mt-3">
								{/* <LinkedAccount />
                <UpdatePassword /> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ManageCourse;
