import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const avatars = [
  "https://imgcdn.stablediffusionweb.com/2024/4/2/da95cb81-4322-4ce5-b7e3-971562805826.jpg",
  "https://www.svgrepo.com/show/420337/animal-avatar-bear.svg",
  "https://static.vecteezy.com/ti/vecteur-libre/p1/4842371-hipster-ours-avatar-vectoriel.jpg",
  "https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png",
  "https://cdn.pixabay.com/photo/2023/05/08/09/33/cat-7978052_1280.jpg",
];

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !surname) {
      alert("Iltimos, ism va familiya kiriting!");
      return;
    }
    setStep(2);
  };

  const handleStart = (e) => {
    e.preventDefault();
    if (!avatar) {
      alert("Iltimos, avatar tanlang!");
      return;
    }

    const userData = { name, surname, avatar };
    localStorage.setItem("userData", JSON.stringify(userData));

    navigate("/student", { state: userData });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">🎉 Math Fun’ga Xush Kelibsiz!</h1>
        <p className="login-subtitle">
          Matematika o‘yinlari bilan o‘rganamiz! 🚀
        </p>

        {step === 1 && (
          <form onSubmit={handleNext} className="login-form">
            <input
              type="text"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Familiyangiz"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <button type="submit" className="start-btn">
              🛩️ Davom etish
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleStart} className="login-form">
            <h3>Avatar tanlang 🎨</h3>
            <div className="avatar-grid">
              {avatars.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt="avatar"
                  className={`avatar-option ${avatar === url ? "selected" : ""}`}
                  onClick={() => setAvatar(url)}
                />
              ))}
            </div>
            <button type="submit" className="start-btn">
              🚀 Boshlash
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
