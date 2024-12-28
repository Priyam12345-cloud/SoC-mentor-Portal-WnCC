import React, { useState } from "react";
import MentorLogin from "./MentorLogin";
import MentorRegister from "./MentorRegister";
import "./MentorLoginRegister.css";

function MentorLoginRegister() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container">
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Login Form */}
        <div className="flip-card-front">
          <MentorLogin />
          <button className="toggle-button" onClick={toggleFlip}>
            Register
          </button>
        </div>

        {/* Register Form */}
        <div className="flip-card-back">
          <MentorRegister />
          <button className="toggle-button" onClick={toggleFlip}>
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default MentorLoginRegister;
