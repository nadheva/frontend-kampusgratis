import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from '../../helpers/useEffectOnce';
import { getSessions, getSubject } from '../../features/my-study/myStudySlice';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';
import PageNotFound from '../../components/default/PageNotFound';
import MainContent from '../../components/My-Study/session/MainContent';
import Intro from '../../components/My-Study/session/Intro';

const Session = () => {
	const dispatch = useDispatch();
	const [currentSubject, setCurrentSubject] = useState({});
	const [sessions, setSessions] = useState([]);

	const { subjectId } = useParams();
	const { data, message, isLoading } = useSelector(
		(state) => state.myStudy
	);

	const fetchAll = async () => {
		await Promise.all([
			dispatch(getSubject(subjectId)),
			dispatch(getSessions(subjectId))
		]);
	}

	useEffectOnce(() => {
		fetchAll();
	});

	useEffect(() => {
		if (data?.subject) setCurrentSubject(data.subject);
		if (data?.sessions) setSessions(data.sessions);
	}, [data, message]);

	if (
		message === 'Subject ID not found'
		|| !subjectId
		|| message === "Invalid Subject ID."
		|| message === "ID not found"
		|| subjectId.length !== 36
	) return <PageNotFound />

	return <>
		<Header />
		<main>
			{isLoading || !currentSubject || sessions.length === 0 ? <>
				<section className='bg-light py-0 py-sm-5'>
					<div className='container text-center' style={{ marginTop: '150px', marginBottom: '173px' }}>
						<div className='row'>
							<div className='col-12'>
								<div className='spinner-border' role='status'>
									<span className='visually-hidden'>Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</> : <>
				<Intro
					currentSubject={currentSubject}
				/>
				<MainContent
					subject={currentSubject}
					sessions={sessions}
				/>
			</>}
		</main>
		<Footer />
	</>
}

export default Session;