import React, { useEffect, useState } from "react";

// component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import CardList from "../../components/artikel/CardList";
import Search from "../../components/artikel/Search";

// redux
import { useSelector, useDispatch } from "react-redux";
import { artikelAll, resetAll } from "../../features/artikel/artikelSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Artikel = () => {
	// Redux
	// const dispatch = useDispatch();
	// const [currentArtikels, setCurrentArtikels] = useState({});

	// const { data, isLoading } = useSelector(
	// 	(state) => state.artikel
	// );

	// useEffectOnce(() => {
	// 	dispatch(artikelAll());
	// });

	// useEffect(() => {
	// 	if (data?.artikels) setCurrentArtikels(data?.artikels);
	// }, [data]);

	const [searchTerm, setSearchTerm] = useState("");

	const [isPageLoad, setIsPageLoad] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [results, setResults] = useState([]);

	const dispatch = useDispatch();

	const { data, isLoading } = useSelector(
		(state) => state.artikel
	);

	const doFilter = (e) => {
		e.preventDefault();

		dispatch(resetAll());
		dispatch(artikelAll({ currentPage, search: searchTerm }));

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
		dispatch(artikelAll({ currentPage: page, search: searchTerm }));
	};

	useEffectOnce(() => {
		dispatch(resetAll());
		setIsPageLoad(false);
		dispatch(artikelAll({ currentPage, search: searchTerm }));
	});

	useEffect(() => {
		const { max_page: maxPage, result } = data?.artikels || {};
		if (maxPage !== 0) setLastPage(maxPage);
		if (result) setResults(result);

		if (maxPage && result) setIsPageLoad(true);
	}, [data, isPageLoad, results]);


	console.log(results)


	return (
		<>
			<Header />
			<main>
				<Search
					doFilter={doFilter}
					setSearchTerm={setSearchTerm}
				/>
				<section className="position-relative pt-0 pt-lg-5">
					<div className="container">
						<CardList
							isLoading={isLoading}
							results={results}
							isPageLoad={isPageLoad}
							currentPage={currentPage}
							lastPage={lastPage}
							changePage={changePage}
							renderPage={renderPage}
						/>

						<div className="col-12">
							<nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
								<ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
									{isPageLoad && <>
										{currentPage !== 1 && lastPage > 2 && <li className="page-item mb-0">
											<button className="page-link" onClick={() => changePage(1)}>
												<i className="fas fa-angle-double-left"></i>
											</button>
										</li>}
										{renderPage()}
										{currentPage !== lastPage && lastPage > 2 && <li className="page-item mb-0">
											<button className="page-link" onClick={() => changePage(lastPage)} >
												<i className="fas fa-angle-double-right"></i>
											</button>
										</li>}
									</>}
								</ul>
							</nav>
						</div>

					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Artikel;
