import axios from "axios";

const baseURL = process.env.REACT_APP_URL_BASE;
const apiService = axios.create({ baseURL });

apiService.interceptors.request.use((req) => {
  req.headers["Content-Type"] = "application/json";

  return req;
});

export { apiService, baseURL };
