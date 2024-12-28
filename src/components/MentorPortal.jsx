import "./MentorPortal.scss";
import React, { useRef } from "react";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import MenteeList from "./MenteeList";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

function MentorPortal() {
  // References to the sections
  const menteeListRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div initial="initial" animate="animate">
      <motion.header variants={stagger}>
        <motion.div className="logo_wrapper" variants={fadeInUp}>
          Shahu<span>Patil</span>
        </motion.div>
        <motion.div className="menu_container" variants={stagger}>
          <motion.span variants={fadeInUp}>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "18px",
                className: "icons_container",
              }}
            >
              <div className="icon">
                <FaBehance />
              </div>
              <div className="icon">
                <FaDribbble />
              </div>
            </IconContext.Provider>
          </motion.span>
          <motion.span variants={fadeInUp}>
            <IconContext.Provider value={{ color: "#000", size: "18px" }}>
              <div className="icon">
                <IoMailOutline />
              </div>
              23b0626@iitb.ac.in
            </IconContext.Provider>
          </motion.span>
        </motion.div>
      </motion.header>

      <motion.div
        className="content_wrapper"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: easeing }}
      >
        <div className="left_content_wrapper">
          <motion.h2>
            <motion.span variants={fadeInUp} initial="initial" animate="animate">
              Computer Vision
            </motion.span>
            <motion.span variants={fadeInUp} initial="initial" animate="animate">
              Model Recognition Course
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeInUp}>
            "Guiding Minds, Building Expertise: Where Mentors Lead and Mentees
            Excel!" <br />
            CODERS TOGETHER STRONG
          </motion.p>

          <motion.div className="btn_group" variants={stagger}>
            <motion.div
              className="btn btn_primary"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(menteeListRef)} // Scroll to mentee list
            >
              Applied Mentees
              <IconContext.Provider value={{ color: "#0052cc", size: "25px" }}>
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </motion.div>
            
          </motion.div>

          <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={fadeInUp}>
              Choose Your Mentees Wisely :)
            </motion.p>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.2,
                    rotate: 180,
                    borderRadius: "100%",
                    cursor: "pointer",
                  }}
                >
                  <IoStar />
                </motion.span>
              ))}
            </IconContext.Provider>
            <motion.p className="more_review" variants={fadeInUp}>
              More than 50+ students applied.
            </motion.p>
          </motion.div>
        </div>

        <motion.div className="right_content_wrapper">
          <motion.img
            src={"/images/bg.png"}
            alt="bg"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.div>
      </motion.div>

      {/* Mentee List Section */}
      <div ref={menteeListRef}>
        <MenteeList />
      </div>

     
     
    </motion.div>
  );
}

export default MentorPortal;
