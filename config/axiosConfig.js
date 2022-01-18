import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://microservice.newsifier.com/api/v2"
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["X-Tenant"] = "androidworld.newsifier.com";
  return config;
});

export default axiosInstance;
