import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Header from '../../components/default/Header';
import Footer from '../../components/default/Footer';
import PageNotFound from '../../components/default/PageNotFound';
import useEffectOnce from '../../helpers/useEffectOnce';
import { getSessions, getSubject } from '../../features/my-study/myStudySlice';
import SubjectDetail from '../../components/My-Study/SubjectDetail';

const Subject = () => {
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
					<div className='container text-center' style={{ marginTop: '173px', marginBottom: '173px' }}>
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
				<section className="bg-blue align-items-center d-flex" style={{ background: "url('/assets/images/pattern/04.png') no-repeat center center", backgroundSize: 'cover' }}>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h1 className="text-white">{currentSubject.name}</h1>
								<div className="d-flex justify-content-center">
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
											<li className='breadcrumb-item'><Link to='/kategori'>Kategori</Link></li>
											<li className='breadcrumb-item'><Link to='/studi-ku'>Studi-Ku</Link></li>
											<li className='breadcrumb-item active' aria-current='page'>Mata Kuliah</li>
										</ol>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='pb-0 py-lg-5'>
					<div className="container">
						<div className="row">
							<SubjectDetail subject={currentSubject} sessions={sessions} />
						</div>
					</div>
				</section>
			</>}
		</main>
		<Footer />
	</>
}

export default Subject;