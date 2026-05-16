import axios from "axios";

const API_URL =
  "http://localhost:5000/api/clinics";

// GET CLINICS
export const getClinics = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};