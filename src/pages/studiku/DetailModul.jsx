import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

// Component
import Intro from "../../components/studiku/detailModule/Intro";
import MainContent from "../../components/studiku/detailModule/MainContent";
import Modal from "../../components/studiku/detailModule/Modal";
import Header from '../default/Header';
import Footer from '../default/Footer';

// redux
import { useSelector, useDispatch } from "react-redux";
import {
	getDetailModules,
	reset,
} from "../../features/detailmodule/detailModuleSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const DetailModul = () => {
	// Get id
	const { moduleId } = useParams();

	// Redux
	const dispatch = useDispatch();
	const { dModules, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.detailModule
	);

	useEffectOnce(() => {
		dispatch(getDetailModules(moduleId));
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
	}, [dModules, isLoading, isError, isSuccess, message, dispatch]);

	return (
		<>
			<Header />
			<main>
				<Intro />
				<MainContent
					dModules={dModules}
					isLoading={isLoading} />
				<Modal />
			</main>
			<Footer />
		</>
	);
};

export default DetailModul;
