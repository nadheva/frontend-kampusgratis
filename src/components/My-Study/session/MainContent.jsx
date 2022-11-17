import React from 'react';
import { Link } from 'react-router-dom';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

const MainContent = ({ subject, sessions }) => {
	return (
		<section className='pb-0 py-lg-5'>
			<div className="container">
				<div className="row">
					<img className='img-thumbnail p-2' src={subject.thumbnail_link} alt={subject.name} style={{ height: '360px', objectFit: 'cover' }} />
					<div className="col-lg-12 mt-4">
						<div className="card shadow rounded-2 p-0">
							<CardHeader />
							<CardBody
								subject={subject}
								sessions={sessions}
							/>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}

export default MainContent;