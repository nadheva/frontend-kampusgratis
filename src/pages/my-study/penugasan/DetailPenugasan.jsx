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
	getAssignment
} from "../../../features/assignment/assignmentSlice";
import useEffectOnce from "../../../helpers/useEffectOnce";

const DetailPenugasan = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Penugasan";
	});

	const { sessionId } = useParams();

	const dispatch = useDispatch();
	const [assignments, setAssignments] = useState();

	const { data, isLoading } = useSelector(
		(state) => state.assignment
	);

	useEffectOnce(() => {
		dispatch(getAssignment(sessionId));
	});

	useEffect(() => {
		if (data?.assignment) setAssignments(data.assignment);
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
									<Instruction assignments={assignments} isLoading={isLoading} />
									<SubmissionStatus
										assignments={assignments}
										isLoading={isLoading}
									/>
									<SubmissionUpload
										assignments={assignments} />
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
