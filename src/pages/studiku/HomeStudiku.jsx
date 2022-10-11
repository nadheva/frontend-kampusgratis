import React, { useEffect, useState } from "react";
import _ from "lodash";
import { toast } from 'react-toastify';

// component
import Intro from "../../components/studiku/homeStudiku/Intro";
import MainContent from "../../components/studiku/homeStudiku/MainContent";
import Sidebar from "../../components/studiku/homeStudiku/Sidebar";
import Header from "../default/Header";
import Footer from "../default/Footer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getSubjects, reset } from "../../features/subject/subjectSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Main = () => {

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

	// search
	const [searchValue, setSearchValue] = useState("");
	const [filteredData, setFilteredData] = useState(subjects);

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

	console.log(filteredData)
	return (
		<>
			<Header />
			<main>
				<Intro />
				<section className="py-5">
					<div className="container">
						<div className="row">
							<MainContent
								course={filteredData}
								isLoading={isLoading}
								handleSearchFilter={handleSearchFilter}
								searchValue={searchValue} />
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
