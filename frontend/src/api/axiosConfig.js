import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // URL de ton backend
  timeout: 5000, // Temps limite de 5 secondes
});

export default api;
