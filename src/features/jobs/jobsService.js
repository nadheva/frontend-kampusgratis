import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://kg-2-luk-s7dsgbuasq-et.a.run.app/api/v1/";

const getJobs = async (currentPage, type) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(
		API_URL + `jobs/all?type=${type}&limit=8&page=${currentPage}`,
		config
	);

	return response.data;
};

const getJob = async (id) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(API_URL + `jobs/job/${id}`, config);

	return response.data;
};

const jobsService = {
	getJobs,
	getJob,
};

export default jobsService;
