import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL || 'https://enterpriseproject-production.up.railway.app';

export async function fetchRestaurants() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/data`);
    console.log("RESPONSE", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
}