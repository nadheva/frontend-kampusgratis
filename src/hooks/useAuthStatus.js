import { useEffect, useState, useRef } from 'react';
import { getAuth, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }

        setCheckingStatus(false);
      })

      onIdTokenChanged(auth, async (user) => {
        if (user) {
          const token = await user?.getIdToken();

          localStorage.setItem("token", token);
        }
      });
    }

    return () => {
      isMounted.current = false;
    }
  }, [isMounted]);

  return { loggedIn, checkingStatus };
}