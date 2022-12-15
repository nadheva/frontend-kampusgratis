import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { getGuideVideos } from '../../features/guide/guideSlice';
import useEffectOnce from "../../helpers/useEffectOnce";

import Footer from "../../components/default/Footer";
import Header from "../../components/default/Header";
import Intro from '../../components/panduan/vidio-panduan/Intro';
import VidioList from '../../components/panduan/vidio-panduan/VidioList';

const VidioPanduan = () => {

	const [demoEvents, setDemoEvents] = useState([]);
	const dispatch = useDispatch();
	const { data, isLoading } = useSelector((state) => state.guide);

	useEffectOnce(() => {
		dispatch(getGuideVideos());
	});

	useEffect(() => {
		if (data?.video) setDemoEvents(data?.video);
	}, [data]);

	return (
		<>
			<Header />
			<main>
				<Intro />
				<VidioList
					vidio={demoEvents}
					isLoading={isLoading}
				/>
			</main>
			<Footer />
		</>
	);
};

export default VidioPanduan;
