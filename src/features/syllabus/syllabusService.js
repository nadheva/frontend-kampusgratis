import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = 'https://fe-integration-test.herokuapp.com/api/v1/'

const getMajors = async (currentPage, search) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `syllabus/majors/paginate?page=${currentPage}&limit=9&search=${search}`, config);

  return response.data;
}

const getSubjectByMajor = async (majorId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `syllabus/subjectByMajor/${majorId}`, config);

  return response.data;
}

const silabusService = {
  getMajors,
  getSubjectByMajor
}

export default silabusService;