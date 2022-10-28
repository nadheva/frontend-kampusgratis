import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./config/firebase";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";

import Main from "./pages/landing-page/Main";
// Students
import StudentDashboard from "./pages/student/StudentDashboard";
import MyCourse from "./pages/student/MyCourse";
// import Dashboard from "./pages/Dashboard";
import Categories from "./pages/landing-page/Categories";

import MyStudy from "./pages/my-study/Main";
import Silabus from "./pages/syllabus/Main";

import PageNotFound from "./components/default/PageNotFound";
import Administration from "./pages/Administration";
import SilabusSubject from "./pages/syllabus/ListSubject";

import ScrollToTop from "./components/default/ScrollToTop";
import Subject from "./pages/my-study/Subject";
import ModuleList from "./pages/my-study/ModuleList";
import ModuleDetail from "./pages/my-study/ModuleDetail";
import VideoDetail from "./pages/my-study/VideoDetail";
import DocumentDetail from "./pages/my-study/DocumentDetail";
import Forum from "./pages/my-study/ForumBase";
import ForumDiscussion from "./pages/my-study/ForumDiscussion";
import QuizStart from "./pages/my-study/QuizStart";
import QuizDetail from "./pages/my-study/QuizDetail";
import Setting from "./pages/Setting";

// Artikel
import Artikel from "./pages/artikel/Artikel";
import DetailArtikel from "./pages/artikel/DetailArtikel";

import Calendar from "./pages/kalender/Calendar";

// Acara kampus
import AcaraKampus from "./pages/acara-kampus/AcaraKampus";
import AcaraKampusDetail from "./pages/acara-kampus/AcaraKampusDetail";

// Nilai & sertifikat
import Nilai from "./pages/nilai-sertifikat/Nilai";
import Sertifikat from "./pages/nilai-sertifikat/Sertifikat";

// Penyaluran kerja
import PenyaluranKerja from "./pages/penyaluran-kerja/PenyaluranKerja";
import DetailPenyaluranKerja from "./pages/penyaluran-kerja/DetailPenyaluranKerja";
import FormPenyaluranKerja from "./pages/penyaluran-kerja/FormPenyaluranKerja";

// Analitik
import Analitik from "./pages/analitik/Analitik";
import AnalitikDetail from "./pages/analitik/AnalitikDetail";

// Konsultasi & Layanan
import HomeLayanan from "./pages/layanan-konsultasi/HomeLayanan";
import BookingKonsultasi from "./pages/layanan-konsultasi/BookingKonsultasi";
import BookingKonsultasiForm from "./pages/layanan-konsultasi/BookingKonsultasiForm";
import PengajuanDokument from "./pages/layanan-konsultasi/PengajuanDokument";
import StatusDokument from "./pages/layanan-konsultasi/StatusDokument";
import ChatKonsultasi from "./pages/layanan-konsultasi/ChatKonsultasi";
import StatusBooking from "./pages/layanan-konsultasi/StatusBooking";
import PilihDokument from "./pages/layanan-konsultasi/PilihDokument";
import ViewSertifikat from "./pages/nilai-sertifikat/ViewSertifikat";

// https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
// https://codesandbox.io/s/dreamy-gauss-w47hm?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark

