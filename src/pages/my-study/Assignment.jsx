import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/My-Study/assignment/Intro";
import Instruction from "../../components/My-Study/assignment/Instruction";
import SubmissionStatus from "../../components/My-Study/assignment/SubmissionStatus";
import SubmissionUpload from "../../components/My-Study/assignment/SubmissionUpload";

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

	// Get id
	const { sessionId } = useParams();

	// Redux
	const dispatch = useDispatch();
	const [assigments, setAssigments] = useState();

	const { data, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.assignment
	);

	useEffectOnce(() => {
		dispatch(getAssignments(sessionId));
	});

	useEffect(() => {
		if (data?.assigments) setAssigments(data.assigments);
	}, [data]);

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
									<Instruction assigments={assigments} isLoading={isLoading} />
									<SubmissionStatus
										assigments={assigments}
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
