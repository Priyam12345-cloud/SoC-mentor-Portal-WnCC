import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Video Background */}
      <video autoPlay muted loop className="home-video">
        <source src="/videos/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Shadow Box for Content */}
      <div className="shadow-box">
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WnCC x SoC
          <p>Summer of Code</p>
        </motion.h1>
        <div className="home-buttons">
          <Link to="/mentor/register">
            <motion.button className="home-button" whileHover={{ scale: 1.1 }}>
              Mentor
            </motion.button>
          </Link>
          <Link to="/mentee/register">
            <motion.button className="home-button" whileHover={{ scale: 1.1 }}>
              Mentee
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
