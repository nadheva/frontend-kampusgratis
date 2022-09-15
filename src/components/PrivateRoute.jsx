import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

// import Spinner from './Spinner';

import Header from '../pages/default/Header';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <>
      <Header />
      Loading...
    </>
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute;