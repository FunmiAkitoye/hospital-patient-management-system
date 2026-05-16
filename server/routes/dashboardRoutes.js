const express = require("express");
const router = express.Router();
const { getUpcomingAppointments } = require("../controllers/dashboardController");
const { getStats } = require("../controllers/dashboardController");
const { getTodayAppointments} = require("../controllers/dashboardController"); 
const { getDoctorSchedule} = require("../controllers/dashboardController"); 
const {getPatientHistory } = require("../controllers/dashboardController"); 


router.get("/stats", getStats);
router.get("/upcoming", getUpcomingAppointments);
router.get("/today", getTodayAppointments);
router.get("/doctor/:id", getDoctorSchedule);
router.get("/patient/:id", getPatientHistory);

module.exports = router;

