import React, { useState } from "react";
import { Button, LinearProgress, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const quizData = [
  {
    question: "Mashina 60 km/soat tezlikda 2 soat yurdi. Masofa qancha?",
    type: "input",
    answer: "120",
  },
  {
    question: "Piyoda 3 km/soat tezlikda 4 soat yurdi. Masofa qancha?",
    type: "radio",
    options: ["10 km", "12 km", "15 km"],
    answer: "12 km",
  },
  {
    question: "Poyezd 80 km/soat tezlikda 3 soat yurdi. Masofa qancha?",
    type: "input",
    answer: "240",
  },
  {
    question: "Velosipedchi 5 km/soat tezlikda 6 soat yurdi. Masofa qancha?",
    type: "radio",
    options: ["25 km", "30 km", "35 km"],
    answer: "30 km",
  },
  {
    question: "Avtobus 70 km/soat tezlikda 1.5 soat yurdi. Masofa qancha?",
    type: "input",
    answer: "105",
  },
  {
    question: "Piyoda 4 km/soat tezlikda 3 soat yurdi. Masofa qancha?",
    type: "radio",
    options: ["10 km", "11 km", "12 km"],
    answer: "12 km",
  },
  {
    question: "Mashina 90 km/soat tezlikda 2 soat yurdi. Masofa qancha?",
    type: "input",
    answer: "180",
  },
  {
    question: "Velosipedchi 15 km/soat tezlikda 2 soat yurdi. Masofa qancha?",
    type: "radio",
    options: ["25 km", "30 km", "35 km"],
    answer: "30 km",
  },
  {
    question: "Avtobus 60 km/soat tezlikda 2.5 soat yurdi. Masofa qancha?",
    type: "input",
    answer: "150",
  },
  {
    question: "Poyezd 100 km/soat tezlikda 3 soat yurdi. Masofa qancha?",
    type: "radio",
    options: ["200 km", "250 km", "300 km"],
    answer: "300 km",
  },
];

const QuizComponent = () => {
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!answer) {
      alert("Javob kiriting!");
      return;
    }
    if (answer.trim() === quizData[current].answer) {
      setScore(score + 1);
    }
    setAnswer("");
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  };

  const progress = ((current + (completed ? 1 : 0)) / quizData.length) * 100;
  const starRating = Math.round((score / quizData.length) * 5);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb, #fbc2eb, #a6c0fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          width: "100%",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        {!completed ? (
          <>
            <h2 style={{ color: "#333", marginBottom: "20px" }}>
              {quizData[current].question}
            </h2>
            {quizData[current].type === "input" ? (
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="✏️ Javobingizni kiriting"
                style={{
                  padding: "12px 15px",
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  outline: "none",
                  fontSize: "16px",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.05)",
                }}
              />
            ) : (
              quizData[current].options.map((opt, idx) => (
                <div key={idx} style={{ margin: "10px 0", textAlign: "left" }}>
                  <label
                    style={{
                      display: "block",
                      background: "#f5f7fa",
                      padding: "10px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={opt}
                      checked={answer === opt}
                      onChange={(e) => setAnswer(e.target.value)}
                      style={{ marginRight: "10px" }}
                    />
                    {opt}
                  </label>
                </div>
              ))
            )}
            <Button
              onClick={handleNext}
              variant="contained"
              style={{
                marginTop: "20px",
                background: "linear-gradient(90deg, #667eea, #764ba2)",
                borderRadius: "12px",
                padding: "10px 20px",
                fontWeight: "bold",
              }}
            >
              Keyingi ➡️
            </Button>
            <div style={{ marginTop: "25px" }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                style={{
                  height: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#e0e0e0",
                }}
              />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#444" }}>
                {current + 1} / {quizData.length} savol
              </p>
            </div>
          </>
        ) : (
          <>
            <Confetti />
            <h2 style={{ color: "#333" }}>🎉 Tabriklaymiz! Test yakunlandi!</h2>
            <p style={{ fontSize: "18px", margin: "15px 0" }}>
              To'g'ri javoblar: <b>{score}</b> / {quizData.length}
            </p>
            <div style={{ marginTop: "20px" }}>
              <Rating value={starRating} readOnly />
            </div>
            <Button
              variant="contained"
              style={{
                marginTop: "20px",
                background: "linear-gradient(90deg, #43cea2, #185a9d)",
                borderRadius: "12px",
                padding: "10px 20px",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/student")}
            >
              Davom etish
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
