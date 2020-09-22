import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  },
});

export default api;
