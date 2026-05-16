import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getClinics } from "../services/clinicService";

import { useNavigate } from "react-router-dom";

function Clinics() {
  const [clinics, setClinics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await getClinics();

        setClinics(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClinics();
  }, []);

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Hospital Clinics
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {clinics.map((clinic) => (

          <div
            key={clinic._id}
            className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-xl transition"
          >

            <h2 className="text-2xl font-bold text-gray-800">
              {clinic.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {clinic.description}
            </p>

            <div className="mt-4">

              <h3 className="font-semibold">
                Available Days:
              </h3>

              <p className="text-gray-500">
                {clinic.availableDays.join(", ")}
              </p>

            </div>

            <div className="mt-3">

              <h3 className="font-semibold">
                Time Slots:
              </h3>

              <p className="text-gray-500">
                {clinic.availableTimeSlots.join(", ")}
              </p>

            </div>

            <button
              onClick={() =>
                navigate(
                  `/book-appointment/${clinic._id}`
                )
              }
              className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Book Appointment
            </button>

          </div>

        ))}

      </div>

    </DashboardLayout>
  );
}

export default Clinics;