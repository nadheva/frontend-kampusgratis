import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://kg-2-luk-s7dsgbuasq-et.a.run.app/api/v1/";

const getCertificates = async (currentPage, search) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(
		API_URL + `certificate?page=${currentPage}&limit=8&search=${search}`,
		config
	);

	return response.data;
};

const getCertificate = async (id) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const response = await axios.get(API_URL + `certificate/${id}`, config);

	return response.data;
};

const certificateService = {
	getCertificates,
	getCertificate,
};

export default certificateService;
