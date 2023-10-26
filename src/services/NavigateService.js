import { apiService } from "./ApiServices";

const navService = {
  getNav: () => apiService.get(process.env.REACT_APP_URL_PART),
};

export { navService };
