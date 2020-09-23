import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json",
  },
});

export default api;
