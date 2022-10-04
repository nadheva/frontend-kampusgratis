import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/Firebase';
import PrivateRoute from './components/PrivateRoute';

import Header from './components/default/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';

import Main from './pages/landing-page/Main';
import Dashboard from './pages/Dashboard';
import Categories from './pages/landing-page/Categories';
import Footer from './components/default/Footer';

import MyStudy from './pages/my-study/Main';
import Silabus from './pages/syllabus/Main';

import PageNotFound from './components/default/PageNotFound';
import Administration from './pages/Administration';
import SilabusSubject from './pages/syllabus/ListSubject';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<>
            <Header />
            <Main />
            <Footer />
          </>} />

          <Route path='/kategori' exact element={<>
            <Header />
            <Categories />
            <Footer />
          </>} />

          {/* Open Private Page */}
          <Route path='/dashboard' exact element={<PrivateRoute />}>
            <Route path='/dashboard' exact element={<>
              <Header />
              <Dashboard />
              <Footer />
            </>} />
          </Route>

          <Route path='/administrasi' exact element={<><PrivateRoute /></>}>
            <Route path='/administrasi' exact element={<>
              <Header />
              <Administration />
              <Footer />
            </>} />
          </Route>

          <Route path='/profil' exact element={<><PrivateRoute /></>}>
            <Route path='/profil' exact element={<>
              <Header />
              <Profile />
              <Footer />
            </>} />
          </Route>
          {/* Close Private Page */}

          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />

          <Route path='/studi-ku' exact element={<PrivateRoute />}>
            <Route path='/studi-ku' exact element={<>
              <Header />
              <MyStudy />
              <Footer />
            </>} />
          </Route>

          <Route path='/silabus' exact element={<PrivateRoute />}>
            <Route path='/silabus' exact element={<>
              <Header />
              <Silabus />
              <Footer />
            </>} />
          </Route>

          <Route path='/silabus/:majorId' exact element={<PrivateRoute />}>
            <Route path='/silabus/:majorId' exact element={<>
              <Header />
              <SilabusSubject />
              <Footer />
            </>} />
          </Route>

          <Route path="/*" element={<>
            <Header />
            <PageNotFound />
            <Footer />
          </>} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
