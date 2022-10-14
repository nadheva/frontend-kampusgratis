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

const getSubject = async (subjectId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `subject/${subjectId}`, config);

  return response.data;
}

const getSessions = async (subjectId) => {
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

const getModuleBySession = async (sessionId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `module/session/${sessionId}`, config);

  return response.data;
}

const getVideo = async (videoId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `module/video/${videoId}`, config);

  return response.data;
}

const getSingleModule = async (moduleId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `module/${moduleId}`, config);

  return response.data;
}

const myStudyService = {
  getMySubjects, getSubject, getSessions, getModuleBySession, getSingleModule,
  getVideo
}

export default myStudyService;