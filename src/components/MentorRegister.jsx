import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./MentorRegister.css";

function MentorRegister() {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    password: "",
    project: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission logic
    console.log("Submitted Data:", formData);
    navigate("/mentor/login");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <motion.h2
          className="register-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Registration Form
        </motion.h2>
        <motion.form
          className="register-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="register-input"
          />
          <input
            type="text"
            name="roll"
            placeholder="Roll no."
            value={formData.roll}
            onChange={handleChange}
            className="register-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="register-input"
          />
          <input
            type="text"
            name="project"
            placeholder="Project"
            value={formData.project}
            onChange={handleChange}
            className="register-input"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="register-input description"
          ></textarea>
          <motion.button
            type="submit"
            className="register-button"
            whileHover={{ scale: 1.05 }}
          >
            Submit
          </motion.button>
        </motion.form>
        <div className="login-link">
          <p>Already Registered?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="login-button"
            onClick={() => navigate("/mentor/login")}
          >
            Login
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default MentorRegister;
