import axios from 'axios';

const API_KEY = '27837b5dffdf4244a57220f88fed0292';
const API_URL = 'https://newsapi.org/v2';

const NewsAPI = {
  getTopHeadlines: (category = 'general') => {
    return axios.get(`${API_URL}/top-headlines`, {
      params: {
        category: category,
        country: 'us',
        apiKey: API_KEY,
      },
    });
  },

  getArticle: (id) => {
    return axios.get(`${API_URL}/everything`, {
      params: {
        qInTitle: id,
        apiKey: API_KEY,
      },
    });
  },

  search: (query) => {
    return axios.get(`${API_URL}/everything`, {
      params: {
        q: query,
        sortBy: 'publishedAt',
        apiKey: API_KEY,
      },
    });
  },
};

export default NewsAPI;