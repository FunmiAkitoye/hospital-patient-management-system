import axios from "axios";

const API_URL =
  "http://localhost:5000/api/appointments";

export const createAppointment = async (
  appointmentData
) => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const response = await axios.post(
    API_URL,
    appointmentData,
    config
  );

  return response.data;
};