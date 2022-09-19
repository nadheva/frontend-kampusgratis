import axios from 'axios';

const API_URL = 'https://fe-integration-test.herokuapp.com/api/v1/'

const register = async (userData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.post(API_URL + 'auth/register', userData, config);

  return response.data;
}

const googleValidate = async (token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL + 'auth/google-validate', {}, config);

  return response.data;
}

const authService = {
  googleValidate,
  register
}

export default authService;