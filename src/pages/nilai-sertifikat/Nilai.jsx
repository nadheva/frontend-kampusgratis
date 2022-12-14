import React, { useEffect, useState } from "react";

// Component
import Banner from "../../components/Account/Banner";
import Sidebar from "../../components/Account/Sidebar";
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import DataMahasiswa from "../../components/nilai-sertifikat/nilai/DataMahasiswa";
import TableScore from "../../components/nilai-sertifikat/nilai/TableScore";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getReports } from "../../features/report/reportSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Nilai = () => {
	// Redux
	const dispatch = useDispatch();
	const [currentReport, setCurrentReport] = useState({});

	const { data, isLoading } = useSelector(
		(state) => state.report
	);

	useEffectOnce(() => {
		dispatch(getReports());
	});

	useEffect(() => {
		if (data?.reports) setCurrentReport(data?.reports);

	}, [data]);
	return (
		<>
			<Header />
			<Banner />
			<section className="pt-0">
				<div className="container">
					<div className="row">
						<Sidebar />
						<div className="col-xl-9">
							<DataMahasiswa
								isLoading={isLoading}
								data={currentReport}
							/>
							<TableScore
								isLoading={isLoading}
								data={currentReport}
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Nilai;
