import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/firebase';
import PrivateRoute from './components/PrivateRoute';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';

import Main from './pages/landing-page/Main';
import Dashboard from './pages/Dashboard';
import Categories from './pages/landing-page/Categories';

import MyStudy from './pages/my-study/Main';
import Silabus from './pages/syllabus/Main';

import PageNotFound from './components/default/PageNotFound';
import Administration from './pages/Administration';
import SilabusSubject from './pages/syllabus/ListSubject';

import ScrollToTop from './components/default/ScrollToTop';

// https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
// https://codesandbox.io/s/dreamy-gauss-w47hm?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' exact element={<Main />} />

            <Route path='/kategori' exact element={<Categories />} />

            <Route path='/dashboard' exact element={<PrivateRoute />}>
              <Route path='/dashboard' exact element={<Dashboard />} />
            </Route>

            <Route path='/administrasi' exact element={<><PrivateRoute /></>}>
              <Route path='/administrasi' exact element={<Administration />} />
            </Route>

            <Route path='/profil' exact element={<><PrivateRoute /></>}>
              <Route path='/profil' exact element={<Profile />} />
            </Route>

            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />

            <Route path='/studi-ku' exact element={<PrivateRoute />}>
              <Route path='/studi-ku' exact element={<MyStudy />} />
            </Route>

            <Route path='/silabus/:majorId' element={<PrivateRoute />}>
              <Route path='/silabus/:majorId' element={<SilabusSubject />} />
            </Route>

            <Route path='/silabus' exact element={<PrivateRoute />}>
              <Route path='/silabus' exact element={<Silabus />} />
            </Route>

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </ScrollToTop>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
