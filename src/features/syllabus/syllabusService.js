import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = "https://kg-be-o5doicnv2a-et.a.run.app/api/v1/";

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

  const response = await axios.get(API_URL + `syllabus/curriculum?degree=S1&major_id=${majorId}`, config);

  return response.data;
}

const takeStudyPlan = async (majorId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken({ refresh: true });

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL + `subject/enroll/${majorId}`, {}, config);

  return response.data;
}

const removeStudyPlan = async (majorId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken({ refresh: true });

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + `subject/deleteDraft/${majorId}`, config);

  return response.data;
}

const getMyStudyPlan = async () => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + `subject/studyplan`, config);

  return response.data;
}

const doSendDraft = async () => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + `subject/senddraft`, {}, config);

  return response.data;
}

const takeCurrentMajor = async (majorId) => {
  const auth = getAuth();
  const token = await auth.currentUser.getIdToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL + `major/take/${majorId}`, {}, config);

  return response.data;
}

const silabusService = {
  getMajors,
  getSubjectByMajor,
  getMyStudyPlan,
  takeStudyPlan,
  removeStudyPlan,
  doSendDraft,
  takeCurrentMajor
}

export default silabusService;