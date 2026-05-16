const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Forces Node to bypass local ISP DNS limits
require("dotenv").config();

const connectDB = require("./config/db");

const Clinic = require("./models/Clinic");

const seedClinics = async () => {
  try {
    await connectDB();

    await Clinic.deleteMany();

    await Clinic.insertMany([
      {
        name: "General Outpatient Clinic",
        description:
          "General medical consultations and checkups",

        availableDays: [
          "Monday",
          "Tuesday",
          "Wednesday",
        ],

        availableTimeSlots: [
          "09:00",
          "11:00",
          "14:00",
        ],
      },

      {
        name: "Pediatrics Clinic",

        description:
          "Healthcare services for children",

        availableDays: [
          "Monday",
          "Thursday",
        ],

        availableTimeSlots: [
          "10:00",
          "13:00",
        ],
      },

      {
        name: "Dental Clinic",

        description:
          "Dental care and oral health services",

        availableDays: [
          "Tuesday",
          "Friday",
        ],

        availableTimeSlots: [
          "09:30",
          "12:30",
        ],
      },
    ]);

    console.log("Clinics seeded successfully");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedClinics();