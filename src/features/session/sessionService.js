import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = 'https://fe-integration-test.herokuapp.com/api/v1/'

const getSession = async (subjectId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `session/getfromsub/${subjectId}`, config);

  return response.data;
}


const sessionService = {
  getSession,
}

export default sessionService;