function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path="/" exact element={<Main />} />

						<Route path="/kategori" exact element={<Categories />} />

						{/* START : STUDENTS */}
						<Route path="/dashboard" element={<PrivateRoute />}>
							<Route path="/dashboard" element={<StudentDashboard />} />
						</Route>
						<Route path="/mycourse" element={<PrivateRoute />}>
							<Route path="/mycourse" element={<MyCourse />} />
						</Route>
						<Route path="/settings" element={<PrivateRoute />}>
							<Route path="/settings" element={<Setting />} />
						</Route>
						{/* END : STUDENTS */}

						<Route
							path="/administrasi"
							exact
							element={
								<>
									<PrivateRoute redirect />
								</>
							}
						>
							<Route path="/administrasi" exact element={<Administration />} />
						</Route>

						<Route
							path="/profil"
							exact
							element={
								<>
									<PrivateRoute redirect />
								</>
							}
						>
							<Route path="/profil" exact element={<Profile />} />
						</Route>

						<Route path="/login" exact element={<Login />} />
						<Route path="/register" exact element={<Register />} />

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/modul"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/modul"
								exact
								element={<ModuleList />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/modul/:moduleId"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/modul/:moduleId"
								exact
								element={<ModuleDetail />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/modul/:moduleId/vidio/:videoId"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/modul/:moduleId/vidio/:videoId"
								exact
								element={<VideoDetail />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/modul/:moduleId/dokumen/:documentId"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/modul/:moduleId/dokumen/:documentId"
								exact
								element={<DocumentDetail />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/forum"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/forum"
								exact
								element={<Forum />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/forum/:discussionId"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/forum/:discussionId"
								exact
								element={<ForumDiscussion />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/quiz"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/quiz"
								exact
								element={<QuizDetail />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route path="/studi-ku/:subjectId" exact element={<Subject />} />
						</Route>

						<Route path="/studi-ku" exact element={<PrivateRoute redirect />}>
							<Route path="/studi-ku" exact element={<MyStudy />} />
						</Route>

						<Route path="/silabus/:majorId" element={<PrivateRoute redirect />}>
							<Route path="/silabus/:majorId" element={<SilabusSubject />} />
						</Route>

						<Route path="/silabus" exact element={<PrivateRoute redirect />}>
							<Route path="/silabus" exact element={<Silabus />} />
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/quiz"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/quiz"
								exact
								element={<QuizStart />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/quiz/:materialId"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/quiz/:materialId"
								exact
								element={<QuizDetail />}
							/>
						</Route>

						{/* START : SEKILAS ILMU/ARTIKEL */}
						<Route path="/artikel" element={<Artikel />} />
						<Route path="/artikel/:artikelId" element={<DetailArtikel />} />
						{/* END : SEKILAS ILMU/ARTIKEL */}

						{/* START : KALENDER */}
						<Route path="/calender" exact element={<PrivateRoute />}>
							<Route path="/calender" exact element={<Calendar />} />
						</Route>
						{/* END : KALENDER */}

						{/* START : Acara Kampus */}
						<Route path="/acara-kampus" element={<PrivateRoute />}>
							<Route path="/acara-kampus" element={<AcaraKampus />} />
						</Route>
						<Route path="/acara-kampus/:id" element={<PrivateRoute />}>
							<Route path="/acara-kampus/:id" element={<AcaraKampusDetail />} />
						</Route>
						{/* END : Acara Kampus */}

						{/* START : NILAI & SERTIFIKAT */}
						<Route path="/nilai" element={<PrivateRoute />}>
							<Route path="/nilai" element={<Nilai />} />
						</Route>
						<Route path="/certificates" element={<PrivateRoute />}>
							<Route path="/certificates" element={<Sertifikat />} />
						</Route>
						<Route path="/certificates/:id" element={<PrivateRoute />}>
							<Route path="/certificates/:id" element={<ViewSertifikat />} />
						</Route>
						{/* END : NILAI & SERTIFIKAT */}

						{/* START : Penyaluran Kerja */}
						<Route path="/penyaluran-kerja" element={<PrivateRoute />}>
							<Route path="/penyaluran-kerja" element={<PenyaluranKerja />} />
						</Route>

						<Route path="/detail-penyaluran-kerja" element={<PrivateRoute />}>
							<Route
								path="/detail-penyaluran-kerja"
								element={<DetailPenyaluranKerja />}
							/>
						</Route>

						<Route path="/form-penyaluran-kerja" element={<PrivateRoute />}>
							<Route
								path="/form-penyaluran-kerja"
								element={<FormPenyaluranKerja />}
							/>
						</Route>
						{/* END : Penyaluran Kerja */}

						{/* START : Analitik */}
						<Route path="/analitik" element={<PrivateRoute />}>
							<Route path="/analitik" element={<Analitik />} />
						</Route>
						<Route path="/analitik-detail" element={<PrivateRoute />}>
							<Route path="/analitik-detail" element={<AnalitikDetail />} />
						</Route>
						{/* END : Analitik*/}

						{/* START : Konsultasi & Layanan */}
						<Route path="/layanan-konsultasi" element={<PrivateRoute />}>
							<Route path="/layanan-konsultasi" element={<HomeLayanan />} />
						</Route>
						<Route path="/pengajuan-dokument" element={<PrivateRoute />}>
							<Route
								path="/pengajuan-dokument"
								element={<PengajuanDokument />}
							/>
						</Route>
						<Route path="/status-dokument" element={<PrivateRoute />}>
							<Route path="/status-dokument" element={<StatusDokument />} />
						</Route>
						<Route path="/chat-konsultasi" element={<PrivateRoute />}>
							<Route path="/chat-konsultasi" element={<ChatKonsultasi />} />
						</Route>
						<Route path="/pilih-dokument" element={<PrivateRoute />}>
							<Route path="/pilih-dokument" element={<PilihDokument />} />
						</Route>

						<Route path="/booking-konsultasi" element={<PrivateRoute />}>
							<Route
								path="/booking-konsultasi"
								element={<BookingKonsultasi />}
							/>
						</Route>
						<Route path="/form-booking-konsultasi" element={<PrivateRoute />}>
							<Route
								path="/form-booking-konsultasi"
								element={<BookingKonsultasiForm />}
							/>
						</Route>
						<Route path="/status-booking" element={<PrivateRoute />}>
							<Route path="/status-booking" element={<StatusBooking />} />
						</Route>
						{/* END : Konsultasi & Layanan*/}

						<Route path="/*" element={<PageNotFound />} />
					</Routes>
				</ScrollToTop>
			</Router>

			<ToastContainer />
		</>
	);
}

export default App;
