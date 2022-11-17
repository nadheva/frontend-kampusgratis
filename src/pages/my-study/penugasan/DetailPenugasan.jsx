import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
	getAssignment,
	reset,
	submitAssignment,
	updateAssignment,
	deleteAssignment,
} from "../../../features/assignment/assignmentSlice";
import useEffectOnce from "../../../helpers/useEffectOnce";
import PageNotFound from "../../../components/default/PageNotFound";

const DetailPenugasan = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Penugasan";
	});

	const { sessionId } = useParams();

	const dispatch = useDispatch();
	const [assignments, setAssignments] = useState({});
	const [assignment, setAssignment] = useState({});

	const { message, isSuccess, isLoading, data } = useSelector(
		(state) => state.assignment
	);

	useEffectOnce(() => {
		dispatch(getAssignment(sessionId));
	});

	useEffect(() => {
		if (data?.assignment) setAssignments(data.assignment);
	}, [data]);

	// post & put 
	const onChangeAssignment = (e) => {
		if (e.target.files[0]) {
			setAssignment(e.target.files[0]);
		}
	};

	const doSubmitAssignment = (e) => {
		e.preventDefault();

		if (!assignment.length === 0) toast.error("File masih kosong.");

		if (assignments?.students_work?.activity_detail) {
			dispatch(updateAssignment({ sessionId, assignment }))
		} else {
			dispatch(submitAssignment({ sessionId, assignment }))
		}
	};

	useEffect(() => {
		if (!sessionId) return <PageNotFound />;
		if (isSuccess && data?.assignment?.students_work?.activity_detail?.file_assignment && message === "SUCCESS_UPLOAD") {
			toast.success("Pengunggahan tugas berhasil!");
			dispatch(reset());
		}

		if (isSuccess && message === "DELETE_ASSIGNMENT") {
			dispatch(reset());
		}

	}, [assignment, message, sessionId, deleteAssignment]);


	const handleDelete = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteAssignment(sessionId))
				// Swal.fire(
				// 	'Deleted!',
				// 	'Your file has been deleted.',
				// 	'success'
				// )
			}
		})
	}

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
										assignments={assignments}
										handleDelete={handleDelete}
										onChangeAssignment={onChangeAssignment}
										doSubmitAssignment={doSubmitAssignment}
									/>
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
