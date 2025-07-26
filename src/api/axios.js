// axios.js
import axios from "axios";

// 🚨 Use your real backend URL (hosted on Render or wherever)
const BASE_URL = " https://omnicart-backend-7ujt.onrender.com"; // change this to your backend URL

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // If you're using cookies or session
});

export default api;
