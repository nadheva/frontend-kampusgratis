import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Switch } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import firebase from './config/Firebase';
import PrivateRoute from './components/PrivateRoute';

import Header from './pages/default/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';

import Main from './pages/landing-page/Main';
import Categories from './pages/landing-page/Categories';
import Footer from './pages/default/Footer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<><Header /><Main /><Footer /></>} />
          <Route path='/kategori' exact element={<><Header /><Categories /><Footer /></>} />

          {/* Private Page */}
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='/dashboard' element={<>Hello</>} />
          </Route>

          <Route path='/profil' element={<PrivateRoute />}>
            <Route path='/profil' element={<><Header /><Profile /></>} />
          </Route>
          {/* Private Page */}
        </Routes>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
