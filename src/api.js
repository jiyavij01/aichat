import axios from "axios";

export const API_BASE_URL = "http:chat-production-700a.up.railway.app/api/chat/response";


const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default api;