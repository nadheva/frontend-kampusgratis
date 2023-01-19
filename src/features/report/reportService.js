import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://kg-2-luk-s7dsgbuasq-et.a.run.app/api/v1/";

const getReports = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + `profile/report`, config);

	return response.data;
};

const reportService = {
	getReports,
};

export default reportService;
