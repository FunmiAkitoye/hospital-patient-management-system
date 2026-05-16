const Appointment = require("../models/Appointment");


// BOOK APPOINTMENT
const bookAppointment = async (req, res) => {
  try {

    const {
      patient,
      clinic,
      date,
      time,
      reason,
    } = req.body;

    const appointment =
      await Appointment.create({
        patient,
        clinic,
        date,
        time,
        reason,
        status: "pending",
      });

    res.status(201).json(
      appointment
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL APPOINTMENTS
const getAppointments = async (
  req,
  res
) => {
  try {

    const appointments =
      await Appointment.find()
        .populate("patient")
        .populate("clinic");

    res.status(200).json(
      appointments
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE APPOINTMENT
const deleteAppointment = async (
  req,
  res
) => {
  try {

    await Appointment.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Appointment deleted",
    });

  } catch (error) {

    console.log(error);

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