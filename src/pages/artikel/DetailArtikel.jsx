import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import { toast } from "react-toastify";

// redux
import { useSelector, useDispatch } from "react-redux";
import { artikelAll, reset } from "../../features/artikel/artikelSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

// component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

const DetailArtikel = () => {
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

	// Get id
	const { artikelId } = useParams();

	const thisArtikel = artikels.find((prod) => prod.id === artikelId);

	return (
		<>
			<Header />
			{isLoading ? (
				<section className="py-0 py-sm-5">
					<div
						className="container text-center"
						style={{ marginTop: "178px", marginBottom: "178px" }}
					>
						<div className="row">
							<div className="col-12">
								<div className="spinner-border" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : thisArtikel == null || thisArtikel == 0 ? (
				<span className="alert alert-danger">Data kosong</span>
			) : (
				<main>
					<section className="bg-light">
						<div className="container">
							<div className="row position-relative pb-4">
								<div className="col-lg-8 position-relative">
									<h1>{thisArtikel.title}</h1>
									<p className="small">
										{moment(thisArtikel.created_at).fromNow()}
									</p>
								</div>
							</div>
							<div
								className="h-300px mb-n9 rounded-3"
								style={{
									backgroundImage: `url(${thisArtikel.image_link})`,
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
									<p>{thisArtikel.description}</p>
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
