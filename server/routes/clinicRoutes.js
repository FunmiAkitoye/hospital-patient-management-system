const express = require("express");

const router = express.Router();

const {
  getClinics,
  addClinic,
} = require("../controllers/clinicController");

router.get("/", getClinics);

router.post("/", addClinic);

module.exports = router;