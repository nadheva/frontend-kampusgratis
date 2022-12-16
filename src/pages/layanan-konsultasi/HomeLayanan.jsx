import React from "react";

// Component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/layanan-konsultasi/home-layanan/Intro";
import CardList from "../../components/layanan-konsultasi/home-layanan/CardList";

const HomeLayanan = () => {
	return (
		<>
			<Header />
			<main>
				<Intro />
				<CardList />
				<section className="pt-0 pt-md-5 ">
					<div className="container">
						<div className="row g-4">
							<div className="col-lg-6 col-xl-5">
								<h2 className="fs-1">Pertanyaan yang Sering Diajukan</h2>
								<p className="mb-0">
									Di samping ini pertanyaan-pertanyaan yang sering diajukan
									kepada kami. Harap dibaca dengan baik-baik.
								</p>
							</div>
							<div className="col-lg-6 ms-xl-auto">
								<div
									className="accordion accordion-icon accordion-bg-light"
									id="accordionFaq"
								>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingOne">
											<button
												className="accordion-button h6 rounded"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												Apa itu Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											aria-labelledby="headingOne"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Kampus Gratis adalah sebuah sistem manajemen e-learning
												yang gratis, berkualitas, bisa diakses siapapun,
												kapanpun, dimanapun, dan selalu update.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingTwo">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												Berapakah biaya kuliah di Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											aria-labelledby="headingTwo"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Hampir seluruh program di kampus gratis bebas dari
												biaya, kecuali program yang melibatkan sertifikasi.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingThree">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												Bagaimana alur pendaftaran kuliah di Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											aria-labelledby="headingThree"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Sign up mobile app Kampus Gratis Setelah berhasil, sign
												in mobile app Kampus Gratis Isi data diri dan keluarga
												Submit berkas-berkas administrasi Verifikasi data-data
												dan berkas-berkas Menyetujui legal statement Kampus
												Gratis untuk pembuatan akun mobile app Kampus Gratis
												Registrasi berhasil
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingFour">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseFour"
											>
												Program studi apa saja yang ditawarkan oleh Kampus
												Gratis?
											</button>
										</h2>
										<div
											id="collapseFour"
											className="accordion-collapse collapse"
											aria-labelledby="headingFour"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Program studi manajemen kredit dan pembiayaan bagi UMKM
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingFive">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFive"
												aria-expanded="false"
												aria-controls="collapseFive"
											>
												Bolehkah mahasiswa yang kampusnya di bawah naungan
												Kementerian di luar Kemendikbud Ristek mendaftar kuliah
												di Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseFive"
											className="accordion-collapse collapse"
											aria-labelledby="headingFive"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												Boleh, selama pihak kampus asal mahasiswa mengakui
												kredit transfer yang didapatkan mahasiswa pada program
												kampus gratis, maka mahasiswa diperbolehkan mengikut
												program-program pada platform kampus gratis
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingSix">
											<button
												className="accordion-button h6 rounded collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseSix"
												aria-expanded="false"
												aria-controls="collapseSix"
											>
												Jika ada kampus yang belum bermitra tetapi ingin ikut
												program Kampus Gratis?
											</button>
										</h2>
										<div
											id="collapseSix"
											className="accordion-collapse collapse"
											aria-labelledby="headingSix"
											data-bs-parent="#accordionFaq"
										>
											<div className="accordion-body">
												perwakilan kampus dapat mendaftar sebagai mitra kampus
												gratis melalui form yang tersedia di laman “mitra” pada
												web dan aplikasi kampus gratis. Calon mitra juga
												menghubungi tim Kampus gratis melalui email atau telepon
												staf admin 085855407510 untuk membuat jadwal permintaan
												presentasi mengenai program kampus gratis oleh tim
												kampus gratis.
											</div>
										</div>
									</div>
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

export default HomeLayanan;
