import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.your-bitter-app.com',
});

export default api;
