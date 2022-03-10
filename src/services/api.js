import axios from "axios";

const api = axios.create({
  baseURL: "https://142.93.107.238/api/",
});

api.interceptors.request.use(
  function (config) {
    const access_token = localStorage.getItem("token");

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
