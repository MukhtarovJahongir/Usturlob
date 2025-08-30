import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import StudentView from "./components/StudentView/StudentView";
import Shop from './components/Shop/Shop';
import QuizComponent from './page/HarakatMasalalari/HarakatMasalalari';
import UserAccountPage from './components/UserAccountPage/UserAccountPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/student" element={<StudentView />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/user" element={<UserAccountPage />} />
      <Route path="/HarakatgaDoirMasalar" element={<QuizComponent />} />
    </Routes>
  );
};

export default App;
