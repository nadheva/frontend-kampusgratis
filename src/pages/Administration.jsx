import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Banner from '../components/Account/Banner';
import Sidebar from '../components/Account/Sidebar';

import useEffectOnce from '../helpers/useEffectOnce';

// import AdministrationForm from '../components/Administration/AdministrationForm';
import { getMyAdministration } from '../features/administration/administrationSlice';

import Header from '../components/default/Header';
import Footer from '../components/default/Footer';
import Form from '../components/Administration/Form';
import { Link } from 'react-router-dom';

const Administration = () => {
	const dispatch = useDispatch();

	const { data } = useSelector(
		(state) => state.administration
	);

	useEffectOnce(() => {
		dispatch(getMyAdministration());
	});

	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />
						<div className="col-xl-9">
							<div className="card border bg-transparent rounded-3">
								<div className="card-header bg-transparent border-bottom">
									<div className="row">
										<div className="col-sm-6 d-flex align-items-center">
											<h3 className="card-header-title mb-2 mb-sm-0 d-inline-flex">Administrasi</h3>
											{data?.is_approved?.overall === true
												? <span className='badge bg-success bg-opacity-10 ms-3 text-dark py-2'>accepted</span>
												: <span className="badge bg-primary bg-opacity-10 ms-3 text-primary py-2">waiting</span>}
										</div>
										{data?.is_approved?.overall === true
											? <p>Administrasi telah diterima, <Link to="/silabus"> Klik di sini</Link> untuk mengambil Rencana Studi.</p>
											: <p className="text-danger mb-1">Kamu harus mengisi administrasi untuk bisa mengambil Rencana Studi!</p>}
									</div>
								</div>
								<div className="card-body mt-2">
									<Form administration={data} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Administration