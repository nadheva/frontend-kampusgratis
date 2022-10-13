import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = 'https://fe-integration-test.herokuapp.com/api/v1/';

const getMySubjects = async (currentPage, search) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `subject/enrolledsubjects?page=${currentPage}&limit=6&search=${search}`, config);

  return response.data;
}

const myStudyService = {
  getMySubjects
}

export default myStudyService;