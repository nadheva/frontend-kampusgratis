import React, { useEffect, useState } from 'react'

// component
import Banner from "../../components/Account/Banner";
import Sidebar from "../../components/Account/Sidebar";
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import MainContent from '../../components/nilai-sertifikat/sertifikat/MainContent';

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCertificates, resetAll } from "../../features/sertifikat/certificateSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Sertifikat = () => {
	// Redux
	const [searchTerm, setSearchTerm] = useState("");

	const [isPageLoad, setIsPageLoad] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [results, setResults] = useState([]);

	const dispatch = useDispatch();

	const { data, isLoading } = useSelector((state) => state.certificate);

	const doFilter = (e) => {
		e.preventDefault();

		dispatch(resetAll());
		dispatch(getCertificates({ currentPage, search: searchTerm }));

		setIsPageLoad(false);
	};

	const renderPage = () => {
		if (!isPageLoad) return <></>;

		let page = [];

		for (let i = 1; i <= lastPage; i++) {
			page.push(
				<li className={`page-item mb-0 ${i === currentPage ? "active" : ""}`}>
					{i === currentPage ? (
						<span className="page-link">{i}</span>
					) : (
						<button className="page-link" onClick={() => changePage(i)}>
							{i}
						</button>
					)}
				</li>
			);
		}

		return page;
	};

	const changePage = (page) => {
		setIsPageLoad(false);
		setCurrentPage(page);
		setResults([]);
		dispatch(resetAll());
		dispatch(getCertificates({ currentPage: page, search: searchTerm }));
	};

	useEffectOnce(() => {
		dispatch(resetAll());
		setIsPageLoad(false);
		dispatch(getCertificates({ currentPage, search: searchTerm }));
	});

	useEffect(() => {
		const { max_page: maxPage, result } = data?.certificates || {};
		if (maxPage !== 0) setLastPage(maxPage);
		if (result) setResults(result);

		if (maxPage && result) setIsPageLoad(true);
	}, [data, isPageLoad, results]);

	console.log(results)

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
									<h3 className="mb-0">Daftar Sertifikat</h3>
								</div>
								<MainContent
									isLoading={isLoading}
									results={results}
									doFilter={doFilter}
									setSearchTerm={setSearchTerm}
									isPageLoad={isPageLoad}
									currentPage={currentPage}
									lastPage={lastPage}
									changePage={changePage}
									renderPage={renderPage}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Sertifikat