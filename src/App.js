import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./config/firebase";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";

import Main from "./pages/landing-page/Main";
import Dashboard from "./pages/Dashboard";
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
import QuizDetail from "./pages/my-study/QuizDetail";

// Artikel
import Artikel from "./pages/artikel/Artikel";
import DetailArtikel from "./pages/artikel/DetailArtikel";

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

						<Route path="/dashboard" exact element={<PrivateRoute redirect />}>
							<Route path="/dashboard" exact element={<Dashboard />} />
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

						{/* START : SEKILAS ILMU/ARTIKEL */}
						<Route path="/artikel" element={<Artikel />} />
						<Route path="/artikel/:artikelId" element={<DetailArtikel />} />
						{/* END : SEKILAS ILMU/ARTIKEL */}

						<Route path="/*" element={<PageNotFound />} />
					</Routes>
				</ScrollToTop>
			</Router>

			<ToastContainer />
		</>
	);
}

export default App;
