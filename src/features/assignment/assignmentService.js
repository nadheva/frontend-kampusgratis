import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = 'https://fe-integration-test.herokuapp.com/api/v1/'

const getAssignment = async (sessionId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `assignment/session/${sessionId}`, config);

  return response.data;
}

const sendAssignment = async (sessionId, assignment) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL + `assignment/submit/${sessionId}`, {
    file_assignment: assignment
  }, config);

  return response.data;
}

const assignmentService = {
  getAssignment, sendAssignment
}

export default assignmentService;