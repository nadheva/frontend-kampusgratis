import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import PageNotFound from "../../../../components/default/PageNotFound";
import { reset, submitAssignment, updateAssignment } from "../../../../features/assignment/assignmentSlice";

const SubmissionUpload = ({ assignments }) => {
	const dispatch = useDispatch();
	const { sessionId } = useParams();
	const [assignment, setAssignment] = useState({});
	const { message, isSuccess, isLoading, data } = useSelector((state) => state.assignment);

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
							Unggah tugas kamu di sini!
							<a href="#!" className="text-primary"> Pilih Tugas</a>
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
							<b>Note:</b> Pastikan berkas sudah sesuai dengan ketentuan tugas!
						</p>
					</div>
				</div>
				<button type="submit" className="btn btn-primary mt-4">
					{assignments?.students_work?.activity_detail ? <>
						{isLoading ? <>
							<span className="spinner-border spinner-border-sm"></span>&nbsp;
							Mengirim Tugas ...
						</> : <>
							Ubah Tugas
						</>}
					</> : <>
						{isLoading ? <>
							<span className="spinner-border spinner-border-sm"></span>&nbsp;
							Mengirim Tugas ...
						</> : <>
							Unggah Tugas
						</>}
					</>}
				</button>
			</form>
		</div>
	);
};

export default SubmissionUpload;
