import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./config/firebase";
import PrivateRoute from "./components/PrivateRoute";

import Profile from "./pages/Profile";

import Main from "./pages/landing-page/Main";
// Students
import StudentDashboard from "./pages/student/StudentDashboard";
import MyCourse from "./pages/student/MyCourse";
// import Dashboard from "./pages/Dashboard";
import Categories from "./pages/landing-page/Categories";

import MyStudy from "./pages/my-study/Main";

import PageNotFound from "./components/default/PageNotFound";
import Administration from "./pages/Administration";

// import SilabusSubject from "./pages/syllabus/ListSubject";
import SubjectsList from "./pages/syllabus/SubjectsList";
import Silabus from "./pages/syllabus/Main";

import ScrollToTop from "./components/default/ScrollToTop";
import ModuleList from "./pages/my-study/ModuleList";
import ModuleDetail from "./pages/my-study/ModuleDetail";
import VideoDetail from "./pages/my-study/VideoDetail";
import DocumentDetail from "./pages/my-study/DocumentDetail";
import Forum from "./pages/my-study/ForumBase";
import ForumDiscussion from "./pages/my-study/ForumDiscussion";
import QuizStart from "./pages/my-study/QuizStart";
// import QuizDetail from "./pages/my-study/QuizDetail";
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
import PengajuanDokument from "./pages/layanan-konsultasi/PengajuanDokument";
import StatusDokument from "./pages/layanan-konsultasi/StatusDokument";
import ChatKonsultasi from "./pages/layanan-konsultasi/ChatKonsultasi";
import PilihDokument from "./pages/layanan-konsultasi/PilihDokument";
import ViewSertifikat from "./pages/nilai-sertifikat/ViewSertifikat";
import DetailPenugasan from "./pages/my-study/penugasan/DetailPenugasan";
// import Unauthorized from "./pages/error/401";
// import Forbidden from "./pages/error/403";
// import ServerError from "./pages/error/500";
// import ServiceUnavailable from "./pages/error/503";
import Detail from "./pages/my-study/quiz/Detail";
import Penugasan from "./pages/my-study/penugasan/Penugasan";
import Session from "./pages/my-study/Session";
import { Notifikasi } from "./pages/notifikasi/Notifikasi";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Panduan from "./pages/panduan/Panduan";
import VidioPanduan from "./pages/panduan/VidioPanduan";
import VidioDetail from "./pages/panduan/VidioDetail";
import KamusKG from "./pages/panduan/KamusKG";
import KamusKgDetail from "./pages/panduan/KamusAplikasi";
import PendidikanS1 from "./pages/landing-page/programkami/PendidikanS1";
import Pelatihan from "./pages/landing-page/programkami/Pelatihan";
import Magang from "./pages/landing-page/programkami/Magang";
import Projek from "./pages/landing-page/programkami/Projek";

import Leaderboard from "./pages/leaderboard/Single";
import BukuPanduan from "./pages/panduan/BukuPanduan";
import BukuPanduanDetial from "./pages/panduan/BukuPanduanDetial";
import Glosarium from "./pages/panduan/Glosarium";
import KamusAplikasiDetail from "./pages/panduan/KamusAplikasiDetail";
import GlosariumDetail from "./pages/panduan/GlosariumDetail";
import ListPekerjaan from "./pages/penyaluran-kerja/ListPekerjaan";
import Konsultasi from "./pages/layanan-konsultasi/Konsultasi";
import Index from "./pages/perencanaan-karir/Index";
import HasilAnalisa from "./pages/perencanaan-karir/HasilAnalisa";
import Modul from "./pages/perencanaan-karir/Modul";

import DiscussionGlobal from "./pages/Discussion-Global/Main";
import DiscussionGlobalDetail from "./pages/Discussion-Global/Detail";
import CreateDiscussion from "./pages/Discussion-Global/Create";

import DrillSimulationAssessment from "./pages/drill-simulation-assessment/Main";
import Team from "./pages/Team";
// https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
// https://codesandbox.io/s/dreamy-gauss-w47hm?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark

