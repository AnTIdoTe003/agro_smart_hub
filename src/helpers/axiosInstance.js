import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://agro-flask.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
