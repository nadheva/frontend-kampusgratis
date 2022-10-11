import React, { useEffect, useState } from "react";
import _ from "lodash";
import { toast } from 'react-toastify';

// component
import Intro from "../../components/studiku/homeStudiku/Intro";
import MainContent from "../../components/studiku/homeStudiku/MainContent";
import Sidebar from "../../components/studiku/homeStudiku/Sidebar";
import Pagination from "../../components/element/Pagination";
import Header from "../default/Header";
import Footer from "../default/Footer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getSubjects, reset } from "../../features/subject/subjectSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Main = () => {

	useEffect(() => {
		document.title = "Kampus Gratis | Studiku";
	});

	// redux
	const dispatch = useDispatch();
	const { subjects, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.subject
	);

	useEffectOnce(() => {
		dispatch(getSubjects());
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
	}, [subjects, isLoading, isError, isSuccess, message, dispatch]);

	// Pagination
	const [filteredData, setFilteredData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(9);

	useEffect(() => {
		setFilteredData(subjects);
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

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
			const filter = _.filter(subjects, (data) => {
				return _.includes(
					_.lowerCase(JSON.stringify(_.values(data))),
					_.lowerCase(searchValue)
				);
			});
			setFilteredData(filter);
		}, 200);
		return () => clearTimeout(timeout);
	}, [searchValue, filteredData]);

	return (
		<>
			<Header />
			<main>
				<Intro />
				<section className="py-5">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-xl-9 ">
								<MainContent
									course={currentPosts}
									isLoading={isLoading}
									handleSearchFilter={handleSearchFilter}
									searchValue={searchValue}
								/>
								{
									isLoading ? (
										<></>
									) : (
										!(filteredData.length > postsPerPage) ? null : (
											<Pagination
												itemsPerPage={postsPerPage}
												totalItems={filteredData.length}
												paginate={paginate}
												currentPage={currentPage}
											/>
										)
									)
								}
							</div>
							<Sidebar />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Main;
