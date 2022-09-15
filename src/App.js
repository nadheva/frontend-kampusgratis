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

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
