const Clinic = require("../models/Clinic");

// GET ALL CLINICS
const getClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find();

    res.json(clinics);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ADD CLINIC
const addClinic = async (req, res) => {
  try {
    const clinic = await Clinic.create(req.body);

    res.status(201).json(clinic);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getClinics,
  addClinic,
};