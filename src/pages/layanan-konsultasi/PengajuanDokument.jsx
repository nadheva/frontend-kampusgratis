import React from "react";

// Component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

const PengajuanDokument = () => {
	return (
		<>
			<Header />
			<main>
				<section className="py-5">
					<div className="container card shadow my-5 p-4">
						<div className="card-header p-0">
							<h4 className="mb-3">Pengajuan Dokument</h4>
						</div>
						<div className="card-body p-0 pt-3">
							<form className="row g-3">
								<div className="col-12">
									<div className="row g-xl-0 align-items-center">
										<div className="col-lg-4">
											<h6 className="mb-lg-0">
												Nama <span className="text-danger">*</span>
											</h6>
										</div>
										<div className="col-lg-8">
											<input
												type="text"
												className="form-control"
												id="nama"
												name="nama"
											/>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div className="row g-xl-0 align-items-center">
										<div className="col-lg-4">
											<h6 className="mb-lg-0">
												Nim<span className="text-danger">*</span>
											</h6>
										</div>
										<div className="col-lg-8">
											<input
												type="text"
												className="form-control"
												id="nim"
												name="nim"
											/>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div className="row g-xl-0 align-items-center">
										<div className="col-lg-4">
											<h6 className="mb-lg-0">
												Email <span className="text-danger">*</span>
											</h6>
										</div>
										<div className="col-lg-8">
											<input
												type="email"
												className="form-control"
												id="email"
												name="email"
											/>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div className="row g-xl-0 align-items-center">
										<div className="col-lg-4">
											<h6 className="mb-lg-0">
												Nomer Wa <span className="text-danger">*</span>
											</h6>
										</div>
										<div className="col-lg-8">
											<input
												type="tel"
												className="form-control"
												id="phone"
												name="phone"
											/>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div className="row g-xl-0 align-items-center">
										<div className="col-lg-4">
											<h6 className="mb-lg-0">
												Prioritas <span className="text-danger">*</span>
											</h6>
										</div>
										<div className="col-lg-8">
											<select className="form-select">
												<option value="">Choose...</option>
												<option value="darurat">Darurat</option>
												<option value="sedang">Sedang</option>
												<option value="biasa">Biasa</option>
											</select>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div className="row g-xl-0">
										<div className="col-lg-4">
											<h6 className="mb-lg-0">
												Pesan <span className="text-danger">*</span>
											</h6>
										</div>
										<div className="col-lg-8">
											<textarea
												className="form-control"
												rows="3"
												placeholder=""
												name="informasi_tambahan"
											></textarea>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div className="row g-xl-0 align-items-center">
										<div className="col-lg-4">
											<h6 className="mb-lg-0">
												Upload Dokument<span className="text-danger">*</span>
											</h6>
										</div>
										<div className="col-lg-8">
											<input
												type="file"
												className="form-control"
												id="resume"
												name="resume"
											/>
										</div>
									</div>
								</div>
								<div className="col-12 text-sm-end">
									<button className="btn btn-primary mb-0">
										Ajukan Dokumen
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default PengajuanDokument;
