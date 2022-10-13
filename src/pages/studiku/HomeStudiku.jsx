import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

// component
import Intro from "../../components/studiku/homeStudiku/Intro";
import MainContent from "../../components/studiku/homeStudiku/MainContent";
import Sidebar from "../../components/studiku/homeStudiku/Sidebar";
import Header from "../default/Header";
import Footer from "../default/Footer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getMySubjects, reset } from "../../features/subject/subjectSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Main = () => {

	useEffect(() => {
		document.title = "Kampus Gratis | Studiku";
	});

	// redux
	const dispatch = useDispatch();
	const [currentSubject, setCurrentSubject] = useState({});

	const { data, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.subject
	);

	useEffectOnce(() => {
		dispatch(getMySubjects());
	});

	useEffect(() => {
		if (data?.subjects) setCurrentSubject(data.subjects);

	}, [data]);

	return (
		<>
			<Header />
			<main>
				<Intro />
				<section className="py-5">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-xl-9 ">
								<MainContent
									course={currentSubject.result}
									isLoading={isLoading}
								/>
							</div>
							<Sidebar />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Main;
