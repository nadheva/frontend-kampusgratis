import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";

import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
		<Helmet>
			<script
				type="text/javascript"
				src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
				defer
			></script>
			<script
				type="text/javascript"
				src="/assets/vendor/choices/js/choices.min.js"
				defer
			></script>
			<script
				type="text/javascript"
				src="/assets/vendor/stepper/js/bs-stepper.min.js"
				defer
			></script>
			<script
				type="text/javascript"
				src="/assets/vendor/apexcharts/js/apexcharts.min.js"
				defer
			></script>
		</Helmet>
	</Provider>
);
