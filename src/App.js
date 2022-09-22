import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";
import firebase from "./config/firebase";

import Header from "./pages/default/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";
import Main from "./pages/landing-page/Main";

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
import MulaiQuiz from "./pages/studiku/MulaiQuiz";
import StartQuiz from "./pages/studiku/StartQuiz";
import Penugasan from "./pages/studiku/Penugasan";
import ManageCourse from "./pages/instructor/ManageCourse";
import Footer from "./pages/default/Footer";
import Categories from "./pages/landing-page/Categories";
import Administration from "./pages/Administration";
// import Dashboard from "./pages/Dashboard";

// Students
import StudentDashboard from "./pages/student/StudentDashboard";
import MyCourse from "./pages/student/MyCourse";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />

          <Route path='/administrasi' exact element={<><PrivateRoute /></>}>
            <Route path='/administrasi' element={<>
              <Header />
              <Administration />
              <Footer />
            </>} />
          </Route>

          <Route path="/profile" element={<PrivateRoute />}>
            <Route
              path="/profile"
              element={
                <>
                  <Header />
                  <Profile />
                  <Footer />
                </>
              }
            />
          </Route>

          <Route
            path="/kategori"
            exact
            element={
              <>
                <Header />
                <Categories />
                <Footer />
              </>
            }
          />

          <Route
            path="/studi-ku"
            element={
              <>
                <Header />
                <HomeStudiku />
                <Footer />
              </>
            }
          />

          <Route path="/pertemuan" element={<PrivateRoute />}>
            <Route
              path="/pertemuan"
              element={
                <>
                  <Header />
                  <Pertemuan />
                  <Footer />
                </>
              }
            />
          </Route>

          <Route path="/vidio-player" element={<PrivateRoute />}>
            <Route
              path="/vidio-player"
              element={
                <>
                  <Header />
                  <VidioPlayer />
                  <Footer />
                </>
              }
            />
          </Route>

          <Route path="/quiz" element={<PrivateRoute />}>
            <Route
              path="/quiz"
              element={
                <>
                  <Header />
                  <Quiz />
                  <Footer />
                </>
              }
            />
          </Route>

          <Route path="/start-quiz" element={<PrivateRoute />}>
            <Route
              path="/start-quiz"
              element={
                <>
                  <StartQuiz />
                </>
              }
            />
          </Route>

          <Route path="/forum-diskusi" element={<PrivateRoute />}>
            <Route
              path="/forum-diskusi"
              element={
                <>
                  <Header />
                  <ForumDiskusi />
                  <Footer />
                </>
              }
            />
          </Route>

          <Route path="/penugasan" element={<PrivateRoute />}>
            <Route
              path="/penugasan"
              element={
                <>
                  <Header />
                  <Penugasan />
                  <Footer />
                </>
              }
            />
          </Route>

          <Route path="/ManageCourse" element={<PrivateRoute />}>
            <Route
              path="/ManageCourse"
              element={
                <>
                  <Header />
                  <ManageCourse />
                  <Footer />
                </>
              }
            />
          </Route>

          {/* Students */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route
              path="/dashboard"
              element={
                <>
                  <Header />
                  <StudentDashboard />
                  <Footer />
                </>
              }
            />
          </Route>
          <Route path="/mycourse" element={<PrivateRoute />}>
            <Route
              path="/mycourse"
              element={
                <>
                  <Header />
                  <MyCourse />
                  <Footer />
                </>
              }
            />
          </Route>

          <Route path="/*" element={<PageNotFound />} />
          <Route path="/401" element={<Unauthorized />} />
          <Route path="/403" element={<Forbidden />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="/503" element={<ServiceUnavailable />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
