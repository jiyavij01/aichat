import axios from "axios";

export const API_BASE_URL = "chat-production-700a.up.railway.app";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default api;