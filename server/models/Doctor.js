const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    specialty: {
      type: String,
      required: true,
    },

     phone: {
      type: String,
    },

     email: {
      type: String,
      required: true,
      unique: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    availability: [
     {
       day: String,
        timeSlots: [String],
    },
  ],

      isAvailable: {
        type: Boolean,
        default: true,
      },
    },
   
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);