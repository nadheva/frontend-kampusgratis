import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Footer from './default/Footer';
import Header from './default/Header';

// import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return;
    <>
      {/* <Header />
      <div className="container text-center" style={{ margin: "200px 0" }}>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <Footer /> */}
    </>
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute;