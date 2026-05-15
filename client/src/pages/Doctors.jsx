import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getDoctors } from "../services/doctorService";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Doctors Directory
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {doctors.map((doc) => (
          <div
            key={doc._id}
            className="bg-white p-5 rounded-2xl shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {doc.name}
            </h2>

            <p className="text-gray-600 mt-1">
              Specialty: {doc.specialty}
            </p>

            <p className="text-gray-600">
              Phone: {doc.phone || "Not provided"}
            </p>

            <p className="mt-2">
              <span className={`px-3 py-1 rounded-full text-sm ${
                doc.isAvailable
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {doc.isAvailable ? "Available" : "Unavailable"}
              </span>
            </p>

            <div className="mt-3 text-sm text-gray-500">
              {doc.availability?.length
                ? doc.availability.map((a, i) => (
                    <p key={i}>
                      {a.day}: {a.timeSlots?.join(", ")}
                    </p>
                  ))
                : "No schedule set"}
            </div>
          </div>
        ))}

      </div>
    </DashboardLayout>
  );
}

export default Doctors;