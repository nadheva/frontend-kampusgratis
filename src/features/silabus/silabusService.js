import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = 'https://fe-integration-test.herokuapp.com/api/v1/'

const getMajors = async (currentPage) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `syllabus/getAllMajorsPagination?page=${currentPage}&limit=10`, config);

  return response.data;
}

const silabusService = {
  getMajors
}

export default silabusService;