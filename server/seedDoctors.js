const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Forces Node to bypass local ISP DNS limits

require("dotenv").config();
const mongoose = require("mongoose");
const Doctor = require("./models/Doctor");
const connectDB = require("./config/db")

mongoose.connect(process.env.MONGO_URI);

const seedDoctors = async () => {
  await Doctor.deleteMany();
  await connectDB();
  await Doctor.insertMany([
    {
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      experience: 10,
      availability: "Available",
    },
    {
      name: "Dr. Sarah Johnson",
      specialization: "Dermatologist",
      experience: 7,
      availability: "Busy",
    },
    {
      name: "Dr. Michael Lee",
      specialization: "Neurologist",
      experience: 12,
      availability: "Available",
    },
  ]);

  console.log("Doctors added");

  process.exit();
};

seedDoctors();