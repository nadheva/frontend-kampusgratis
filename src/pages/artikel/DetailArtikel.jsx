import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment/moment";

// redux
import { useSelector, useDispatch } from "react-redux";
import { artikel } from "../../features/artikel/artikelSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

// component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

const DetailArtikel = () => {

	const { artikelId } = useParams();

	// Redux
	const dispatch = useDispatch();
	const [currentArtikel, setCurrentArtikel] = useState({});

	const { data, isLoading } = useSelector(
		(state) => state.artikel
	);

	useEffectOnce(() => {
		dispatch(artikel(artikelId));
	});

	useEffect(() => {
		if (data?.artikel) setCurrentArtikel(data?.artikel);
	}, [data]);

	console.log(currentArtikel)

	return (
		<>
			<Header />
			{isLoading ? (
				<section className="py-0 py-sm-5">
					<div
						className="container text-center"
						style={{ marginTop: "178px", marginBottom: "178px" }}>
						<div className="row">
							<div className="col-12">
								<div className="spinner-border" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				<main>
					<section className="bg-light">
						<div className="container">
							<div className="row position-relative pb-4">
								<div className="col-lg-8 position-relative">
									<h1>{currentArtikel?.title}</h1>
									<p className="small">
										{
											currentArtikel.created_at ? (
												moment(currentArtikel?.created_at).format('LL')
											) : (
												<></>
											)
										}
									</p>
								</div>
							</div>
							<div
								className="h-300px mb-n9 rounded-3"
								style={{
									backgroundImage: `url(${currentArtikel?.image_link})`,
									backgroundPosition: "center left",
									backgroundSize: "cover",
								}}
							></div>
						</div>
					</section>
					<section className="pt-9">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<p>{currentArtikel?.description}</p>
								</div>
							</div>
						</div>
					</section>
				</main>
			)}
			<Footer />
		</>
	);
};

export default DetailArtikel;
