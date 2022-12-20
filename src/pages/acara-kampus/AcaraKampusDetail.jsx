import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getEvent, joinEvent } from "../../features/event/eventSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/acara-kampus/acara-kampus-detail/Intro";
import Category from "../../components/acara-kampus/acara-kampus-detail/Category";
import Desctriprion from "../../components/acara-kampus/acara-kampus-detail/Desctriprion";

const AcaraKampusDetail = () => {

	const { id } = useParams();

	// Redux
	const dispatch = useDispatch();
	const [event, setEvent] = useState({});

	const { data, isLoading, message } = useSelector(
		(state) => state.event
	);

	useEffectOnce(() => {
		dispatch(getEvent(id));
	});

	useEffect(() => {
		if (data?.event) setEvent(data?.event);
	}, [data]);

	const onClickDaftar = () => {
		console.log("haloo")
		dispatch(joinEvent(id))
	}

	return (
		<>
			<Header />
			<main>
				<Intro
					event={event}
					onClickDaftar={onClickDaftar}
					isLoading={isLoading}
				/>
				<Category event={event} />
				<Desctriprion event={event} />
			</main>
			<Footer />
		</>
	);
};

export default AcaraKampusDetail;
