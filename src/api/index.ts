import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://newyearium-backend.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;