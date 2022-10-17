import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";
import "./config/firebase";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";
import Main from "./pages/landing-page/Main";
import Setting from "./pages/Setting";

import PageNotFound from "./pages/error/404";
import Unauthorized from "./pages/error/401";
import Forbidden from "./pages/error/403";
import ServerError from "./pages/error/500";
import ServiceUnavailable from "./pages/error/503";
import HomeStudiku from "./pages/studiku/HomeStudiku";

import VidioPlayer from "./pages/studiku/VidioPlayer";
import Quiz from "./pages/studiku/Quiz";
import Pertemuan from "./pages/studiku/Pertemuan";
import ForumDiskusi from "./pages/studiku/ForumDiskusi";
import IsiForum from "./pages/studiku/IsiForum";
// import MulaiQuiz from "./pages/studiku/MulaiQuiz";
import StartQuiz from "./pages/studiku/StartQuiz";
import Penugasan from "./pages/studiku/Assignment";
import ManageCourse from "./pages/instructor/ManageCourse";
import Categories from "./pages/landing-page/Categories";
import Administration from "./pages/Administration";
import Modul from "./pages/studiku/Modul";
import DetailModul from "./pages/studiku/DetailModul";
// import Dashboard from "./pages/Dashboard";

// Artikel
import Artikel from "./pages/artikel/Artikel";
import DetailArtikel from "./pages/artikel/DetailArtikel";

// Students
import StudentDashboard from "./pages/student/StudentDashboard";
import MyCourse from "./pages/student/MyCourse";

// Silabus
import Silabus from "./pages/syllabus/Main";
import SilabusSubject from "./pages/syllabus/ListSubject";

import Calendar from "./pages/kalender/Calendar";

import ScrollToTop from "./pages/default/ScrollToTop";

import ViewPDF from "./pages/studiku/ViewPDF";

// Nilai & sertifikat
import Nilai from "./pages/nilai-sertifikat/Nilai";
import Sertifikat from "./pages/nilai-sertifikat/Sertifikat";

function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						{/* START : AUTH */}
						<Route path="/login" exact element={<Login />} />
						<Route path="/register" exact element={<Register />} />
						{/* END : AUTH */}

						<Route path="/" exact element={<Main />} />

						<Route path="/administrasi" exact element={<PrivateRoute />}>
							<Route path="/administrasi" exact element={<Administration />} />
						</Route>

						<Route path="/kategori" exact element={<Categories />} />

						{/* START : STUDIKU */}
						<Route path="/studi-ku" exact element={<PrivateRoute />}>
							<Route path="/studi-ku" element={<HomeStudiku />} />
						</Route>

						<Route path="/studi-ku/pertemuan/:subjectId" element={<PrivateRoute />}>
							<Route path="/studi-ku/pertemuan/:subjectId" element={<Pertemuan />} />
						</Route>

						<Route path="/studi-ku/pertemuan/modul/:sessionId" element={<PrivateRoute />}>
							<Route path="/studi-ku/pertemuan/modul/:sessionId" element={<Modul />} />
						</Route>

						<Route path="/studi-ku/pertemuan/modul/detail-modul/:moduleId" element={<PrivateRoute />}>
							<Route path="/studi-ku/pertemuan/modul/detail-modul/:moduleId" element={<DetailModul />} />
						</Route>

						<Route path="/studi-ku/pertemuan/modul/detail-modul/vidio-player/:videoId/:moduleId" element={<PrivateRoute />}>
							<Route path="/studi-ku/pertemuan/modul/detail-modul/vidio-player/:videoId/:moduleId" element={<VidioPlayer />} />
						</Route>

						<Route path="/studi-ku/pertemuan/modul/detail-modul/view-pdf/:dokumenId" exact element={<PrivateRoute />}>
							<Route path="/studi-ku/pertemuan/modul/detail-modul/view-pdf/:dokumenId" element={<ViewPDF />} />
						</Route>

						<Route path="/quiz" element={<PrivateRoute />}>
							<Route path="/quiz" element={<Quiz />} />
						</Route>

						<Route path="/start-quiz" element={<PrivateRoute />}>
							<Route path="/start-quiz" element={<StartQuiz />} />
						</Route>

						<Route path="/forum-diskusi" element={<PrivateRoute />}>
							<Route path="/forum-diskusi" element={<ForumDiskusi />} />
						</Route>

						<Route path="/isi-forum-diskusi" element={<PrivateRoute />}>
							<Route path="/isi-forum-diskusi" element={<IsiForum />} />
						</Route>

						<Route path="/studi-ku/pertemuan/penugasan/:sessionId" element={<PrivateRoute />}>
							<Route path="/studi-ku/pertemuan/penugasan/:sessionId" element={<Penugasan />} />
						</Route>

						{/* END : STUDIKU */}


						{/* START : SEKILAS ILMU/ARTIKEL */}
						<Route path="/artikel" element={<Artikel />} />
						<Route path="/artikel/:artikelId" element={<DetailArtikel />} />
						{/* END : SEKILAS ILMU/ARTIKEL */}


						{/* START : SILABUS */}
						<Route path="/silabus/:majorId" element={<PrivateRoute />}>
							<Route path="/silabus/:majorId" element={<SilabusSubject />} />
						</Route>
						<Route path="/silabus" exact element={<PrivateRoute />}>
							<Route path="/silabus" exact element={<Silabus />} />
						</Route>
						{/* END : SILABUS */}


						{/* START : KALENDER */}
						<Route path="/calender" exact element={<PrivateRoute />}>
							<Route path="/calender" exact element={<Calendar />} />
						</Route>
						{/* END : KALENDER */}


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


						<Route path="/profile" exact element={<PrivateRoute />}>
							<Route path="/profile" exact element={<Profile />} />
						</Route>

						<Route path="/ManageCourse" element={<PrivateRoute />}>
							<Route path="/ManageCourse" element={<ManageCourse />} />
						</Route>

						{/* START : NILAI & SERTIFIKAT */}
						<Route path="/nilai" element={<PrivateRoute />}>
							<Route path="/nilai" element={<Nilai />} />
						</Route>
						<Route path="/sertifikat" element={<PrivateRoute />}>
							<Route path="/sertifikat" element={<Sertifikat />} />
						</Route>
						{/* END : NILAI & SERTIFIKAT */}

						{/* START : ERROR PAGE */}
						<Route path="/*" element={<PageNotFound />} />
						<Route path="/401" element={<Unauthorized />} />
						<Route path="/403" element={<Forbidden />} />
						<Route path="/500" element={<ServerError />} />
						<Route path="/503" element={<ServiceUnavailable />} />
						{/* END : ERROR PAGE */}


					</Routes>
				</ScrollToTop>
			</Router>

			<ToastContainer />
		</>
	);
}

export default App;
