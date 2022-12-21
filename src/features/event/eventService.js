import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://kg-be-o5doicnv2a-et.a.run.app/api/v1/";

const getEvents = async (currentPage) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	const response = await axios.get(API_URL + `events/all?page=${currentPage}&limit=8`, config);

	return response.data;
}

const getEvent = async (id) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	const response = await axios.get(API_URL + `events/${id}`, config);

	return response.data;
}


const joinEvent = async (id, data2) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	const response = await axios.post(API_URL + `events/join/${id}`, data2, config);

	return response.data;
}



const eventService = {
	getEvents,
	getEvent,
	joinEvent
};

export default eventService;