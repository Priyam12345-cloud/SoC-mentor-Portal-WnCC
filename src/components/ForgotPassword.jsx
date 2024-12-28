import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./MentorLogin.css"; // Reuse the same CSS as MentorLogin

function ForgotPassword() {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request submitted:", formData);
    alert("Password reset link sent. Please check your email.");
    navigate("/mentor/login");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <motion.h1
          className="login-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Forgot Password
        </motion.h1>
        <motion.form
          className="login-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <label htmlFor="name" className="login-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            className="login-input"
          />

          <label htmlFor="roll" className="login-label">
            Roll no.
          </label>
          <input
            type="text"
            id="roll"
            name="roll"
            placeholder="Enter your Roll no."
            value={formData.roll}
            onChange={handleChange}
            className="login-input"
          />

          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
          />

          <motion.button
            type="submit"
            className="login-button"
            whileHover={{ scale: 1.05 }}
          >
            Submit
          </motion.button>
        </motion.form>
        <div className="forgot-password-container">
          <button
            className="back-to-login"
            onClick={() => navigate("/mentor/login")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
