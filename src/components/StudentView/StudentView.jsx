import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./StudentView.css";
import TopicsDemo from "../TopicsDemo/TopicsDemo";
import StudentDashboardPanel from '../StudentDashboardPanel/StudentDashboardPanel';

const StudentView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // LoginPage'dan kelgan ma'lumot
  const { name, surname, avatar } = location.state || {};

  // Agar ma'lumot yo'q bo'lsa, LoginPage'ga qaytarish
  useEffect(() => {
    if (!name || !surname || !avatar) {
      navigate("/");
    }
  }, [name, surname, avatar, navigate]);

  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Confetti uchun window o'lchamini olish (responsive)
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="student-container">
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <header className="student-header">
        <div className="student-info">
          <div className="avatar-wrapper">
            <img src={avatar} alt="avatar" className="student-avatar" />
          </div>
          <div className="name-tag">
            {name} {surname}
          </div>
        </div>
        <div className="coins-box">💰 1200</div>
      </header>
      <div className="student-content">
      <StudentDashboardPanel />
        <TopicsDemo />
      </div>
    </div>
  );
};

export default StudentView;
