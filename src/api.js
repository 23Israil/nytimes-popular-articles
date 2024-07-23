import axios from 'axios';

const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';

export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
