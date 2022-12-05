import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = "https://kg-be-o5doicnv2a-et.a.run.app/api/v1/";

const getMyAdministration = async () => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + 'administration/mine', config);

  return response.data;
}

const sendAdministrationBiodata = async (data) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + 'administration/biodata', data, config);

  return response.data;
}

const sendAdministrationFamilial = async (data) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + 'administration/familial', data, config);

  return response.data;
}

const sendAdministrationFiles = async (data) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    }
  }

  // const formData = new FormData();

  // for (const [key, value] of Object.entries(data)) {
  //   formData.append(key, value);
  // }

  const response = await axios.put(API_URL + 'administration/files', data, config);

  return response.data;
}

const sendAdministrationDegree = async (data) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + 'administration/degree', data, config);

  return response.data;
}

const administrationService = {
  getMyAdministration,
  sendAdministrationBiodata,
  sendAdministrationFamilial,
  sendAdministrationFiles,
  sendAdministrationDegree
}

export default administrationService;