import axios from 'axios';
const token = localStorage.getItem("token");

const API_URL = "http://localhost:3000/api";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/productos`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};