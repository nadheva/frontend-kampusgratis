import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://kg-2-luk-s7dsgbuasq-et.a.run.app/api/v1/";

const getGuideVideos = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(
		API_URL + "guide/getbytype?type=video",
		config
	);

	return response.data;
};

const getGuideBooks = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(
		API_URL + "guide/getbytype?type=book",
		config
	);

	return response.data;
};

const getGuide = async (id) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + `guide/getbyid/${id}`, config);

	return response.data;
};

const getApplication = async (currentPage, search) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(
		API_URL +
			`guide/glossary?page=${currentPage}&limit=8&search=${search}&type=application`,
		config
	);

	return response.data;
};

const getGlossaries = async (currentPage, search) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(
		API_URL +
			`guide/glossary?page=${currentPage}&limit=8&search=${search}&type=material`,
		config
	);

	return response.data;
};

const getGlossary = async (id) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + `guide/glossary/${id}`, config);

	return response.data;
};

const guideService = {
	getGuideVideos,
	getGuideBooks,
	getGuide,
	getApplication,
	getGlossaries,
	getGlossary,
};

export default guideService;
