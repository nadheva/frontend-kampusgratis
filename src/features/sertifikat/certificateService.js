import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = 'https://fe-integration-test.herokuapp.com/api/v1/';

const getCertificates = async () => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `certificate`, config);

  return response.data;
}

const getCertificate = async (id) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `certificate/${id}`, config);

  return response.data;
}

const certificateService = {
  getCertificates,
  getCertificate
}

export default certificateService;