import React, { useEffect, useState } from "react";

// component
import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";
import CardList from "../../components/artikel/CardList";
import Search from "../../components/artikel/Search";

// redux
import { useSelector, useDispatch } from "react-redux";
import { artikelAll } from "../../features/artikel/artikelSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

const Artikel = () => {
	// Redux
	const dispatch = useDispatch();
	const [currentArtikels, setCurrentArtikels] = useState({});

	const { data, isLoading } = useSelector(
		(state) => state.artikel
	);

	useEffectOnce(() => {
		dispatch(artikelAll());
	});

	useEffect(() => {
		if (data?.artikels) setCurrentArtikels(data?.artikels);
	}, [data]);

	return (
		<>
			<Header />
			<main>
				<Search />
				<section className="position-relative pt-0 pt-lg-5">
					<div className="container">
						<CardList isLoading={isLoading} currentPosts={currentArtikels} />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Artikel;
