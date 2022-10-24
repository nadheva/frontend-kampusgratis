import React, { useState, useEffect } from "react";

// Component
import Banner from "../../components/Profile/Banner";
import SidebarProfile from "../../components/Profile/Sidebar";
import MainContent from "../../components/student/dashboard/MainContent";
import Header from "../default/Header";
import Footer from "../default/Footer";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
	resetAll,
	reset,
	getMySubjects
} from "../../features/my-study/myStudySlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const StudentDashboard = () => {

	const [searchTerm, setSearchTerm] = useState('');

	const [isPageLoad, setIsPageLoad] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [results, setResults] = useState([]);

	const dispatch = useDispatch();

	const { data, isLoading } = useSelector(
		(state) => state.myStudy
	);

	const doFilter = (e) => {
		e.preventDefault();

		dispatch(resetAll());
		dispatch(getMySubjects({ currentPage, search: searchTerm }));

		setIsPageLoad(false);
	}

	const renderPage = () => {
		if (!isPageLoad) return <></>;

		let page = [];

		for (let i = 1; i <= lastPage; i++) {
			page.push(<li className={`page-item mb-0 ${i === currentPage ? "active" : ""}`} >
				{i === currentPage
					? <span className="page-link">{i}</span>
					: <button className="page-link" onClick={() => changePage(i)}>{i}</button>}
			</li>);
		}

		return page;
	}

	const changePage = (page) => {
		setIsPageLoad(false);
		setCurrentPage(page);
		setResults([]);
		dispatch(resetAll());
		dispatch(getMySubjects({ currentPage: page, search: searchTerm }));
	}

	useEffectOnce(() => {
		dispatch(resetAll());
		setIsPageLoad(false);
		dispatch(getMySubjects({ currentPage, search: searchTerm }));
	});

	useEffect(() => {
		const { max_page: maxPage, result } = data?.subjects || {};
		if (maxPage !== 0) setLastPage(maxPage);
		if (result) setResults(result);

		if (maxPage && result) setIsPageLoad(true);
	}, [data, isPageLoad, results]);

	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<SidebarProfile />
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
			</section>
			<Footer />
		</>
	);
};

export default StudentDashboard;
