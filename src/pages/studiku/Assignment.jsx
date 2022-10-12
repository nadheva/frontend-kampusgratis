import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import { useState } from "react";
import { useParams } from "react-router-dom";

// component
import Header from "../default/Header";
import Footer from "../default/Footer";
import Intro from "../../components/assignment/Intro";
import Instruction from "../../components/assignment/Instruction";
import SubmissionStatus from "../../components/assignment/SubmissionStatus";
import SubmissionUpload from "../../components/assignment/SubmissionUpload";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
	getAssignments,
	reset,
} from "../../features/assignment/assignmentSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Assignment = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Penugasan";
	});

	// testing
	// const [file, setFile] = useState("201904020-ibnu-trpl.pdf");
	// function handleFileChange(e) {
	// 	setFile(e.target.value);
	// }

	// Get id
	const { sessionId } = useParams();

	// Redux
	const dispatch = useDispatch();
	const { data, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.assignment
	);

	useEffectOnce(() => {
		dispatch(getAssignments(sessionId));
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
	}, [data, isLoading, isError, isSuccess, message, dispatch]);

	return (
		<>
			<Header />
			<main>
				<Intro />
				<section className="pt-3 pt-xl-5">
					<div className="container" data-sticky-container>
						<div className="row g-4">
							<div className="card shadow rounded-2 p-0 ">
								<div className="card-body p-sm-4">
									<Instruction
										assignment={data}
										isLoading={isLoading}
									/>
									<SubmissionStatus
										assignment={data}
										isLoading={isLoading}
									/>
									<SubmissionUpload />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Assignment;
