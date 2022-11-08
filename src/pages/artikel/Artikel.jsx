import React, { useEffect, useState } from "react";

// component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import CardList from "../../components/artikel/CardList";
import Search from "../../components/artikel/Search";

// redux
import { useSelector, useDispatch } from "react-redux";
import { artikelAll, reset, resetAll } from "../../features/artikel/artikelSlice";
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
		console.log(data?.artikels)
		// const { max_page: maxPage, result } = data?.artikels || {};
		// if (maxPage !== 0) setLastPage(maxPage);
		// console.log(result)
		// if (result) setResults(result);
		// console.log(result)

		// if (maxPage && result) setIsPageLoad(true);
	}, [data, isPageLoad, results]);


	console.log(results)


	return (
		<>
			<Header />
			<main>
				<Search />
				<section className="position-relative pt-0 pt-lg-5">
					<div className="container">
						{/* <CardList isLoading={isLoading} currentPosts={resetAll} /> */}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Artikel;
