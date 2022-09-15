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

const getMe = async (token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + 'profile/me', config);

  if (response.data) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(response.data.data))
  }

  console.log(response.data)

  return response.data;
}

const updateProfile = async (body, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + 'profile/me', body, config);

  return response.data;
}

const authService = {
  googleValidate,
  register,
  getMe,
  updateProfile
}

export default authService;