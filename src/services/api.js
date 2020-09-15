import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export default api;
