import API from "./api";

const authService = {
  login: async (username, password) => {
    try {
      const response = await API.post("/auth/login", {
        username: username,
        password: password,
        expiresInMins: 30,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Network error" };
    }
  },
};

export default authService;
