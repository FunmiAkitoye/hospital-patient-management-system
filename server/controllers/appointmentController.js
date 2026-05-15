const Appointment = require("../models/Appointment");


// BOOK APPOINTMENT
const bookAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL APPOINTMENTS
const getAppointments = async (req, res) => {
  try {
    

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE APPOINTMENT
const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Appointment deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  deleteAppointment,
};