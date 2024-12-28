import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MentorRegister from "./components/MentorRegister";
import MentorLogin from "./components/MentorLogin";
import MenteeList from "./components/MenteeList";
import RankList from "./components/RankList";
import ForgotPassword from "./components/ForgotPassword";
import MentorPortal from "./components/MentorPortal";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor/register" element={<MentorRegister />} />
          <Route path="/mentor/login" element={<MentorLogin />} />
          <Route path="/mentor/mentees" element={<MenteeList />} />
          <Route path="/mentor/rank_list" element={<RankList />} />
          <Route path="/mentor/mentorPortal" element={<MentorPortal />} />
          <Route path="/mentor/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
