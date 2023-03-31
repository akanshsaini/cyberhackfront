import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8080/api/v1/",
});
// const api = axios.create({
//   baseURL: "http://localhost:8080/api",
// });
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default api;