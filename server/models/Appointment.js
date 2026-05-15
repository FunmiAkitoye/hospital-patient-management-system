const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    },

    patientName: {
      type: String,
      required: true,
    },

    doctorName: {
      type: String,
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },

    appointmentTime: {
      type: String,
      required: true,
    },

    reason: {
      type: String,
    },

    status: {
      type: String,
        enum: ["pending", "confirmed", "cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);