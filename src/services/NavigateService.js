import { apiService } from "./ApiServices";

const blogService = {
  getPosts: () => apiService.get(),
};

export { blogService };
