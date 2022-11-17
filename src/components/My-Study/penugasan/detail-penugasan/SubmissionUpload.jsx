import React from "react";

const SubmissionUpload = ({ assignments, doSubmitAssignment, onChangeAssignment, isLoading, handleDelete }) => {
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

				<div className="text-left">
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
				</div>
			</form>
			{/* <button type="submit" className="btn  btn-danger mt-4 mx-2" onClick={() => handleDelete()}>
				Hapus Tugas
			</button> */}
		</div>
	);
};

export default SubmissionUpload;
