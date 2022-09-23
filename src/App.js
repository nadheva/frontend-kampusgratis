import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/Firebase';
import PrivateRoute from './components/PrivateRoute';

import Header from './pages/default/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';

import Main from './pages/landing-page/Main';
import Dashboard from './pages/Dashboard';
import Categories from './pages/landing-page/Categories';
import Footer from './pages/default/Footer';

import MyStudy from './pages/my-study/Main';

import PageNotFound from './pages/default/PageNotFound';
import Administration from './pages/Administration';

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
            <Route path='/dashboard' element={<>
              <Header />
              <Dashboard />
              <Footer />
            </>} />
          </Route>

          <Route path='/administrasi' exact element={<><PrivateRoute /></>}>
            <Route path='/administrasi' element={<>
              <Header />
              <Administration />
              <Footer />
            </>} />
          </Route>

          <Route path='/profil' exact element={<><PrivateRoute /></>}>
            <Route path='/profil' element={<>
              <Header />
              <Profile />
              <Footer />
            </>} />
          </Route>
          {/* Close Private Page */}

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/studi-ku' element={<>
            <Header />
            <MyStudy />
            <Footer />
          </>} />

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
