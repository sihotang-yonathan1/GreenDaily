import axios from "axios";

const API_KEY = process.env.IQAIR_API_KEY as string;
const BASE_URL = "https://api.iqair.com/v1";

export async function fetchAirQuality(city: string) {
  try {
    const response = await axios.get(`${BASE_URL}/cities`, {
      params: {
        city,
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching air quality data:", error);
    throw error;
  }
}
