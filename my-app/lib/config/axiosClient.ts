import axios from "axios";
import Cookies from "js-cookie"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 60000,
  timeoutErrorMessage: "Server Timedout...",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  // config
  const token = Cookies.get("_at_61");
  if (token) {
    config.headers.Authorization = "Bearer " + token; // to access private API endpoints
  }
  return config;
});

// axiosInstance.interceptors.response.use();
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (exception) => {
    // throw exception?.response ? exception.response.data : {message: exception.mes}
    if (exception.status === 400 || exception.status === 422) {
      // validation error
      throw exception?.response?.data;
    } else {
      throw exception?.resopnse;
    }
  },
);

export default axiosInstance;
