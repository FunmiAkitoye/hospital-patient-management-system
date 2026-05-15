require("dotenv").config();
const connectDB = require("./config/db");
const Doctor = require("./models/Doctor");

const seedDoctors = async () => {
  try {
    await connectDB();

    await Doctor.deleteMany();

    await Doctor.insertMany([
      {
        name: "Dr. John Smith",
        email: "john.smith@hospital.com",
        specialty: "Cardiologist",
        phone: "08012345678",
        isAvailable: true,
        availability: [
          {
            day: "Monday",
            timeSlots: ["10:00", "14:00"],
          },
        ],
      },
      {
        name: "Dr. Sarah Johnson",
        email: "sarah.johnson@hospital.com",
        specialty: "Dermatologist",
        phone: "08023456789",
        isAvailable: false,
        availability: [
          {
            day: "Wednesday",
            timeSlots: ["12:00", "16:00"],
          },
        ],
      },
      {
        name: "Dr. Michael Lee",
        email: "michael.lee@hospital.com",
        specialty: "Neurologist",
        phone: "08034567890",
        isAvailable: true,
        availability: [
          {
            day: "Friday",
            timeSlots: ["09:00", "13:00"],
          },
        ],
      },
    ]);

    console.log("Doctors seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDoctors();