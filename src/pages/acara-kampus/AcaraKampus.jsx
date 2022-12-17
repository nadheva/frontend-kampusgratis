import React, { useEffect, useState } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getEvents, reset, resetAll } from "../../features/event/eventSlice";
import useEffectOnce from "../../helpers/useEffectOnce";
import Pagination from "../../components/default/Pagination";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import Intro from "../../components/acara-kampus/acara-kampus/Intro";
import CardList from "../../components/acara-kampus/acara-kampus/CardList";

const AcaraKampus = () => {

	const [isPageLoad, setIsPageLoad] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [results, setResults] = useState([]);

	const dispatch = useDispatch();

	const { data, isLoading } = useSelector(
		(state) => state.event
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
		dispatch(getEvents({ currentPage: page }));
	};

	useEffectOnce(() => {
		dispatch(resetAll());
		setIsPageLoad(false);
		dispatch(getEvents({ currentPage }));
	});

	useEffect(() => {
		const { max_page: maxPage, result } = data?.events || {};
		if (maxPage !== 0) setLastPage(maxPage);
		if (result) setResults(result);

		if (maxPage && result) setIsPageLoad(true);
	}, [data, isPageLoad, results]);

	console.log(results)

	return (
		<>
			<Header />
			<main>
				<Intro />
				<section className="pt-0">
					<div className="container">
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

export default AcaraKampus;
