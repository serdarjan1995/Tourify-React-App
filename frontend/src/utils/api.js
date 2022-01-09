import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  mode: "cors",
  credentials: "include",
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers['Authorization'] = 'Token ' + token;
  return config;
})

api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default api;
