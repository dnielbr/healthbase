import axios from "axios";

const Api = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}`,
});

export default Api;
