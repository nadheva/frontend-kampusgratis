import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://kg-be-o5doicnv2a-et.a.run.app/api/v1/";

const getNotifications = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + 'notification/get', config);

	return response.data;
}

const readNotification = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.put(API_URL + 'notification/read', {}, config);

	return response.data;
}


const notificationService = {
	getNotifications,
	readNotification
};

export default notificationService;
