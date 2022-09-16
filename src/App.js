import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import firebase from './config/firebase';
import PrivateRoute from './components/PrivateRoute';

import Header from './pages/default/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';
import Main from './pages/landing-page/Main';

import PageNotFound from "./pages/error/404";
import Unauthorized from "./pages/error/401";
import Forbidden from "./pages/error/403";
import ServerError from "./pages/error/500";
import ServiceUnavailable from "./pages/error/503";
import Home from "./pages/studiku/Home";
import HomeStudiku from "./pages/studiku/HomeStudiku";

import VidioPlayer from "./pages/studiku/VidioPlayer";
import Quiz from "./pages/studiku/Quiz";
import Pertemuan from "./pages/studiku/Pertemuan";
import ForumDiskusi from "./pages/studiku/ForumDiskusi";
import MulaiQuiz from "./pages/studiku/MulaiQuiz";
import Penugasan from "./pages/studiku/Penugasan";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='/dashboard' element={<>Hello</>} />
          </Route>

          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route path="/home" element={<PrivateRoute />}>
            <Route
              path="/home"
              element={
                <>
                  <Home />
                </>
              }
            />
          </Route>

          <Route path="/studiku" element={<PrivateRoute />}>
            <Route
              path="/studiku"
              element={
                <>
                  <HomeStudiku />
                </>
              }
            />
          </Route>

          <Route path="/pertemuan" element={<PrivateRoute />}>
            <Route
              path="/pertemuan"
              element={
                <>
                  <Pertemuan />
                </>
              }
            />
          </Route>

          <Route path="/vidio-player" element={<PrivateRoute />}>
            <Route
              path="/vidio-player"
              element={
                <>
                  <VidioPlayer />
                </>
              }
            />
          </Route>

          <Route path="/quiz" element={<PrivateRoute />}>
            <Route
              path="/quiz"
              element={
                <>
                  <Quiz />
                </>
              }
            />
          </Route>

          <Route path="/forum-diskusi" element={<PrivateRoute />}>
            <Route
              path="/forum-diskusi"
              element={
                <>
                  <ForumDiskusi />
                </>
              }
            />
          </Route>

          <Route path="/mulai-quiz" element={<PrivateRoute />}>
            <Route
              path="/mulai-quiz"
              element={
                <>
                  <MulaiQuiz />
                </>
              }
            />
          </Route>

          <Route path="/penugasan" element={<PrivateRoute />}>
            <Route
              path="/penugasan"
              element={
                <>
                  <Penugasan />
                </>
              }
            />
          </Route>

          <Route path="/*" element={<PageNotFound />} />
          <Route path="/401" element={<Unauthorized />} />
          <Route path="/403" element={<Forbidden />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="/503" element={<ServiceUnavailable />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
