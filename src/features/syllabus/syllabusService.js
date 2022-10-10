import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://fe-integration-test.herokuapp.com/api/v1/";

const getMajors = async (currentPage, search) => {
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
			`syllabus/majors/paginate?page=${currentPage}&limit=9&search=${search}`,
		config
	);

	return response.data;
};

const getSubjectByMajor = async (majorId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(
		API_URL + `syllabus/curriculum?degree=S1&major_id=${majorId}`,
		config
	);

	return response.data;
};

const getMyStudyPlan = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + `subject/studyplan`, config);

	return response.data;
};

const silabusService = {
	getMajors,
	getSubjectByMajor,
	getMyStudyPlan,
};

export default silabusService;
