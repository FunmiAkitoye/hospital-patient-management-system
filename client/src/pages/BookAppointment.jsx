import { useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import { createAppointment } from "../services/appointmentService";

function BookAppointment() {
  const { clinicId } = useParams();

  const navigate = useNavigate();

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [formData, setFormData] =
    useState({
      date: "",
      time: "",
      reason: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createAppointment({
        patient: userInfo._id,

        clinic: clinicId,

        date: formData.date,

        time: formData.time,

        reason: formData.reason,
      });

      alert(
        "Appointment booked successfully"
      );

      navigate("/appointments");
    } catch (error) {
      console.error(error);

      alert(
        "Failed to book appointment"
      );
    }
  };

  return (
    <DashboardLayout>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">

        <h1 className="text-3xl font-bold mb-6">
          Book Appointment
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Select Date
            </label>

            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Select Time
            </label>

            <input
              type="time"
              name="time"
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Reason for Appointment
            </label>

            <textarea
              name="reason"
              rows="4"
              onChange={handleChange}
              placeholder="Describe your symptoms or reason..."
              className="w-full border p-3 rounded-xl"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </DashboardLayout>
  );
}

export default BookAppointment;