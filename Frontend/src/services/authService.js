import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials, {
    withCredentials: true,
  });
  return response.data;
};

export const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data, {
    withCredentials: true,
  });
   return response.data;
};
