import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // only if you use cookies/sessions
});

export default api