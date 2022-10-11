import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

// component
import Intro from "../../components/studiku/modul/Intro";
import MainContent from "../../components/studiku/modul/MainContent";
import Header from '../default/Header';
import Footer from '../default/Footer';

// redux
import { useSelector, useDispatch } from "react-redux";
import { getModules, reset } from "../../features/module/moduleSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Modul = () => {
	useEffect(() => {
		document.title = "Kampus Gratis | Modul";
	});

	// Get id
	const { sessionId } = useParams();

	// redux
	const dispatch = useDispatch();
	const { modules, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.module
	);

	useEffectOnce(() => {
		dispatch(getModules(sessionId));
	});

	useEffect(() => {
		if (isError && !isSuccess) {
			toast.error(message);
			dispatch(reset());
		}
		if (isSuccess && message && !isError) {
			toast.success(message);
			dispatch(reset());
		}
	}, [modules, isLoading, isError, isSuccess, message, dispatch]);

	return (
		<>
			<Header />
			<main>
				<Intro />
				<MainContent
					modules={modules}
					isLoading={isLoading}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Modul;
