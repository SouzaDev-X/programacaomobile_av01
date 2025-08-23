import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.171:3000", // substitua pelo seu IP local
});

export default api;