function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path="/" exact element={<Main />} />
						<Route path="/team" exact element={<Team />} />
						<Route path="/pendidikanS1" exact element={<PendidikanS1 />} />
						<Route path="/pelatihan" exact element={<Pelatihan />} />
						<Route path="/magang" exact element={<Magang />} />
						<Route path="/projek" exact element={<Projek />} />

						<Route path="kategori" exact element={<Categories />} />

						<Route path="/dashboard" element={<PrivateRoute redirect />}>
							<Route path="/dashboard" element={<StudentDashboard />} />
						</Route>
						<Route path="/mycourse" element={<PrivateRoute redirect />}>
							<Route path="/mycourse" element={<MyCourse />} />
						</Route>
						<Route path="/settings" element={<PrivateRoute redirect />}>
							<Route path="/settings" element={<Setting />} />
						</Route>

						<Route path="/notifikasi" element={<PrivateRoute redirect />}>
							<Route path="/notifikasi" element={<Notifikasi />} />
						</Route>

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

						<Route path="login" exact element={<Signin />} />
						<Route path="/register" exact element={<Signup />} />
						<Route path="/forgot-password" exact element={<ForgotPassword />} />

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

						<Route path="/studi-ku/:subjectId" exact element={<PrivateRoute />}>
							<Route path="/studi-ku/:subjectId" exact element={<Session />} />
						</Route>

						<Route path="/studi-ku" exact element={<PrivateRoute redirect />}>
							<Route path="/studi-ku" exact element={<MyStudy />} />
						</Route>

						<Route path="/silabus/:majorId" element={<PrivateRoute redirect />}>
							<Route path="/silabus/:majorId" element={<SubjectsList />} />
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
								element={<Detail />}
							/>
						</Route>

						<Route
							path="/studi-ku/:subjectId/pertemuan/:sessionId/penugasan"
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/studi-ku/:subjectId/pertemuan/:sessionId/penugasan"
								element={<DetailPenugasan />}
							/>
						</Route>

						<Route path="/penugasan" exact element={<PrivateRoute redirect />}>
							<Route path="/penugasan" exact element={<Penugasan />} />
						</Route>

						<Route
							path="/diskusi-global"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/diskusi-global"
								exact
								element={<DiscussionGlobal />}
							/>
						</Route>

						<Route
							path="/diskusi-global/buat-diskusi"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/diskusi-global/buat-diskusi"
								exact
								element={<CreateDiscussion />}
							/>
						</Route>

						<Route
							path="/diskusi-global/diskusi/:discussionId"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/diskusi-global/diskusi/:discussionId"
								exact
								element={<DiscussionGlobalDetail />}
							/>
						</Route>

						{/* START : SEKILAS ILMU/ARTIKEL */}
						<Route path="/artikel" element={<Artikel />} />
						<Route path="/artikel/:artikelId" element={<DetailArtikel />} />
						{/* END : SEKILAS ILMU/ARTIKEL */}

						{/* START : */}
						<Route path="/panduan" element={<Panduan />} />
						<Route
							path="/panduan/buku-panduan"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route path="/panduan/buku-panduan" element={<BukuPanduan />} />
						</Route>
						<Route
							path="/panduan/buku-panduan/:id"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/panduan/buku-panduan/:id"
								element={<BukuPanduanDetial />}
							/>
						</Route>
						<Route
							path="/panduan/vidio-panduan"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route path="/panduan/vidio-panduan" element={<VidioPanduan />} />
						</Route>
						<Route
							path="/panduan/vidio-panduan/:id"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/panduan/vidio-panduan/:id"
								element={<VidioDetail />}
							/>
						</Route>
						<Route path="/panduan/kamus-KG" element={<KamusKG />} />

						<Route
							path="/panduan/kamus-KG/kamus-aplikasi"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/panduan/kamus-KG/kamus-aplikasi"
								element={<KamusKgDetail />}
							/>
						</Route>
						<Route
							path="/panduan/kamus-KG/kamus-aplikasi/:id"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/panduan/kamus-KG/kamus-aplikasi/:id"
								element={<KamusAplikasiDetail />}
							/>
						</Route>
						<Route
							path="/panduan/kamus-KG/glosarium"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/panduan/kamus-KG/glosarium"
								element={<Glosarium />}
							/>
						</Route>
						<Route
							path="/panduan/kamus-KG/glosarium/:id"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/panduan/kamus-KG/glosarium/:id"
								element={<GlosariumDetail />}
							/>
						</Route>
						{/* END : */}

						<Route
							path="/simulasi-drill-assessment"
							exact
							element={<PrivateRoute redirect />}
						>
							<Route
								path="/simulasi-drill-assessment"
								element={<DrillSimulationAssessment />}
							/>
						</Route>

						{/* START : KALENDER */}
						<Route path="/kalender" exact element={<PrivateRoute />}>
							<Route path="/kalender" exact element={<Calendar />} />
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

						<Route path="/papan-skor" element={<PrivateRoute />}>
							<Route path="/papan-skor" element={<Leaderboard />} />
						</Route>

						{/* START : NILAI & SERTIFIKAT */}
						<Route path="/nilai" exact element={<PrivateRoute redirect />}>
							<Route path="/nilai" exact element={<Nilai redirect />} />
						</Route>
						<Route path="/certificates" element={<PrivateRoute redirect />}>
							<Route path="/certificates" element={<Sertifikat redirect />} />
						</Route>
						<Route
							path="/certificates/:id"
							element={<ViewSertifikat redirect />}
						/>
						{/* END : NILAI & SERTIFIKAT */}

						{/* START : Penyaluran Kerja */}
						<Route path="/penyaluran-kerja" element={<PrivateRoute />}>
							<Route path="/penyaluran-kerja" element={<ListPekerjaan />} />
						</Route>
						<Route
							path="/penyaluran-kerja/pilih-pekerjaan/:type"
							exact
							element={<PrivateRoute />}
						>
							<Route
								path="/penyaluran-kerja/pilih-pekerjaan/:type"
								exact
								element={<PenyaluranKerja />}
							/>
						</Route>
						<Route
							path="/penyaluran-kerja/pilih-pekerjaan/:type/:id"
							element={<PrivateRoute />}
						>
							<Route
								path="/penyaluran-kerja/pilih-pekerjaan/:type/:id"
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
						<Route
							path="/layanan-konsultasi/konsultasi"
							element={<PrivateRoute />}
						>
							<Route
								path="/layanan-konsultasi/konsultasi"
								element={<Konsultasi />}
							/>
						</Route>
						<Route
							path="/layanan-konsultasi/konsultasi/chat-konsultasi"
							element={<PrivateRoute />}
						>
							<Route
								path="/layanan-konsultasi/konsultasi/chat-konsultasi"
								element={<ChatKonsultasi />}
							/>
						</Route>
						<Route
							path="/layanan-konsultasi/dokumen"
							element={<PrivateRoute />}
						>
							<Route
								path="/layanan-konsultasi/dokumen"
								element={<PilihDokument />}
							/>
						</Route>
						<Route
							path="/layanan-konsultasi/proses-dokumen"
							element={<PrivateRoute />}
						>
							<Route
								path="/layanan-konsultasi/proses-dokumen"
								element={<PengajuanDokument />}
							/>
						</Route>
						<Route
							path="/layanan-konsultasi/status-dokumen"
							element={<PrivateRoute />}
						>
							<Route
								path="/layanan-konsultasi/status-dokumen"
								element={<StatusDokument />}
							/>
						</Route>
						{/* END : Konsultasi & Layanan*/}

						{/* START : Perencanaan Karir */}
						<Route path="/perencanaan-karir" element={<PrivateRoute />}>
							<Route path="/perencanaan-karir" element={<Index />} />
						</Route>
						<Route
							path="/perencanaan-karir/hasil-analisa"
							element={<PrivateRoute />}
						>
							<Route
								path="/perencanaan-karir/hasil-analisa"
								element={<HasilAnalisa />}
							/>
						</Route>
						<Route
							path="/perencanaan-karir/hasil-analisa/modul-karir"
							element={<PrivateRoute />}
						>
							<Route
								path="/perencanaan-karir/hasil-analisa/modul-karir"
								element={<Modul />}
							/>
						</Route>
						{/* END : Perencanaan Karir*/}

						{/* START : ERROR PAGE */}
						<Route path="*" element={<PageNotFound />} />
						{/* <Route path="/401" element={<Unauthorized />} />
						<Route path="/403" element={<Forbidden />} />
						<Route path="/500" element={<ServerError />} />
						<Route path="/503" element={<ServiceUnavailable />} /> */}
						{/* END : ERROR PAGE */}

						{/* START : */}

						{/* END : */}
					</Routes>
				</ScrollToTop>
			</Router>

			<ToastContainer />
		</>
	);
}

export default App;
