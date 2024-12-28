import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./MentorLogin.css";

function MentorLogin() {
  const [formData, setFormData] = useState({
    roll: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/mentor/login", formData)
      .then((response) => {
        console.log(response.data);
        navigate("/mentor/mentees");
      })
      .catch((error) => {
        console.error(error);
        alert("Login failed. Please check your credentials.");
      });
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
          WnCC
        </motion.h1>
        <motion.h2
          className="login-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Mentor Login
        </motion.h2>
        <motion.form
          className="login-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <label htmlFor="roll" className="login-label">
            Roll no.
          </label>
          <input
            type="text"
            name="roll"
            id="roll"
            placeholder="Enter your Roll"
            value={formData.roll}
            onChange={handleChange}
            className="login-input"
          />
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
          />
          <motion.button
            type="submit"
            className="login-button"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
        </motion.form>
        <div className="forgot-password-container">
          <Link to="/mentor/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
        </div>
        <p className="signup-prompt">
          Don’t have an account yet?{" "}
          <Link to="/mentor/register" className="signup-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default MentorLogin;
