import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://kg-be-o5doicnv2a-et.a.run.app/api/v1/";

const getJobs = async (dataJob, currentPage) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	const response = await axios.post(API_URL + `jobs/all?page=${currentPage}&limit=8`, dataJob, config);

	return response.data;
}


const jobsService = {
	getJobs
};

export default jobsService;