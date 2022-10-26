import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";

// component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import CardList from "../../components/artikel/CardList";
import Pagination from "../../components/element/Pagination";
import Search from "../../components/artikel/Search";

// redux
import { useSelector, useDispatch } from "react-redux";
import { artikelAll, reset } from "../../features/artikel/artikelSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Artikel = () => {
	// redux
	const dispatch = useDispatch();
	const { artikels, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.artikel
	);

	useEffectOnce(() => {
		dispatch(artikelAll());
	});

	useEffect(() => {
		if (isError && !isSuccess) {
			toast.error(message);
			dispatch(reset());
		}
		if (isSuccess && message && !isError) {
			toast.success(message);
			dispatch(reset());
		}
	}, [artikels, isLoading, isError, isSuccess, message, dispatch]);

	// Pagination
	const [filteredArtikel, setFilteredArtikel] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(8);

	useEffect(() => {
		setFilteredArtikel(artikels);
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = filteredArtikel.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (e, pageNumber) => {
		e.preventDefault();
		setCurrentPage(pageNumber);
	};

	// search
	const [searchValue, setSearchValue] = useState("");

	const handleSearchFilter = (e) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			const filter = _.filter(artikels, (data) => {
				return _.includes(
					_.lowerCase(JSON.stringify(_.values(data))),
					_.lowerCase(searchValue)
				);
			});
			setFilteredArtikel(filter);
		}, 200);
		return () => clearTimeout(timeout);
	}, [searchValue, filteredArtikel]);

	return (
		<>
			<Header />
			<main>
				<Search
					handleSearchFilter={handleSearchFilter}
					searchValue={searchValue}
				/>
				<section className="position-relative pt-0 pt-lg-5">
					<div className="container">
						<CardList isLoading={isLoading} currentPosts={currentPosts} />
						{isLoading ? (
							<></>
						) : !(filteredArtikel.length > postsPerPage) ? null : (
							<Pagination
								itemsPerPage={postsPerPage}
								totalItems={filteredArtikel.length}
								paginate={paginate}
								currentPage={currentPage}
							/>
						)}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Artikel;
