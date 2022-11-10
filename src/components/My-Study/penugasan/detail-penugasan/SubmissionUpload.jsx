import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import PageNotFound from "../../../../components/default/PageNotFound";
import { submitAssignment, updateAssignment } from "../../../../features/assignment/assignmentSlice";

const SubmissionUpload = ({ assigments }) => {

	const dispatch = useDispatch();
	const { sessionId } = useParams();
	const [assignment, setAssignment] = useState({});
	const { message } = useSelector((state) => state.assignment);

	const onChangeAssignment = (e) => {
		if (e.target.files[0]) {
			setAssignment(e.target.files[0]);
			// console.log(assignment);
		}
	};

	const doSubmitAssignment = (e) => {
		e.preventDefault();

		if (!assignment.length === 0) toast.error("File masih kosong.");

		if (assigments?.students_work?.activity_detail) {
			dispatch(updateAssignment({ sessionId, assignment }))
			toast.success("Sukses Update")
		}
		else {
			dispatch(submitAssignment({ sessionId, assignment }))
			toast.success("Sukses Upload")
		}
	};

	useEffect(() => {
		if (!sessionId) return <PageNotFound />;
	}, [assignment, message, sessionId]);

	return (
		<div className="col-12 mt-4">
			<form onSubmit={doSubmitAssignment}>
				<div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
					<img
						src="/assets/images/element/gallery.svg"
						className="h-50px"
						alt="uploadfile"
					/>
					<div>
						<h6 className="my-2">
							Upload tugas disini <a href="#!" className="text-primary"> Browse </a>
						</h6>
						<label style={{ cursor: "pointer" }}>
							<span>
								<input
									className="form-control stretched-link"
									type="file"
									name="assignment"
									onChange={onChangeAssignment}
								/>
							</span>
						</label>
						<p className="small mb-0 mt-2">
							<b>Note:</b> Pastikan berkas sudah sesuai dengan ketentuan tugas
							submission
						</p>
					</div>
				</div>
				<button type="submit" className="btn btn-primary mt-4">
					{
						assigments?.students_work?.activity_detail ? 'Update Tugas' : 'Kirim Tugas'
					}
				</button>
			</form>
		</div>
	);
};

export default SubmissionUpload;
