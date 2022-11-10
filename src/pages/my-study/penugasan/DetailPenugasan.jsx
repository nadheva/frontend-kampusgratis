import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// component
import Header from "../../../components/default/Header";
import Footer from "../../../components/default/Footer";

import Intro from "../../../components/My-Study/penugasan/detail-penugasan/Intro";
import Instruction from "../../../components/My-Study/penugasan/detail-penugasan/Instruction";
import SubmissionStatus from "../../../components/My-Study/penugasan/detail-penugasan/SubmissionStatus";
import SubmissionUpload from "../../../components/My-Study/penugasan/detail-penugasan/SubmissionUpload";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
	getAssignments,
} from "../../../features/assignment/assignmentSlice";
import useEffectOnce from "../../../helpers/useEffectOnce";

const DetailPenugasan = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Penugasan";
	});

	// Get id
	const { sessionId } = useParams();

	// // Redux
	const dispatch = useDispatch();
	const [assigments, setAssigments] = useState();

	const { data, isLoading } = useSelector(
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
									<SubmissionUpload
										assigments={assigments} />
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

export default DetailPenugasan;
