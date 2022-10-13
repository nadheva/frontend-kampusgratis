import React, { useEffect } from "react";
import { toast } from 'react-toastify';

// component
import Intro from "../../components/studiku/homeStudiku/Intro";
import MainContent from "../../components/studiku/homeStudiku/MainContent";
import Sidebar from "../../components/studiku/homeStudiku/Sidebar";
import Header from "../default/Header";
import Footer from "../default/Footer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getSubjects, reset } from "../../features/subject/subjectSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Main = () => {

	useEffect(() => {
		document.title = "Kampus Gratis | Studiku";
	});

	// redux
	const dispatch = useDispatch();
	const { subjects, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.subject
	);

	useEffectOnce(() => {
		dispatch(getSubjects());
	});

	useEffect(() => {
		if (isError && !isSuccess) {
			toast.error(message);
			dispatch(reset());
		}
		if (isSuccess && message && !isError) {
			toast.success(message);
			dispatch(reset());
		}
	}, [subjects, isLoading, isError, isSuccess, message, dispatch]);

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
									course={subjects.result}
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
