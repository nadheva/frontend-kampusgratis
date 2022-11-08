import axios from 'axios';

const API_URL = 'https://fe-integration-test.herokuapp.com/api/v1/'

const artikelAll = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.get(API_URL + 'article/index', config);

  return response.data;
}

const artikel = async (id) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await axios.get(API_URL + `article/${id}`, config);

  return response.data;
}


const artikelService = {
  artikelAll,
  artikel
}

export default artikelService;