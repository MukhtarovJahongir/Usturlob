import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTrophy, FaSkull, FaClock } from "react-icons/fa";
import "./UserAccountPage.css";

const UserAccountPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, surname, avatar } = location.state || {};

  React.useEffect(() => {
    if (!name || !surname || !avatar) {
      navigate("/");
    }
  }, [name, surname, avatar, navigate]);

  return (
    <div className="user-page-container">
      {/* HEADER */}
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

      {/* MAIN */}
      <div className="user-main">
        {/* CARD 1 */}
        <div className="stat-card">
          <h3 className="card-title">
            <FaTrophy className="icon win" /> Jang Statistikasi
          </h3>
          <div className="wins">Yutuqlar: 15</div>
          <div className="losses">Mag'lubiyatlar: 5</div>
        </div>

        {/* CARD 2 */}
        <div className="stat-card">
          <h3 className="card-title">
            <FaClock className="icon time" /> Sarflangan vaqt
          </h3>
          <div className="daily">Kundalik: 2 soat</div>
          <div className="weekly">Haftalik: 10 soat</div>
          <div className="monthly">Oylik: 40 soat</div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountPage;
