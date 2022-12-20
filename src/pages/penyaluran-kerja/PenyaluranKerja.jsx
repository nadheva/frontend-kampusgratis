import React, { useEffect, useState } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getJobs, resetAll } from "../../features/jobs/jobsSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/penyaluran-kerja/penyaluran-kerja/Intro";
import FilterBar from "../../components/penyaluran-kerja/penyaluran-kerja/FilterBar";
import CardList from "../../components/penyaluran-kerja/penyaluran-kerja/CardList";
import Pagination from "../../components/default/Pagination";
import { useParams } from "react-router-dom";

const PenyaluranKerja = () => {
	const { type } = useParams();
	const [isPageLoad, setIsPageLoad] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [results, setResults] = useState([]);

	const dispatch = useDispatch();

	const { data, isLoading } = useSelector(
		(state) => state.jobs
	);

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
		dispatch(getJobs({ currentPage: page, type }));
	};

	useEffectOnce(() => {
		dispatch(resetAll());
		setIsPageLoad(false);
		dispatch(getJobs({ currentPage, type }));
	});

	useEffect(() => {
		const { max_page: maxPage, result } = data?.jobs || {};
		if (maxPage !== 0) setLastPage(maxPage);
		if (result) setResults(result);

		if (maxPage && result) setIsPageLoad(true);
		// setType(["finance"]);
	}, [data, isPageLoad, results]);

	console.log(results)

	return (
		<>
			<Header />
			<main>
				<Intro />
				<section className="pt-4">
					<div className="container">
						<FilterBar />
						<CardList
							isLoading={isLoading}
							results={results}
						/>
						<Pagination
							isPageLoad={isPageLoad}
							currentPage={currentPage}
							lastPage={lastPage}
							changePage={changePage}
							renderPage={renderPage}
						/>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default PenyaluranKerja;
