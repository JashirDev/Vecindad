import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.interceptors.request.use(config => {
  const token = localStorage.getItem("API_TOKEN") || null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, Promise.reject);

export default axios;
