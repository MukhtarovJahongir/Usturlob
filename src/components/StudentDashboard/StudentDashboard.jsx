import React, { useState } from "react";
import "./StudentDashboard.css";

const topics = ["Qo‘shish", "Ayirish", "Ko‘paytirish"];

const demoQuestions = {
  "Qo‘shish": [
    { q: "5 + 3 =", a: 8 },
    { q: "2 + 7 =", a: 9 },
  ],
  "Ayirish": [
    { q: "9 - 4 =", a: 5 },
    { q: "7 - 2 =", a: 5 },
  ],
};

const StudentDashboard = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");

  const handleAnswer = () => {
    if (parseInt(input) === demoQuestions[selectedTopic][currentQ].a) {
      setScore(score + 1);
    }
    setInput("");
    setCurrentQ(currentQ + 1);
  };

  return (
    <div className="dashboard-container">
      {!selectedTopic ? (
        <div className="topics">
          <h2>Mavzuni tanlang 📚</h2>
          {topics.map((t) => (
            <button key={t} onClick={() => setSelectedTopic(t)}>
              {t}
            </button>
          ))}
        </div>
      ) : currentQ < demoQuestions[selectedTopic].length ? (
        <div className="quiz">
          <h3>{demoQuestions[selectedTopic][currentQ].q}</h3>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAnswer}>Javobni tekshirish</button>
        </div>
      ) : (
        <div className="result">
          <h2>Siz {score} / {demoQuestions[selectedTopic].length} savolga javob berdingiz ✅</h2>
          <button onClick={() => {setSelectedTopic(null); setCurrentQ(0); setScore(0);}}>Orqaga</button>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
