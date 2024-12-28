import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./RankList.css";

function RankList() {
  const [rankList, setRankList] = useState([]);

  useEffect(() => {
    // Simulated API response for testing
    const simulatedResponse = [
      { mentee: { name: "Mentee1", roll: "123" }, rank: 1 },
      { mentee: { name: "Mentee2", roll: "124" }, rank: 2 },
      { mentee: { name: "Mentee2", roll: "124" }, rank: 3 },
      { mentee: { name: "Mentee2", roll: "124" }, rank: 4 },
      { mentee: { name: "Mentee2", roll: "124" }, rank: 5 },
      { mentee: { name: "Mentee2", roll: "124" }, rank: 6 },
      { mentee: { name: "Mentee2", roll: "124" }, rank: 7 },
    ];

    setTimeout(() => {
      setRankList(simulatedResponse); // Simulate a successful response
    }, 1000);
  }, []);

  return (
    <div className="rank-list-container">
      <motion.h2
        className="rank-list-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Rank List
      </motion.h2>
      <motion.ul
        className="rank-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {(rankList || []).map((project, index) => (
          <motion.li
            key={index}
            className="rank-list-item"
            whileHover={{ scale: 1.02 }}
          >
            <span>
              {project.mentee.name} ({project.mentee.roll}) - Rank:{" "}
              {project.rank}
            </span>
            <div className="rank-list-buttons">
              <motion.button
                className="move-up-button"
                whileHover={{ scale: 1.05 }}
              >
                Move Up
              </motion.button>
              <motion.button
                className="move-down-button"
                whileHover={{ scale: 1.05 }}
              >
                Move Down
              </motion.button>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default RankList;
