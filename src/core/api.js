import axios from "axios";
import store from "../store";

const api = axios.create({
  baseURL: "http://192.168.0.105:3001",
  // baseURL: "https://adtasks-api.vercel.app",
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  config.headers = {
    token: token,
  };

  return config;
});

export default api;
