import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MentorRegister from "./components/MentorRegister";
import MentorLogin from "./components/MentorLogin";
import ForgotPassword from "./components/ForgotPassword";
import MentorPortal from "./components/MentorPortal";
import MenteeList from "./components/MenteeList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor/register" element={<MentorRegister />} />
          <Route path="/mentor/login" element={<MentorLogin />} />
          <Route path="/mentor/forgot-password" element={<ForgotPassword />} />
          <Route path="/mentor/mentees" element={<MentorPortal />} />
          <Route path="/mentor/menteelist" element={<MenteeList />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
