import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://fe-integration-test.herokuapp.com/api/v1/";

const getMe = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + "profile/me", config);

	if (response?.data) {
		localStorage.setItem("user", JSON.stringify(response.data.data));
	}

	return response.data;
};

const updateProfile = async (body) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(API_URL + "profile/me", body, config);

	if (response?.data) {
		localStorage.setItem("user", JSON.stringify(response.data.data));
	}

	return response.data;
};

const profileService = {
	getMe,
	updateProfile,
};

export default profileService;
