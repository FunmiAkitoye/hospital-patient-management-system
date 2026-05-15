import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(formData);

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      alert("Registration Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100">
    
    
      <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">Create Account</h1>
       <p className="text-center text-gray-500 mb-8">
          Join the Hospital Care System
        </p>

       

      <form onSubmit={handleSubmit}
      className="space-y-5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
         className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
           className="w-full p-3 border rounded-lg"
           />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <button type="submit"  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Create Account
        </button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Already have an account?
        <Link to="/" className="text-blue-600 font-medium ml-1 hover:underline">
          Login
        </Link>
      </p>
    </div>
    </div>
  );
}

export default Register;