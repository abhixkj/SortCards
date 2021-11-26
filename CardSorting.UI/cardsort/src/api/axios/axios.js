import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_CARD_SERVICE_URL,
  timeout: 20000,
});

export default axiosInstance;