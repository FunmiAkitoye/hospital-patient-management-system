const express = require("express");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  deleteAppointment,
} = require("../controllers/appointmentController");

router.post("/", protect, bookAppointment);
router.get("/", protect, getAppointments);
router.delete("/:id", protect, deleteAppointment);


module.exports = router;