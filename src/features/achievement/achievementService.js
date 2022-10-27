import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://fe-integration-test.herokuapp.com/api/v1/";

const getAchievements = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + 'profile/achievements', config);

	return response.data;
}


const achievementService = {
	getAchievements
};

export default achievementService;