import Axios from "axios";
import { Alert } from "../utils/SweetAlert";
const axios = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
axios.interceptors.request.use(
  function (config) {
    config.headers.authorization = localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default axios;


