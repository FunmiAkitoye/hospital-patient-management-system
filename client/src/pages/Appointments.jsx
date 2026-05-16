import { useEffect, useState } from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

function Appointments() {

  const [appointments, setAppointments] =
    useState([]);

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const fetchAppointments = async () => {
    try {

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const response = await axios.get(
        "http://localhost:5000/api/appointments",
        config
      );

      setAppointments(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);


  // DELETE APPOINTMENT
  const deleteAppointment = async (id) => {
    try {

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(
        `http://localhost:5000/api/appointments/${id}`,
        config
      );

      fetchAppointments();

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <DashboardLayout>

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          My Appointments
        </h1>

        <div className="space-y-5">

          {appointments.map((appointment) => (

            <div
              key={appointment._id}
              className="bg-white shadow-md rounded-2xl p-5 border"
            >

              <h2 className="text-2xl font-bold">
                {
                  appointment.clinic?.name
                }
              </h2>

              <p className="text-gray-600 mt-2">
                {
                  appointment.reason
                }
              </p>

              <div className="mt-4 space-y-1">

                <p>
                  <span className="font-semibold">
                    Date:
                  </span>
                  {" "}
                  {new Date(
                    appointment.date
                  ).toLocaleDateString()}
                </p>

                <p>
                  <span className="font-semibold">
                    Time:
                  </span>
                  {" "}
                  {appointment.time}
                </p>

                <p>
                  <span className="font-semibold">
                    Status:
                  </span>
                  {" "}
                  <span className="capitalize text-blue-600">
                    {
                      appointment.status
                    }
                  </span>
                </p>

              </div>

              <button
                onClick={() =>
                  deleteAppointment(
                    appointment._id
                  )
                }
                className="mt-5 bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
              >
                Cancel Appointment
              </button>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Appointments;