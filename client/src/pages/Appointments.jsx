import { useEffect, useState } from "react";
import axios from "axios";

function Appointments() {

  const token = localStorage.getItem("token");
  
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
  });

  const [appointments, setAppointments] = useState([]);


  // FETCH APPOINTMENTS
  const fetchAppointments = async () => {
    try {

      const response = await axios.get(
        "http://localhost:5000/api/appointments"
      );

      setAppointments(response.data);

    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchAppointments();
  }, []);


  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // CREATE APPOINTMENT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/appointments",
        formData
      );

      alert("Appointment booked successfully");

      setFormData({
        patientName: "",
        doctorName: "",
        appointmentDate: "",
        appointmentTime: "",
        reason: "",
      });

      fetchAppointments();

    } catch (error) {
      console.error(error);

      alert("Booking failed");
    }
  };


  // DELETE APPOINTMENT
  const deleteAppointment = async (id) => {
    try {

      await axios.delete(
        `http://localhost:5000/api/appointments/${id}`
      );

      fetchAppointments();

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div style={{ padding: "30px" }}>

      <h1>Hospital Appointment System</h1>

      {/* BOOKING FORM */}
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={formData.doctorName}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="appointmentTime"
          placeholder="Appointment Time"
          value={formData.appointmentTime}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Book Appointment
        </button>

      </form>


      <hr />


      {/* APPOINTMENTS LIST */}
      <h2>Appointments</h2>

      {appointments.map((appointment) => (

        <div
          key={appointment._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
          }}
        >

          <h3>{appointment.patientName}</h3>

          <p>
            Doctor: {appointment.doctorName}
          </p>

          <p>
            Date:
            {" "}
            {new Date(
              appointment.appointmentDate
            ).toLocaleDateString()}
          </p>

          <p>
            Time: {appointment.appointmentTime}
          </p>

          <p>
            Reason: {appointment.reason}
          </p>

          <button
            onClick={() =>
              deleteAppointment(appointment._id)
            }
          >
            Cancel Appointment
          </button>

        </div>

      ))}

    </div>
  );
}

export default Appointments;