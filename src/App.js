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
import Penugasan from "./pages/studiku/Penugasan";
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

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" exact element={<Main />} />

					<Route path="/administrasi" exact element={<PrivateRoute />}>
						<Route path="/administrasi" exact element={<Administration />} />
					</Route>

					<Route path="/profile" exact element={<PrivateRoute />}>
						<Route path="/profile" exact element={<Profile />} />
					</Route>

					<Route path="/kategori" exact element={<Categories />} />

					<Route path="/studi-ku" exact element={<PrivateRoute />}>
						<Route path="/studi-ku" element={<HomeStudiku />} />
					</Route>

					<Route path="/pertemuan" element={<PrivateRoute />}>
						<Route path="/pertemuan" element={<Pertemuan />} />
					</Route>

					<Route path="/modul" element={<PrivateRoute />}>
						<Route path="/modul" element={<Modul />} />
					</Route>

					<Route path="/detail-modul" element={<PrivateRoute />}>
						<Route path="/detail-modul" element={<DetailModul />} />
					</Route>

					<Route path="/vidio-player" element={<PrivateRoute />}>
						<Route path="/vidio-player" element={<VidioPlayer />} />
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

					<Route path="/penugasan" element={<PrivateRoute />}>
						<Route path="/penugasan" element={<Penugasan />} />
					</Route>

					<Route path="/ManageCourse" element={<PrivateRoute />}>
						<Route path="/ManageCourse" element={<ManageCourse />} />
					</Route>

					{/* Students */}
					<Route path="/dashboard" element={<PrivateRoute />}>
						<Route path="/dashboard" element={<StudentDashboard />} />
					</Route>
					<Route path="/mycourse" element={<PrivateRoute />}>
						<Route path="/mycourse" element={<MyCourse />} />
					</Route>
					<Route path="/settings" element={<PrivateRoute />}>
						<Route path="/settings" element={<Setting />} />
					</Route>

					<Route path="/artikel" element={<Artikel />} />
					<Route path="/artikel/:artikelId" element={<DetailArtikel />} />

					<Route path="/silabus/:majorId" element={<PrivateRoute />}>
						<Route path="/silabus/:majorId" element={<SilabusSubject />} />
					</Route>

					<Route path="/silabus" exact element={<PrivateRoute />}>
						<Route path="/silabus" exact element={<Silabus />} />
					</Route>

					<Route path="/*" element={<PageNotFound />} />
					<Route path="/401" element={<Unauthorized />} />
					<Route path="/403" element={<Forbidden />} />
					<Route path="/500" element={<ServerError />} />
					<Route path="/503" element={<ServiceUnavailable />} />

					<Route path="/login" exact element={<Login />} />
					<Route path="/register" exact element={<Register />} />
				</Routes>
			</Router>

			<ToastContainer />
		</>
	);
}

export default App;
