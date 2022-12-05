import axios from 'axios';

const API_URL = "https://kg-be-o5doicnv2a-et.a.run.app/api/v1/";

const register = async (userData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.post(API_URL + 'auth/register', userData, config);

  return response.data;
}


const forgotPassword = async (userData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.post(API_URL + 'auth/forget-password', userData, config);

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
  register,
  forgotPassword
}

export default authService;