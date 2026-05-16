const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");

// GET DASHBOARD STATS
const getStats = async (req, res) => {
  try {
    const totalDoctors = await Doctor.countDocuments();

    const totalAppointments = await Appointment.countDocuments();

    const pendingAppointments = await Appointment.countDocuments({
      status: "pending",
    });

    const confirmedAppointments = await Appointment.countDocuments({
      status: "confirmed",
    });

    const cancelledAppointments = await Appointment.countDocuments({
      status: "cancelled",
    });

    const totalPatients = await Appointment.distinct("patient");

    res.json({
      totalDoctors,
      totalPatients: totalPatients.length,
      totalAppointments,
      pendingAppointments,
      confirmedAppointments,
      cancelledAppointments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUpcomingAppointments = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const upcoming = await Appointment.find({
      date: { $gte: today },
      status: "confirmed",
    })
      .populate("clinic")
      .populate("patient");

    res.json(upcoming);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodayAppointments = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const appointments = await Appointment.find({
      date: today,
    })
      .populate("clinic")
      .populate("patient");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDoctorSchedule = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      doctor: req.params.id,
    }).populate("patient");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPatientHistory = async (req, res) => {
  try {
    const history = await Appointment.find({
      patient: req.params.id,
    }).populate("clinic");

    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStats,
  getUpcomingAppointments,
  getTodayAppointments,
  getDoctorSchedule,
  getPatientHistory,
};
