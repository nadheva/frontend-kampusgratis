import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { reset } from "../features/profile/profileSlice";
import { useDispatch } from "react-redux";

export const useAuthStatus = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [checkingStatus, setCheckingStatus] = useState(true);
	const isMounted = useRef(true);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isMounted) {
			const auth = getAuth();

			onAuthStateChanged(auth, async (user) => {
				if (user) {
					setLoggedIn(true);
					const token = await user?.getIdToken();
					localStorage.setItem("token", token);
				} else {
					localStorage.removeItem("token");
					localStorage.removeItem("user");
					toast.info("Session kamu telah berakhir!");
					dispatch(reset());
				}

				setCheckingStatus(false);
			});

			onIdTokenChanged(auth, async (user) => {
				if (user) {
					setLoggedIn(true);
					const token = await user?.getIdToken();
					localStorage.setItem("token", token);
				} else {
					localStorage.removeItem("token");
					localStorage.removeItem("user");
					toast.info("Session kamu telah berakhir!");
					dispatch(reset());
				}

				setCheckingStatus(false);
			});
		}

		return () => {
			isMounted.current = false;
		};
	}, [isMounted]);

	return { loggedIn, checkingStatus };
};
