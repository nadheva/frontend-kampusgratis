import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import firebase from './config/firebase';
import PrivateRoute from './components/PrivateRoute';

import Header from './pages/default/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<>
            <Header />
            <h1>Hi</h1>
          </>} />
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='/dashboard' element={<>
              <Header />
              <Dashboard />
            </>} />
          </Route>

          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<>
              <Header />
              <Profile />
            </>} />
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
