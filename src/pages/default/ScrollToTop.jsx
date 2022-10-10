import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
	const location = useLocation();

	useEffect(() => {
		// window.scrollTo(0, 0);

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [location]);

	return <>{props.children}</>;
};

export default ScrollToTop;
