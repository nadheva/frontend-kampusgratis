import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Footer from './default/Footer';
import Header from './default/Header';

// import Spinner from './Spinner';

const PrivateRoute = ({ redirect }) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return;
  }

  if (redirect) return loggedIn ? <Outlet /> : <Navigate to='/login' />
  return <Outlet />
}

export default PrivateRoute;