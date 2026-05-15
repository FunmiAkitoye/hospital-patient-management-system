import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getDoctors } from "../services/doctorService";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctors();

      setDoctors(data);
    };

    fetchDoctors();
  }, []);

  return (
    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-6">
        Doctors List
      </h1>

      <div className="grid md:grid-cols-3 gap-4">

        {doctors.map((doc) => (
          <div
            key={doc._id}
            className="bg-white p-4 rounded-xl shadow"
          >

            <h2 className="text-xl font-bold">
              {doc.name}
            </h2>

            <p>
              {doc.specialization}
            </p>

            <p>
              Experience: {doc.experience} years
            </p>

            <p>
              Status: {doc.availability}
            </p>

          </div>
        ))}

      </div>

    </DashboardLayout>
  );
}

export default Doctors;